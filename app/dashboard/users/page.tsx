//import UsersTable from "@/app/ERP/dashboard/users/";

import UserForm from "@/app/components/dashboard/users/userForm";
import Modals from "@/app/components/gerenal/modal";
import { userColumns, userData } from "@/app/components/lib/user";

export default function UsersPage() {
    
    return (
        <section className="flex flex-col w-full h-full">
            <div className="flex justify-end gap-10">
                <Modals title="Create new User" size="5xl" >
                    <UserForm/>
                </Modals>
            </div>
            {/* <TableData TableData={userData} columns={userColumns}/> */}
        </section>
    )
}