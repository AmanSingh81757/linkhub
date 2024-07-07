import Link from 'next/link';
import SideLinks from './Side-links';

export default function SideNav() {
  return (
    <div className="flex w-full">
        <SideLinks />
        {/* <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div> */}
    </div>
  );
}