import { Button, Tooltip } from "@nextui-org/react";
import { FaPen, FaEye, FaTrash   } from "react-icons/fa6";
import Modals from "@/app/components/gerenal/modal";


export default function TableActionButtons({id}: any) {
    return (
        <div className="flex items-center gap-2 w-full">
            
            <Modals title={<FaPen />} size="5xl" isIcon={true}  text="Edit">
                <p>aqui va para editar</p>
            </Modals>

            <Modals title={<FaEye/>} size="5xl" isIcon={true} btnColor="warning" text="View">
                <p>aui va a vista previa de </p>
            </Modals>
                
            
            <Tooltip className='' content="Delete" color="danger" offset={-7}>
                <Button isIconOnly color="danger" aria-label="Like">
                    <FaTrash/>
                </Button>
            </Tooltip>
            
        </div>
    )
}