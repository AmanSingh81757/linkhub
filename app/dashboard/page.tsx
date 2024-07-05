import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

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
            Select a page from the sidebar to view its content.
        </main>
    );
}