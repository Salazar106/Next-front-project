
import { Avatar } from 'primereact/avatar';



import React, { useRef } from 'react';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import { Link } from '@nextui-org/react';
import { FaPersonRifle, FaPowerOff } from 'react-icons/fa6';

export default function BasicDemo() {
    const op = useRef<OverlayPanel>(null); // El tipo OverlayPanel incluye el método `toggle`.

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (op.current) {
      op.current.toggle(e); // TypeScript sabrá que `op.current` tiene `toggle`
    }
  };

    return (
        <div className="flex justify-center">
            <Button type="button"   onClick={handleClick} >
                <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"  size="large" shape="circle" />
                <p className='font-bold ml-1'>{"»"}</p>
            </Button>
            <OverlayPanel ref={op}>
                <Link href="/" className="flex h-[48px] w-full grow items-center gap-2 rounded-md  text-sm p-3 text-black hover:bg-primary hover:text-white ">
                    <FaPersonRifle/>
                    <p>Profile</p>
                </Link>
                <Link href="/" className="flex h-[48px] w-full grow items-center gap-2 rounded-md  text-sm text-black hover:bg-rose-600 hover:text-white p-3">
                    <FaPowerOff/>
                    <p>Log Out</p>
                </Link>
            </OverlayPanel>
        </div>
    );
}