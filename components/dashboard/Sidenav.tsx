import Link from 'next/link';
import SideLinks from './Side-links';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 border-r-2">
      <div className="flex grow flex-row justify-start space-x-2 md:flex-col md:space-x-0 md:space-y-2 gap-2">
        <SideLinks />
        {/* <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div> */}
      </div>
    </div>
  );
}