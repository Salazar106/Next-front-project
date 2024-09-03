'use client'

import { useSession, signOut } from "next-auth/react";

export default function DashboardPage() {
  //   const { data: session, status: statusSession } = useSession();

  // if (statusSession === 'unauthenticated') {
  //   location.href = '/'
  // }
    return(
        <section>Dashboard Page</section>
    )
}