
import Modals from "@/app/components/gerenal/modal";
import TableUi from "@/app/components/gerenal/table/table"
import { columns, roles, statusOptions } from "@/app/lib/dashboard/rols";

export default function RolsPage() {

    

    return(
        <section className="flex flex-col w-full h-full">
            
        <TableUi columns={columns} data={roles} statusOptions={statusOptions} BtnName="New User">
            <Modals title={"New User +"} size="5xl" >
                <p>New Rol</p>
            </Modals>
        </TableUi>
    </section>
            
    
    )
}