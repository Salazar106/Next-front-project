'use client'

import SideNav from "@/app/components/dashboard/sideNav";
import { useSession } from "next-auth/react";

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
//     const { data: session, status: statusSession } = useSession();

//   if (statusSession === 'unauthenticated') {
//     location.href = '/'
//   }
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-20 ">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    );
}
