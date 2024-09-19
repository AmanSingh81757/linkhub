import { createClient } from "@/utils/supabase/server";
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "../ui/button";
export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

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
        <Button variant="secondary" className="py-2 px-4 no-underline text-base">
          Logout
        </Button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="py-2 px-3 flex no-underline bg-btn-background hover:bg-btn-background-hover text-base"
    >
     <Button className="py-2 px-4 no-underline text-base">
            <span className="hidden lg:block">Login</span>
            <span className="lg:hidden">Login</span>
      </Button>
    </Link>
  );
}
