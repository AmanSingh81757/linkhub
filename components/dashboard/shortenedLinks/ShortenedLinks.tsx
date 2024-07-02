import { getAllShortedLinks } from "@/app/lib/short-link";
import { createClient } from "@/utils/supabase/server";
import { DeleteShortLink, ShareShortLink } from "./buttons";
import { UpdateShortLink } from "./buttons";

export default async function ShortenedLinks() {
    const supabase = createClient();
    const { data: { user }, } = await supabase.auth.getUser();

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
                        <ShareShortLink id={link.id} />
                        <UpdateShortLink id={link.id} />
                        {/* <button className="flex-row flex py-1 px-4 rounded-md no-underline bg-green-600 hover:bg-green-700 text-white">Edit
                            <svg width="16px" height="16px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="arrowRightTopIconTitle" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000000"> <title id="arrowRightTopIconTitle">Arrow Right Top</title> <path d="M19 13V5h-8"/> <path stroke-linecap="round" d="M19 5l-1 1"/> <path d="M18 6L5 19"/> </svg>
                        </button> */}
                        <DeleteShortLink id={link.id} />
                    </div>
                </div>
            )
        })
        }
    </div>
  );
}