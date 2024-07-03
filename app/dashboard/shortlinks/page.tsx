import ShortenedLinks from "@/components/dashboard/shortenedLinks/ShortenedLinks";
import { AddShortLink } from "@/components/dashboard/shortenedLinks/buttons";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Suspense } from 'react'

export default async function DashboardPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <main className="flex-1 w-full flex flex-col gap-20 items-center">
        <div className="flex flex-row justify-between w-full">
          <h1 className="text-4xl font-bold">Your shortened Links will show here</h1>
          <AddShortLink />
        </div>
        <Suspense fallback={<p className="text-3xl font-extrabold flex justify-start">Loading feed...</p>}>
          <ShortenedLinks />
        </Suspense>
    </main>
  );
}
