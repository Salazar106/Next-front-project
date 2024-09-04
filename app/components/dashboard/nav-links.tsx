'use client'


import { Tooltip } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChartSimple, FaUsers, FaUserDoctor   } from "react-icons/fa6";


// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Dashboard',   href: '/dashboard',       icon: <FaChartSimple/> },
  { name: 'Users',       href: '/dashboard/users', icon: <FaUserDoctor  />},
  { name: 'Clients',     href: '/dashboard/clients', icon: <FaUsers/> },
];

export default function NavLinks() {
  const pathname = usePathname()
  return (
    <>
      {links.map((link) => {
        return (
          <Tooltip key={link.name} className='' content={link.name} color="primary" offset={-7}>
            <Link
              href={link.href}
              className={`flex h-[48px] grow  items-center  justify-center gap-2 rounded-md bg-gray-100 p-3 text-sm text-black font-large hover:bg-sky-600 hover:text-white md:flex-none md:justify-center md:p-2 md:px-3
              ${pathname === link.href ? 'bg-sky-600 text-white shadow-gray-400':''}
              `}
            >
            {link.icon}
            </Link>
        </Tooltip>
         
        );
      })}
    </>
  );
}
