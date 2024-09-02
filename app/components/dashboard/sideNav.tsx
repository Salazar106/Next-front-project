import Link from 'next/link';
import NavLinks from './nav-links';
import Image from 'next/image';
import { FaPowerOff } from "react-icons/fa6";
import { Tooltip } from '@nextui-org/react';
import { redirect } from "next/navigation";

export default function SideNav() {
   const signOut = () => {
    redirect('/');
   };

  return (
    <div className="flex h-full flex-col  ">
      <Link className="flex h-20 items-center justify-center bg-gray-300 shadow-lg p-4 md:h-40" href="/ERP/dashboard">
        <div className="w-25 text-white items-center md:w-40">
          <Image className='justify-center' width={250} height={ 150} src={'/favicon1.ico'} alt={'hola'} />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 bg-gray-300 md:flex-col md:space-x-0 md:space-y-2 p-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-300 md:block"></div>
        
          <Tooltip className='' content='Cerrar Secion' color="danger" offset={-7}>
            <Link href="/" className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-300 p-3 text-sm font-medium hover:bg-rose-600 hover:text-blue-50 md:flex-none  md:p-2 md:px-3">
              <FaPowerOff/>
            </Link>
          </Tooltip>
       
      </div>
    </div>
  );
}
