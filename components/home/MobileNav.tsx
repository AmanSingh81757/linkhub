"use client"
import AuthButton from "./ClientAuthButton";
import LogoButton from "./LogoButton";
import MobileMenuButton from "./MobileMenuButton";
import MobileDrawer from "./MobileDrawer";
import { useState } from "react";
import { DarkModeToggle } from "../ui/dark-mode-button";

const MobileNav = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const handleDrawerToggle = () => setIsDrawerOpen(!isDrawerOpen);
    return (
        // <div className="w-full max-w-7xl justify-between items-center p-3 text-sm gap-20 md:hidden relative">
        //   <LogoButton />
        //     <ul className="flex flex-row w-4/7 justify-around mx-20 text-lg font-light gap-10">
        //       <li className="py-2 px-3 flex no-underline hover:bg-accent rounded-md"><a href="#tools">Our Tools</a></li>
        //       <li className="py-2 px-3 flex no-underline hover:bg-accent rounded-md"><a href="#">About</a></li>
        //       <li className="py-2 px-3 flex no-underline hover:bg-accent rounded-md"><a href="#">Contact</a></li>
        //     </ul>
        //   <AuthButton />
        // </div>
        <div className="md:hidden flex w-full ">
            <div className="md:hidden w-full relative flex flex-row px-auto justify-between px-2">
                <div className="flex flex-row">
                    <MobileMenuButton onClick={handleDrawerToggle} />
                    <LogoButton />
                </div>
                <div className="flex flex-row pt-2">
                    <AuthButton />
                    {/* {children} */}
                    <DarkModeToggle />
                </div>
            </div>
            <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle}/>
        </div>
    );
}

export default MobileNav;