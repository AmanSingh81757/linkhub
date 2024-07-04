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
                <div key={link.id} className="border-2 hover:cursor-pointer border-[#41B06E] bg-[#8DECB4] text-[#141E46] flex p-3 flex-row justify-between items-center rounded-xl">
                    <div className="flex flex-col px-5">
                        <h1 className="text-3xl font-barlow-condensed">{link.title}</h1>
                        <div className="flex flex-row justify-around w-full gap-10  hover:cursor-text">
                            <h2 className="text-base font">Original Link: <span className="font-inconsolata font-semibold" >{link.original_link}</span></h2>
                            <h2 className="text-base">Shortened Link: <span className="font-inconsolata font-semibold">{link.shortened_link}</span></h2>
                        </div>
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