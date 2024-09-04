import Link from 'next/link';
import NavLinks from './nav-links';
import Image from 'next/image';
import { FaPowerOff } from "react-icons/fa6";
import { Tooltip } from '@nextui-org/react';
import { redirect } from "next/navigation";
import AvatarComponent from './avatar';

export default function SideNav() {
   const signOut = () => {
    redirect('/');
   };

  return (
    <div className="flex h-full flex-col  ">
      <Link className="flex h-20 items-center justify-center bg-primary shadow-lg p-4 md:h-40" href="/ERP/dashboard">
        <div className="w-25 text-white items-center md:w-40">
          <Image className='justify-center' width={150} height={ 150} src={'/favicon1.ico'} alt={'hola'} />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 bg-gray-300 md:flex-col md:space-x-0 md:space-y-2 p-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-300 md:block"></div>
          <AvatarComponent/>
      </div>
    </div>
  );
}
