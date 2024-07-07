"use server"
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from 'next/cache'

export async function getAllLinkTrees(user_id: string | undefined){
    const supabase = createClient();
    const { data, error } = await supabase
        .from('linktrees')
        .select('*')
        .eq('user_id', user_id);
    if(error){
        throw new Error(error.message)
    }
    return data;
}

export async function createLinkTree(user_id: string, title: string, description: string){
    const supabase = createClient();
    const { data, error } = await supabase
        .from('linktrees')
        .insert([
            { title, user_id, description }
        ]);
    if(error){
        return redirect(`/dashboard/linktrees/create`);
    }
    return data;
}

export async function deleteLinkTree(id: Number){
    const supabase = createClient();
    const { data, error } = await supabase
        .from('linktrees')
        .delete()
        .eq('id', id);
    if(error){
        throw new Error(error.message)
    }
    return data;
}

export async function updateLinkTree(id: Number, title: string, description: string){
    const supabase = createClient();
    const { data, error } = await supabase
        .from('linktrees')
        .update({ title, description })
        .eq('id', id);
    if(error){
        throw new Error(error.message)
    }
    return data;
}

export async function getLinkNodes(linktree_id: Number){
    const supabase = createClient();
    const { data, error } = await supabase
        .from('linknodes')
        .select('*')
        .eq('tree_id', linktree_id);
    if(error){
        throw new Error(error.message)
    }
    return data;
}

export async function createLinkNode(tree_id: Number, title: string, url: string, icon: string){
    const supabase = createClient();
    const { data, error } = await supabase
        .from('linknodes')
        .insert([
            { tree_id, title, url, icon }
        ]);
    if(error){
        return redirect(`/dashboard/linktrees/${tree_id}/create`);
    }
    return data;
}

export async function deleteLinkNode(id: Number){
    const supabase = createClient();
    const { data, error } = await supabase
        .from('linknodes')
        .delete()
        .eq('id', id);
    if(error){
        throw new Error(error.message)
    }
    return data;
}

export async function updateLinkNode(id: Number, title: string, url: string, icon: string){
    const supabase = createClient();
    const { data, error } = await supabase
        .from('linknodes')
        .update({ title, url, icon })
        .eq('id', id);
    if(error){
        throw new Error(error.message)
    }
    return data;
}
export async function revalidateGivenPath(path: string){
    revalidatePath(path);
}