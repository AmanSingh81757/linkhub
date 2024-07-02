import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";

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
      <button className="flex-row flex py-2 px-4 rounded-md no-underline bg-white hover:bg-slate-200 text-black">Go to Dashboard
      <svg width="20px" height="20px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="arrowRightTopIconTitle" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000000"> <title id="arrowRightTopIconTitle">Arrow Right Top</title> <path d="M19 13V5h-8"/> <path stroke-linecap="round" d="M19 5l-1 1"/> <path d="M18 6L5 19"/> </svg>
      </button>
      </a>
      <form action={signOut}>
        <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover text-base">
          Logout
        </button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className="py-2 px-3 flex rounded-md no-underline bg-btn-background hover:bg-btn-background-hover text-base"
    >
      Login / Sign Up
    </Link>
  );
}
