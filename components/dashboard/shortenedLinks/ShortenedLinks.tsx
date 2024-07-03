import { getAllShortedLinks } from "@/app/lib/short-link";
import { createClient } from "@/utils/supabase/server";
import { DeleteShortLink, ShareShortLink } from "./buttons";

export default async function ShortenedLinks() {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    const links = await getAllShortedLinks(user?.id);
    return (
    <div className="flex flex-col gap-10 w-full">
        {
        links.map((link) => {
            return (
                <div key={link.id} className="border-2 bg-green-100 text-black flex p-3 flex-row justify-between items-center rounded-xl">
                    <div>
                        <h1 className="text-2xl px-5">{link.title}</h1>
                        <h2 className="px-7 text-base">Original Link: {link.original_link}</h2>
                        <h2 className="text-base px-7">Shortened Link: {link.shortened_link}</h2>
                    </div>
                    <div className="flex flex-row gap-2 px-5">
                        <ShareShortLink id={link.id} shortened_link={link.shortened_link} />
                        <DeleteShortLink id={link.id} />
                    </div>
                </div>
            )
        })
        }
    </div>
  );
}