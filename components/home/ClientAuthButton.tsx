import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { SetStateAction, useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";

export default function AuthButton() {
    const supabase = createClient();
    const [user, setUser] = useState<User|undefined>(undefined);

    useEffect(() => {
        const fetchUser = async () => {
            const { data, error} = await supabase.auth.getSession();
            const user = data?.session?.user
            setUser(user);
            console.log(user);
        }
    }, []);

    const signOut = async () => {

      const supabase = createClient();
      await supabase.auth.signOut();
      return redirect("/login");
    };

    return user ? (
      <div className="flex items-center gap-4">
        <a href="/dashboard">
        <Button variant="default" className="flex items-center">
        <span className="hidden md:block">Go to Dashboard</span>{' '}<ArrowUpRightIcon className="h-5 w-5 ml-2" />
        </Button>

        </a>
        <form action={signOut}>
          <Button variant="outline" className="py-2 px-4 rounded-md no-underline text-base">
            Logout
          </Button>
        </form>
      </div>
    ) : (
      <Link
        href="/login"
        className="py-2 px-3 absolute left-64 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover border border-secondary text-base"
      >
        <Button variant="outline">
            Login
        </Button>
      </Link>
    );
  }