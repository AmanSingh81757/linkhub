"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { CreateShortLink } from "@/components/dashboard/shortenedLinks/buttons"
import { useState, useEffect } from "react"
import { createClient } from "@/utils/supabase/client"
import { UserResponse } from "@supabase/supabase-js"
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation";

export default function createShortLinkPage({
    searchParams,
}: {
  searchParams: { message: string };
}) {
    const supabase = createClient()
    const [mysession, setMySession] = useState<UserResponse>({} as UserResponse)
    const [userId, setUserId] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const [originalLink, setOriginalLink] = useState<string>('')
    const [customUrl, setCustomUrl] = useState<string>('')
    useEffect (() => {
        supabase.auth.getUser().then((session) => {
          // do something here with the session like  ex: setState(session)
          setMySession(session)
          setUserId(session.data.user?.id as string)
        });
      }, [])

  return (
    <>
    <form className="flex flex-col justify-around h-2/5">
        <div className="flex flex-col justify-around h-full">
            <Label htmlFor="title" className="sr-only">Title</Label>
            <Input id="title" placeholder="Enter title for your new short link" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setTitle(e.target.value) }}/>

            <Label htmlFor="link" className="sr-only">Link</Label>
            <Input id="link" placeholder="Enter your original link" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setOriginalLink(e.target.value) }}/>

            <div className="flex items-center gap-2">
                <Card className="p-2 w-1/5">linkhub-amber.vercel.app</Card> /
                <Label htmlFor="custom_url" className="sr-only">Custom URL (optional)</Label>
                <Input id="custom_url" placeholder="Enter your Custom URL (optional)" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setCustomUrl(e.target.value)}}/>

            </div>
        </div>
        {/* <CreateShortLink title={title} original_link={originalLink} custom_url={customUrl} /> */}
        <div className="px-3 ml-auto flex justify-between gap-10">
            <Button className="bg-secondary hover:bg-accent text-white border-white" onClick={()=>{
                setTitle('')
                setOriginalLink('')
                setCustomUrl('')
                redirect('/dashboard/shortlinks/create')
            }}>Retry</Button>
            <CreateShortLink title={title} original_link={originalLink} custom_url={customUrl} user_id = {userId}/>
        </div>
    </form>
    {searchParams?.message && (
        <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
          {searchParams.message}
        </p>
      )}
    </>
  )
}
