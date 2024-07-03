"use client"
import { PencilIcon, PlusIcon, TrashIcon, ShareIcon } from '@heroicons/react/24/outline';
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
import { Copy, Router } from "lucide-react"
import { deleteShortLink, createShortLink, revalidateGivenPath } from '@/app/lib/short-link';

export function AddShortLink() {
  return (
    <Link
      href="/dashboard/shortlinks/create"
      className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-black transition-colors hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Add</span>{' '}
      <PlusIcon className="h-5 md:ml-4 text-black" />
    </Link>
  );
}

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
      <button className="rounded-md border p-2 bg-red-600 hover:bg-red-500" >
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5 text-white" />
      </button>
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
        <Button variant="outline">
        <span className="sr-only rounded-md border p-2 bg-green-600 hover:bg-green-500">Share</span>
        <ShareIcon className="w-5 text-white" />
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
            />
          </div>
          <Button type="submit" size="sm" className="px-3" onClick={handleCopyClick}>
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}