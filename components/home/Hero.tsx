import Link from "next/link";
import { Button } from "../ui/button";

export default async function Hero() {
    return (
    <div className="flex flex-col gap-10 w-full px-16">
        <div className="hover:cursor-pointer  text-[#141E46] flex py-3 flex-row justify-between items-center rounded-xl">
            <div className="flex flex-col w-2/3 gap-10">
                <h1 className="text-5xl font-bold font-bodoni-moda">Welcome to <span className="text-[#41B06E]">LinkHub</span></h1>
                <div className="flex flex-col justify-around gap-2 overflow-hidden hover:cursor-text text-xl">
                    <h2 className="flex gap-10">LinkHub is a free online platform where you can find solution to all your link related needs and problems</h2>
                </div>
            </div>
        </div>
        <div>
            <Link href="/dashboard">
            <Button className="bg-[#41B06E] text-white">Get Started</Button>
            </Link>
        </div>
    </div>
  );
}