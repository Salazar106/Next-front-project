"use client"

import { Button, Tooltip } from "@nextui-org/react";
import { FaPen, FaEye, FaTrash   } from "react-icons/fa6";
import Modals from "@/app/components/gerenal/modal";
import { FC, useEffect, useState } from 'react';

interface TableActionButtonsProps {
    id: any; // O el tipo que corresponda (puede ser string o number)
    EditComponent: FC<{ id: string }>; // Un componente que acepta la prop id
    ViewComponent: FC<{ id: string }>; 
  }
export default function TableActionButtons({id, EditComponent, ViewComponent}: TableActionButtonsProps) {

    const [data, setData] = useState();
    useEffect(() => {
        setData(id);
    }, [id]);

    return (
        <div className="flex items-center gap-2 w-[calc(100%-20px)]">
            
            <Modals title={`Editar ${id.name}`} icon={<FaPen />} size="5xl" isIcon={true}  text="Edit" btnColor="warning">
                <EditComponent data={data}/>
            </Modals>

            <Modals title={`Ver ${id.name}`} icon={<FaEye />} size="5xl" isIcon={true} btnColor="primary" text="View">
                <ViewComponent data={data}/>
            </Modals>
                
            
            <Tooltip className='' content="Delete" color="danger" offset={1}>
                <button  className="text-danger font-bold" aria-label="Like" onClick={() => alert("Deleted")}>
                    <FaTrash/>
                </button>
            </Tooltip>
            
        </div>
    )
}