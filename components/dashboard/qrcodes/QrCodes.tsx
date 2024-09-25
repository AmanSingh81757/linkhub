import { createClient } from "@/utils/supabase/server";
import { getAllQr } from "@/app/lib/qr-code";
import Link from "next/link";
import Image from "next/image";
import { DeleteQrButton } from "./buttons";
export default async function QrCodes() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const qrs = await getAllQr(user?.id);
  return (
    <>
      {qrs.length === 0 && (
        <div className="text-center text-lg font-semibold">
          No QR codes made yet.
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 w-full">
        {qrs &&
          qrs.map((qr) => {
            return (
              <div
                key={qr.id}
                className="border-2 items-center hover:cursor-pointer border-border bg-card shadow-md shadow-primary gap-5 md:gap-0 text-primary flex flex-col p-3 rounded-xl"
              >
                <img
                  src={qr.qr_url}
                  alt={qr.title}
                  className="w-1/2 object-cover rounded-md"
                />
                <div className="flex flex-row items-center gap-5">
                  <div className="flex flex-col">
                    <h2 className="text-lg font-bold mt-2">Title: {qr.title}</h2>
                    <h2 className="text-lg font-semibold mt-2">
                      Original Link:{" "}
                      <Link className="underline" href={qr.link_url}>
                        {qr.link_url}
                      </Link>
                    </h2>
                  </div>
                  <DeleteQrButton id={qr.id} user_id={user?.id as string}/>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
