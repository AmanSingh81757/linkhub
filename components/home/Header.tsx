import AuthButton from "./AuthButton";
import LogoButton from "./LogoButton";

export default function Header() {
  return (
    <div className="w-full">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-7xl flex justify-between items-center p-3 text-sm gap-20">
          <LogoButton />
            <ul className="flex flex-row w-4/7 justify-around mx-20 text-lg font-light gap-10">
              <li className="py-2 px-3 flex no-underline hover:bg-btn-background-hover rounded-md"><a href="#tools">Our Tools</a></li>
              <li className="py-2 px-3 flex no-underline hover:bg-btn-background-hover rounded-md"><a href="#">About</a></li>
              <li className="py-2 px-3 flex no-underline hover:bg-btn-background-hover rounded-md"><a href="#">Contact</a></li>
            </ul>
          <AuthButton />
        </div>
      </nav>
    </div>
  );
}
