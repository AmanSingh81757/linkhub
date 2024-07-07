import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { SetStateAction, useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { revalidatePath } from "next/cache";

export default function AuthButton() {
const supabase = createClient();
const [user, setUser] = useState<User|null>(null);
const [signed_in, setSignedIn] = useState<boolean>(false);

useEffect(() => {
    const fetchUser = async () => {
        const { data, error} = await supabase.auth.getSession();
        const user = data?.session?.user
        setUser(user?user:null);
        console.log(user);
    }
    fetchUser();
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
        setUser(session?session.user:null);
        setSignedIn(true);
      }
      else if (event === 'SIGNED_OUT') {
        setUser(null);
        setSignedIn(false);
      }
    });
}, [signed_in]);

const signOut = async () => {

  const supabase = createClient();
  try{
    const {error} = await supabase.auth.signOut();
    if (error) {
      console.error("Error logging out:", error.message);
      return;
    }
    // setUser(null);
    setSignedIn(false);
      console.log("Logged out successfully");
  } catch (error) {
      console.error("Error logging out:", error);
    }
};

return user ? (
<form action={async ()=>{
  await signOut();
  redirect("/login");
}} className="px-3 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover text-base"
>
  <Button variant="outline">
    Logout
  </Button>
</form>
) : (
  <Link
    href="/login"
    className="px-3 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover border border-secondary text-base"
  >
    <Button variant="outline">
        Login
    </Button>
  </Link>
  );
}