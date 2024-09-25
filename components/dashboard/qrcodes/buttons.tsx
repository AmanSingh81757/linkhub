"use client"
import {  PlusIcon, TrashIcon, ShareIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';
import copy from 'clipboard-copy';
import { redirect } from "next/navigation";

// import { deleteInvoice } from '@/app/lib/actions';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Copy } from "lucide-react"
import { deleteShortLink, createShortLink, revalidateGivenPath } from '@/app/lib/short-link';
import { DeleteQr, UploadQr } from '@/app/lib/qr-code';


export function CreateShortLink({title, original_link, custom_url, user_id}: {title: string, original_link: string, custom_url: string, user_id: string}) {
// export function CreateShortLink({title, original_link, custom_url}: {title: string, original_link: string, custom_url: string}) {
  "use client"

  return(
      <Button type="submit" formAction={()=>{
          createShortLink(user_id, title, original_link, custom_url)
          revalidateGivenPath('/dashboard/shortlinks')
          redirect('/dashboard/shortlinks')
        }}>
          <span className="">Create </span>
          <PlusIcon className="h-4 w-4" />
      </Button>
  )
}

export function DeleteShortLink({ id }: { id: Number }) {
  "use client"
  return (
    <form className='flex' action={()=>{
      deleteShortLink(id);
      revalidateGivenPath('/dashboard/shortlinks');
      }}>
      <Button variant={"destructive"} size={"sm"}>
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5 text-foreground" />
      </Button>
    </form>
  );
}

export function ShareShortLink({ id, shortened_link }: { id: Number, shortened_link: string}) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await copy(shortened_link);
      setIsCopied(true);
    } catch (error) {
      console.error('Failed to copy text to clipboard', error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" size={"sm"}>
          <span className="sr-only rounded-md border p-1">Share</span>
          <ShareIcon className="w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Copy Link</DialogTitle>
          <DialogDescription>
            Copy this short URL for you original link to share with others.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              id="link"
              defaultValue={shortened_link}
              readOnly
              className='font-inconsolata'
            />
          </div>
          <Button type="submit" size="sm" className="px-3" onClick={handleCopyClick}>
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}



export function AddQrCode() {
  return (
    <Link href="/dashboard/qrcodes/create" >
      <Button variant="default" className="flex items-center w-full">
      <span className="block">Add</span>{' '}
      <PlusIcon className="h-5 md:ml-4 text-secondary" />
      </Button>
    </Link>
  );
}

export function CreateQrCodeButton({title, link, user_id}: {title: string, link: string, user_id: string}) {
    return (
          <Button variant="default" className="flex items-center w-full" type="submit" formAction={()=>{
          UploadQr({title, link, user_id});
          revalidateGivenPath('/dashboard/qrcodes')
          redirect('/dashboard/qrcodes')
        }}>
            <span className="block">Create</span>{' '}
            <PlusIcon className="h-5 md:ml-4 text-secondary" />
        </Button>
    )
}

export function DeleteQrButton({ id, user_id }: { id: Number, user_id: string }) {
  "use client"
  return (
    <form className='flex' action={()=>{

      DeleteQr(id, user_id);
      revalidateGivenPath('/dashboard/qrcodes');
      }}>
      <Button variant={"destructive"} size={"sm"}>
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5 text-foreground" />
      </Button>
    </form>
  );
}