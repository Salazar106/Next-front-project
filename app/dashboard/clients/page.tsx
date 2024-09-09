import UserForm from "@/app/components/dashboard/users/userForm";
import Modals from "@/app/components/gerenal/modal";
import { clientColumns, clientData } from "@/app/components/lib/client";

export default function ClientsPage() {

    
    return (
        <section className="flex flex-col w-full h-full">
            <div className="flex justify-end gap-10">
                <Modals title="Create new Client" size="5xl" >
                    <UserForm/>
                </Modals>
            </div>
            {/* <TableData TableData={clientData} columns={clientColumns}/> */}
        </section>
    )
}