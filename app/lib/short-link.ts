import { createClient } from "@/utils/supabase/server";

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