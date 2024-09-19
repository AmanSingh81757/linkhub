import { DarkModeToggle } from "../ui/dark-mode-button";
import AuthButton from "./AuthButton";
import LogoButton from "./LogoButton";
import MobileNav from "./MobileNav";
export default function Header() {
  return (
    <div className="w-full">
      <nav className="w-full md:flex items-center justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full justify-between items-center p-3 text-sm overflow-hidden hidden md:flex">
          <LogoButton />
            <ul className="flex flex-row justify-between text-lg font-light lg:gap-10 gap-3">
              <li className="py-2 px-3 flex no-underline hover:bg-card rounded-[0.5rem] cursor-pointer"><a href="/#tools">Our Tools</a></li>
              <li className="py-2 px-3 flex no-underline hover:bg-card rounded-[0.5rem] cursor-pointer"><a href="/#">About</a></li>
              <li className="py-2 px-3 flex no-underline hover:bg-card rounded-[0.5rem] cursor-pointer"><a href="/#contact">Contact</a></li>
            </ul>
          <div className="flex flex-row gap-5 items-center">
            <AuthButton />
            <DarkModeToggle />
          </div>
        </div>
        <MobileNav>{<AuthButton />}</MobileNav>
      </nav>
    </div>
  );
}
