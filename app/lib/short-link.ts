"use server"
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from 'next/cache'

export async function getAllShortedLinks(user_id: string | undefined){
    const supabase = createClient();
    const { data, error } = await supabase
        .from('shortenedlinks')
        .select('*')
        .eq('user_id', user_id);
    if(error){
        throw new Error(error.message)
    }
    return data;
}

export async function createShortLink(user_id: string, title: string, original_link: string, custom_url: string){
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const randomString = Array.from({length: 6}, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    if(custom_url === ''){
        custom_url = randomString;
    }
    const shortened_link = `linkhub.com/${custom_url}`;
    const supabase = createClient();
    const { data, error } = await supabase
        .from('shortenedlinks')
        .insert([
            { user_id, title, original_link, custom_url, shortened_link }
        ]);
    if(error){
        return redirect(`/dashboard/shortlinks/create?message=the custom url already exists`);
    }
    return data;
}

export async function deleteShortLink(id: Number){
    const supabase = createClient();
    const { data, error } = await supabase
        .from('shortenedlinks')
        .delete()
        .eq('id', id);
    if(error){
        throw new Error(error.message)
    }
    return data;
}

export async function revalidateGivenPath(path: string){
    revalidatePath(path);
}