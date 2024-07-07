'use client';

// import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon,} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    // { name: 'Home', href: '/dashboard', icon: HomeIcon },
    // { name: 'Invoices', href: '/dashboard/invoices', icon: DocumentDuplicateIcon,},
    // { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
    { name: 'Overview', href: '/dashboard' },
    { name: 'Short Links', href: '/dashboard/shortlinks' },
    { name: 'Link Trees', href: '/dashboard/linktrees'},
    { name: 'QR Codes', href: '/dashboard/qrcodes'},
];

export default function SideLinks() {
  const pathname = usePathname();
  return (
    <div className="flex grow items-center px-1 sm:px-2 md:px-5 py-1 sm:gap-2 md:gap-5 flex-row justify-start bg-muted rounded-xl">
      {links.map((link) => {
        // const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'h-full flex py-3 md:px-3 rounded-[0.5rem] grow items-center text-xs md:text-base justify-center text-muted-foreground font-medium hover:bg-card hover:text-primary md:flex-none md:justify-start',
              {
                'text-primary bg-card': pathname === link.href,
              },
              {
                'bg-muted': pathname !== link.href,
              }
            )}
            >
            {/* <LinkIcon className="w-6" /> */}
            <p className="md:block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}