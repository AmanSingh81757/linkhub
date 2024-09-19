"use client"
import QRCode from 'qrcode'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { CreateShortLink } from "@/components/dashboard/shortenedLinks/buttons"
import { useState, useEffect } from "react"
import { createClient } from "@/utils/supabase/client"
import { UserResponse } from "@supabase/supabase-js"
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation";
import { CreateQrCodeButton } from "@/components/dashboard/qrcodes/buttons"

export default function CreateQrCodes(){
    const [title, setTitle] = useState<string>('')
    const [link, setLink] = useState<string>('')
    const [qrCode, setQrCode] = useState<string>('')

    return (
        <section className="w-full h-full flex flex-col gap-10 items-center flex-grow p-2 md:p-6 md:overflow-y-auto lg:p-12">
            <form className="flex flex-col justify-around w-1/3 gap-10">
                <div className="flex flex-col gap-5 justify-around h-full text-xs md:text-base">
                    <Label htmlFor="title" className="sr-only">Title</Label>
                    <Input id="title" placeholder="Enter title for your new QR Code" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setTitle(e.target.value) }}/>

                    <Label htmlFor="link" className="sr-only">Link</Label>
                    <Input id="link" placeholder="Enter your link" onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setLink(e.target.value) }}/>

                    {/* <div className="flex items-center gap-2">
                        <Card className="p-2 md:flex flex-grow md:min-w-[240px] hidden">linkhub-amber.vercel.app</Card> <span className="hidden md:block">/</span>
                        <Label htmlFor="custom_url" className="sr-only">Custom URL (optional)</Label>
                        <Input id="custom_url" placeholder="Enter your Custom URL (optional)" onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setCustomUrl(e.target.value)}}/>

                    </div> */}
                </div>
                    <CreateQrCodeButton title={title} link={link} />
                {/* <CreateShortLink title={title} original_link={originalLink} custom_url={customUrl} /> */}
                {/* <div className="px-3 sm:ml-auto flex justify-between gap-10">
                    <Button variant={"secondary"} className="bg-secondary hover:bg-accent text-white border-white" onClick={()=>{
                        setTitle('')
                        setOriginalLink('')
                        setCustomUrl('')
                        redirect('/dashboard/shortlinks/create')
                    }}>Retry </Button>
                    <CreateShortLink title={title} original_link={originalLink} custom_url={customUrl} user_id = {userId}/>
                </div> */}
            </form>
        </section>
    )
}