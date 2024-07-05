import AuthButton from "./AuthButton";
import LogoButton from "./LogoButton";
import MobileNav from "./MobileNav";
export default function Header() {
  return (
    <div className="w-full">
      <nav className="w-full md:flex justify-center border-b border-b-foreground/10 h-16 py-1">
        <div className="w-full max-w-7xl justify-between items-center p-3 text-sm gap-20 hidden md:flex">
          <LogoButton />
            <ul className="flex flex-row w-full justify-around mx-20 text-lg font-light gap-10">
              <li className="py-2 px-3 flex no-underline hover:bg-accent rounded-md"><a href="/#tools">Our Tools</a></li>
              <li className="py-2 px-3 flex no-underline hover:bg-accent rounded-md"><a href="/#">About</a></li>
              <li className="py-2 px-3 flex no-underline hover:bg-accent rounded-md"><a href="/#contact">Contact</a></li>
            </ul>
          <AuthButton />
        </div>
        <MobileNav />
      </nav>
    </div>
  );
}
