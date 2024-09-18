"use client"

import { Button, Tooltip } from "@nextui-org/react";
import { FaPen, FaEye, FaTrash   } from "react-icons/fa6";
import Modals from "@/app/components/gerenal/modal";
import { FC, useEffect, useState } from 'react';
import { EditIcon, EyeIcon, DeleteIcon } from "./icons";

interface TableActionButtonsProps {
    data: any; // O el tipo que corresponda (puede ser string o number)
    EditComponent: FC<{ data: any }>; // Un componente que acepta la prop id
    ViewComponent: FC<{ data: any }>; 
  }
export default function TableActionButtons({data, EditComponent, ViewComponent}: TableActionButtonsProps) {

    const [dataState, setDataState] = useState();
    useEffect(() => {
        setDataState(data);
    }, [data]);

    return (
        <div className="flex items-center gap-2 w-[calc(100%-20px)]">
            
            <Modals title={`Editar ${data.name}`} icon={<EditIcon/>} size="5xl" isIcon={true}  text="Edit" btnColor="slate-300">
                <EditComponent data={dataState}/>
            </Modals>

            <Modals title={`Ver ${data.name}`} icon={<EyeIcon />} size="5xl" isIcon={true} btnColor="slate-300" text="View">
                <ViewComponent data={dataState}/>
            </Modals>
                
            
            <Tooltip className='' content="Delete" color="danger" offset={1}>
                <button  className="text-danger font-bold" aria-label="Like" onClick={() => alert("Deleted")}>
                    <DeleteIcon/>
                </button>
            </Tooltip>
            
        </div>
    )
}