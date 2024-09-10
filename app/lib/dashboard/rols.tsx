"use client"
import React from "react";


// export const renderCell = React.useCallback((user: Data, columnKey: React.Key) => {
//   const cellValue = user[columnKey as keyof Data];

//   switch (columnKey) {
//     case "name":
//       return (
        
//         <div className="flex flex-col ">
          
//           {user.email}
//         </div>
//       );
//     case "role":
//       return (
//         <div className="flex flex-col">
//           <p className="text-bold text-small capitalize">{cellValue}</p>
//           <p className="text-bold text-tiny capitalize text-default-400">{user.team}</p>
//         </div>
//       );
//     case "status":
//       return (
//         <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
//           {cellValue}
//         </Chip>
//       );
//     case "actions":
//       return (
//           <TableActionButtons id={data.id}/>
//       );
//     default:
//       return cellValue;
//   }
// }, []);


export const columns = [
    {name: "ID", uid: "id", sortable: true},
    {name: "NAME", uid: "name", sortable: true},
    {name: "DEPARTMENT", uid: "Department", sortable: true},
    {name: "DESCRIPTION", uid: "Description"},
    {name: "STATUS", uid: "status", sortable: true},
    {name: "ACTIONS", uid: "actions"},
  ];

  export const statusOptions = [
    {name: "Active", uid: "active"},
    {name: "Inactive", uid: "inactive"},
  ];

  export const roles = [
    {
      id: 1,
      name: "Admin",
      Department: "Management",
      Description: "This is a description",
      status: "active", 
    },
    {
      id: 2,
      name: "Manager",
      Department: "Management",
      Description: "This is a description",
      status: "active", 
    },
    {
      id: 3,
      name: "Developer",
      Department: "Development",
      Description: "This is a description",
      status: "active", 
    },
    {
      id: 4,
      name: "Designer",
      Department: "Design",
      Description: "This is a description",
      status: "active", 
    },
  ]