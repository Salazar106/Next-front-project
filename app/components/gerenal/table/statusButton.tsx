import React from "react";
import { Button } from "@nextui-org/react";

export const StatusButton = ({ status, action}:any) => {



    return (
        <Button className="btn btn-sm btn-outline-primary" color={status === '1' ? 'success' : 'danger'} onClick={action}>
            {status === '1' ? 'Active' : 'Inactive'}
        </Button>
    );
};