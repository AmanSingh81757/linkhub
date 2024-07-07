import { getAllShortedLinks } from "@/app/lib/short-link";
import { createClient } from "@/utils/supabase/server";
import { DeleteShortLink, ShareShortLink } from "./buttons";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default async function ShortenedLinks() {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    const links = await getAllShortedLinks(user?.id);
    return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 w-full">
        {
        links.map((link) => {
            return (
                <div key={link.id} className="border-2 hover:cursor-pointer border-border bg-card shadow-md shadow-primary gap-5 md:gap-0 text-[#141E46] flex md:p-3 py-2 md:flex-row flex-col items-center rounded-xl">
                    <div className="flex flex-col px-2 md:px-5 w-full gap-5">
                        <div className="flex flex-row justify-between">
                            <h1 className="md:text-3xl text-2xl font-bold font-bodoni-moda text-primary">{link.title}</h1>
                            <div className="flex flex-row gap-2 px-5">
                                <ShareShortLink id={link.id} shortened_link={link.shortened_link} />
                                <DeleteShortLink id={link.id} />
                            </div>
                        </div>
                        <div className="flex flex-col justify-around gap-2 overflow-hidden hover:cursor-text">
                            <div className="text-foreground">
                                <h2 className="text-base font-extralight px-2 pt-1 max-w-fit bg-background rounded-t ">Original Link:</h2>
                                <Label htmlFor="link" className="sr-only">
                                Original Link
                                </Label>
                                <Input
                                id="link"
                                defaultValue={link.original_link}
                                readOnly
                                className='font-inconsolata rounded text-foreground overflow-hidden font-medium border-t-0 rounded-tl-none'
                                />
                            </div>
                            <div className="text-foreground">
                                <h2 className="text-base font-extralight px-2 pt-1 max-w-fit bg-background rounded-t">Shortened Link:</h2>
                                <Label htmlFor="link" className="sr-only">
                                Shortened Link
                                </Label>
                                <Input
                                id="link"
                                defaultValue={link.shortened_link}
                                readOnly
                                className='font-inconsolata rounded text-foreground overflow-hidden font-medium border-t-0 rounded-tl-none'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        }
    </div>
  );
}