"use server";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import QRCode from "qrcode";

export async function UploadQr({
  title,
  link,
  user_id,
}: {
  title: string;
  link: string;
  user_id: string;
}) {
  const supabase = createClient();

  const qrCodeDataUrl = await QRCode.toDataURL(link);

  const response = await fetch(qrCodeDataUrl);
  const blob = await response.blob();

  const { data: uploadData, error: uploadError } = await supabase.storage
    .from("qrs")
    .upload(`${title}.png`, blob, {
      contentType: "image/png",
      upsert: true,
    });

  if (uploadError) {
    throw new Error(uploadError.message);
  }

  const { data } = supabase.storage.from("qrs").getPublicUrl(uploadData.path);
  const publicUrl = data?.publicUrl;

  const { error: insertError } = await supabase
    .from("qr")
    .insert([{ title, link_url: link, qr_url: publicUrl, user_id }])
    .eq("user_id", user_id);
  if (insertError) {
    throw new Error(insertError.message);
  }
}

export async function getAllQr(user_id: string | undefined) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("qr")
    .select("*")
    .eq("user_id", user_id);
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function DeleteQr(id: Number, user_id: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("qr")
    .delete()
    .eq("id", id)
    .eq("user_id", user_id);

  if (error) throw new Error(error.message);

  return data;
}
