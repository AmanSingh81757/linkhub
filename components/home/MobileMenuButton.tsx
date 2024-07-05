import { MenuIcon } from "lucide-react";

function MobileMenuButton({ onClick }: { onClick: () => void }) {
    return (
      <button className="absolute top-2 p-2 left-1" onClick={onClick}>
        <MenuIcon size={24} />
      </button>
    );
  }

export default MobileMenuButton;