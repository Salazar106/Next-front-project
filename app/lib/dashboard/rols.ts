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