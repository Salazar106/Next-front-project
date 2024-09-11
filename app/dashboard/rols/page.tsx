
import { RolFormComponent } from "@/app/components/dashboard/forms/rolForm";
import RolTable from "@/app/components/dashboard/tables/rolTable";
import Modals from "@/app/components/gerenal/modal";
import TableUi from "@/app/components/gerenal/table/table"
import { columns, roles, statusOptions } from "@/app/lib/dashboard/rols";

export default function RolsPage() {

    

    return(
        <section className="flex flex-col w-full h-full">
            
        <RolTable columns={columns} data={roles} statusOptions={statusOptions} BtnName="New Rol">
            <Modals title={"New User +"} size="5xl" >
                <RolFormComponent/>
            </Modals>
        </RolTable>
    </section>
            
    
    )
}