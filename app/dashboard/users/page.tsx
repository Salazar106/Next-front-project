//import UsersTable from "@/app/ERP/dashboard/users/";

import UserForm from "@/app/components/dashboard/users/userForm";
import Modals from "@/app/components/gerenal/modal";
import { PlusIcon } from "@/app/components/gerenal/table/icons";
import TableUi from "@/app/components/gerenal/table/table";
import { columns, users, statusOptions } from "@/app/lib/dashboard/user";

export default function UsersPage() {
    
    return (
        <section className="flex flex-col w-full h-full">
            
            <TableUi columns={columns} data={users} statusOptions={statusOptions} BtnName="New User">
                <Modals title={"New User +"} size="5xl" >
                    <UserForm/>
                </Modals>
            </TableUi>
        </section>
    )
}