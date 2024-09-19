"use server"
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from 'next/cache'

export async function UploadQr({qrCode, filename} : {qrCode: string, filename: string}) {
    const supabase = createClient();
    const { data, error } = await supabase.storage
        .from('qrs')
        .upload(filename, qrCode)
        
}