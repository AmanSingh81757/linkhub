import { MenuIcon } from "lucide-react";

function MobileMenuButton({ onClick }: { onClick: () => void }) {
    return (
      <button className="p-2 left-1" onClick={onClick}>
        <MenuIcon size={24} />
      </button>
    );
  }

export default MobileMenuButton;