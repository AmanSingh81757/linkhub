"use client"
import { Button } from "@/components/ui/button";
import { PlusIcon, TrashIcon, ShareIcon, PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import copy from 'clipboard-copy';
import { Copy } from "lucide-react";
import { useState } from "react";
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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { deleteLinkTree, revalidateGivenPath } from "@/app/lib/link-tree";

export function AddLinkTree() {
    return (
      <Link href="/dashboard/linktrees/create" >
        <Button variant="default" className="flex items-center w-full">
        <span className="block">Add</span>{' '}
        <PlusIcon className="h-5 md:ml-4 text-secondary" />
        </Button>
      </Link>
    );
}


export function DeleteLinkTree({ id }: { id: Number }) {
    "use client"
    return (
      <form className='flex' action={()=>{
        deleteLinkTree(id);
        revalidateGivenPath('/dashboard/shortlinks');
        }}>
        <Button variant={"destructive"} size={"sm"}>
          <span className="sr-only">Delete</span>
          <TrashIcon className="w-5" />
        </Button>
      </form>
    );
  }

  export function ShareLinkTree({ id, shortened_link }: { id: Number, shortened_link: string}) {
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

export function EditLinkTree({ id }: { id: Number }) {
    return (
      <Link href={`/dashboard/linktrees/${id}/edit`}>
        <Button variant={"secondary"} size={"sm"}>
          <span className="sr-only">Edit</span>
          <PencilIcon className="w-5" />
        </Button>
      </Link>
    );
}