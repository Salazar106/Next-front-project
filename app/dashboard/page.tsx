

import { useSession, signOut } from "next-auth/react";
import PieChart from "../components/dashboard/charts/firts";
import DoughnutChart from "../components/dashboard/charts/second";

export default function DashboardPage() {
  //   const { data: session, status: statusSession } = useSession();

  // if (statusSession === 'unauthenticated') {
  //   location.href = '/'
  // }
    return(
        <section>
          <div className="flex w-full flex-wrap justify-center items-center p-3">
            <PieChart/>
            <DoughnutChart/>

          </div>
          Dashboard Page</section>
    )
}