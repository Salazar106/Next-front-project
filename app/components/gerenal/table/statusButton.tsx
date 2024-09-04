'use client';
import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { InputSwitch } from "primereact/inputswitch";

export const StatusButton = ({ status, action}:any) => {
    

    return (
        <div className="flex flex-col">
                <label htmlFor="input-metakey">{status === '1' ? 'Active' : 'Inactive'}</label>
                <InputSwitch  inputId="input-metakey" checked={status==='1' ? true : false} onChange={(e) => action(e.value)} />
        </div>
        // <Button className="btn btn-sm btn-outline-primary text-white" color={status === '1' ? 'success' : 'danger'} onClick={action}>
        //     {status === '1' ? 'Active' : 'Inactive'}
        // </Button>
    );
};