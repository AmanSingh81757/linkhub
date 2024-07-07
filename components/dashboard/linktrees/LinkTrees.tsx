// import { getAllShortedLinks } from "@/app/lib/short-link";
import { getAllLinkTrees } from "@/app/lib/link-tree";
import { createClient } from "@/utils/supabase/server";
// import { DeleteShortLink, ShareShortLink } from "./buttons";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ShareLinkTree, EditLinkTree, DeleteLinkTree } from "./buttons";

export default async function LinkTrees() {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    const linkTrees = await getAllLinkTrees(user?.id);
    // const links = await getAllShortedLinks(user?.id);
    return (
    <div className="flex flex-col gap-10 w-full">
        {
        linkTrees.map((linkTree) => {
            return (
                <div key={linkTree.id} className="border-2 hover:cursor-pointer border-border bg-card shadow-md shadow-primary gap-5 md:gap-0 text-[#141E46] flex md:p-3 py-2 md:flex-row flex-col items-center rounded-xl">
                    <div className="flex flex-col px-2 md:px-5 w-full gap-5">
                        <div className="flex flex-row justify-between">
                            <h1 className="md:text-3xl text-2xl font-bold font-bodoni-moda text-primary">{linkTree.title}</h1>
                            <div className="flex flex-row gap-2 px-5">
                                <ShareLinkTree id={linkTree.id} shortened_link={linkTree.shortened_link} />
                                <EditLinkTree id={linkTree.id} />
                                <DeleteLinkTree id={linkTree.id} />
                            </div>
                        </div>
                        <p className="text-md text-foreground">{linkTree.description}</p>
                    </div>
                </div>
            )
        })
        }
    </div>
  );
}