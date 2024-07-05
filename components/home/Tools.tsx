"use client"
import { HoverEffect } from "../ui/card-hover-effect";

export function Toowls() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      {/* <HoverEffect items={projects} /> */}
    </div>
  );
}
export const projects = [
  {
    title: "Link Shortening",
    description:
      "Simplify your online presence by creating and sharing short, customizable links. Track engagement with real-time analytics to measure the performance of your links and optimize your sharing strategy.",
    link: "/dashboard/shortlinks",
  },
  {
    title: "Social Media Link Tree",
    description:"Combine all your social media profiles and important links into a single, customizable link tree. Perfect for social media bios and online portfolios, it provides a seamless way for your audience to connect with all your content in one place.",
    link: "/dashboard/linktrees",
  },
  {
    title: "Link to QR generator",
    description:
      "Convert your links into QR codes for easy access and sharing. Ideal for digital and print media, QR codes allow users to quickly scan and navigate to your content, enhancing accessibility and reach.",
    link: "/dashboard/qrcodes",
  },
];


export async function Tools(){
    return (
        <section className="flex flex-col items-center justify-center max-w-5xl mx-auto px-8" id="tools">
            <h1 className="text-5xl font-semibold">Our Tools and Services</h1>
            <HoverEffect items={projects} />
        </section>
    );
}