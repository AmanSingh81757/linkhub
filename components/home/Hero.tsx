import Link from "next/link";
// import { Button } from "../ui/button";
import {Button} from "@/components/ui/button";
import Image from "next/image";
export default async function Hero() {
    return (
    <div className="flex flex-col gap-10 w-full sm:px-8 lg:px-16 px-4 bg-gradient-to-r from-card to-background py-5">
        <div className="hover:cursor-pointer flex py-3 flex-col md:flex-row gap-5 justify-between items-center">
            <div className="flex flex-col w-full md:w-2/3 gap-10">
                <h1 className="text-5xl font-bold font-bodoni-moda">Welcome to <span className="text-primary">LinkHub</span></h1>
                <div className="flex flex-col justify-around gap-2 overflow-hidden hover:cursor-text text-xl">
                    <h2 className="flex gap-10">LinkHub is a free online platform where you can find solution to all your link related needs and problems</h2>
                </div>
            </div>
            <div className="flex items-center justify-center w-1/3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM8VLudXmd0mdaGER9sd3CfnkQOntTnBQxoA&s" alt="Random Image" className="w-full" />
            </div>
        </div>
        <div>
            <Link href="/dashboard">
                <Button >Get Started</Button>
            </Link>
        </div>
    </div>
  );
}