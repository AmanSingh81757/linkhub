import { MenuIcon } from "lucide-react";

function MobileDrawer({ isOpen, onClose } : { isOpen: boolean, onClose: () => void }){
    return (
      <div
        className={`fixed flex flex-col justify-around items-center z-10 top-0 right-0 h-full w-full bg-background text-black transition-transform duration-300 transform ${
          isOpen ? '-translate-x-0' : '-translate-x-full'
        }`}
      >
        <button className="absolute left-1 top-2 p-3" onClick={onClose}>
          {/* <FontAwesomeIcon className="text-5xl" icon={faXmark} /> */}
            <MenuIcon size={24} />
        </button>
        <ul className="absolute top-20 text-xl w-full ">
              <li className="py-2 px-3 flex md:no-underline hover:bg-accent border-t border-black"><a href="#tools">Our Tools</a></li>
              <li className="py-2 px-3 flex md:no-underline hover:bg-accent border-t border-black"><a href="#">About</a></li>
              <li className="py-2 px-3 flex md:no-underline hover:bg-accent border-t border-black"><a href="#">Contact</a></li>
              <li className="py-2 px-3 flex md:no-underline hover:bg-accent border-y border-black"><a href="/dashboard">Dashboard</a></li>
        </ul>
        {/* <AuthButton /> */}
      </div>
    );
  }

export default MobileDrawer;