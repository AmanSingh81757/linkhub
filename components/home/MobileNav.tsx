"use client"
// import AuthButton from "./ClientAuthButton";
import LogoButton from "./LogoButton";
import MobileMenuButton from "./MobileMenuButton";
import MobileDrawer from "./MobileDrawer";
import { useState } from "react";
import { DarkModeToggle } from "../ui/dark-mode-button";

const MobileNav = ({ children }:{children: React.ReactNode}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const handleDrawerToggle = () => setIsDrawerOpen(!isDrawerOpen);
    return (
        <div className="md:hidden flex w-full items-center">
            <div className="md:hidden w-full relative flex flex-row px-auto justify-between px-2 items-center">
                <div className="flex flex-row my-auto">
                    <MobileMenuButton onClick={handleDrawerToggle} />
                    <LogoButton />
                </div>
                <div className="flex flex-row items-center">
                    {/* <AuthButton /> */}
                    {children}
                    <DarkModeToggle />
                </div>
            </div>
            <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle}/>
        </div>
    );
}

export default MobileNav;