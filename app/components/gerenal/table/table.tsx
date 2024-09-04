"use client";

import React, { useState } from 'react';
import { DataTable, DataTableFilterMeta } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { IconField } from 'primereact/iconfield';
import { Input } from '@nextui-org/react';

export default function TableData({ TableData, columns }: any) {

    const [selectedCustomer, setSelectedCustomer] = useState<any>(TableData);

    const [filters, setFilters] = useState<DataTableFilterMeta>({
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        status: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] }
    });


    const renderHeader = () => {
        const value = filters['global'] ? filters['global'].value : '';
        return (
            <IconField iconPosition="left">
                <Input className='color-red' type="search" label="Search 🔎" value={value || ''} onChange={(e) => onGlobalFilterChange(e)} />
            </IconField>
        );
    };
    const onGlobalFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        let _filters = { ...filters };

        _filters['global'].value = value;

        setFilters(_filters);
    };

    const header = renderHeader();
    return (
        <div className="">
            <DataTable className="py-5" size='small' value={TableData} paginator rows={5} header={header} filters={filters} tableStyle={{ minWidth: '50rem', color: 'red' }} onFilter={(e) => setFilters(e.filters)} selection={selectedCustomer} onSelectionChange={(e) => setSelectedCustomer(e.value)} selectionMode="single" dataKey="ID"
                stateStorage="session" stateKey="dt-state-demo-local" emptyMessage="No customers found.">
                {columns.map((col: any, i: any) => (
                    <Column key={i} field={col.field} header={col.header} sortable style={{ width: col.width || 'auto' }} />
                ))}
            </DataTable>
        </div>
    );
}
