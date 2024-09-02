import { StatusButton } from "../gerenal/table/statusButton"
import TableActionButtons from "../gerenal/table/tableActionButtons"


export const clientColumns=[
    {field: 'ID', header: 'ID' , width: '10%'},
    {field: 'Name', header: 'Name' , width: '20%'},
    {field: 'Email', header: 'Email' , width: '20%'},
    {field: 'Date', header: 'Date' , width: '20%'},
    {field: 'Status', header: 'Status' , width: '10%'},
    {field: 'Actions', header: 'Actions' , width: '10%'}
]

export const clientData = [
    {ID: 1000, Name: 'Laura Benson', Email: 'laura.benson@example.com', Date: '2023-01-15', Status: <StatusButton status='1' />, Actions: <TableActionButtons />},
    {ID: 1001, Name: 'George Martinez', Email: 'george.martinez@example.com', Date: '2023-02-20', Status: <StatusButton status='0' />, Actions: <TableActionButtons />},
    {ID: 1002, Name: 'Helen Cooper', Email: 'helen.cooper@example.com', Date: '2023-03-25', Status: <StatusButton status='1' />, Actions: <TableActionButtons />},
    {ID: 1003, Name: 'Isaac Kelly', Email: 'isaac.kelly@example.com', Date: '2023-04-10', Status: <StatusButton status='0' />, Actions: <TableActionButtons />},
    {ID: 1004, Name: 'Jasmine Morgan', Email: 'jasmine.morgan@example.com', Date: '2023-05-15', Status: <StatusButton status='0' />, Actions: <TableActionButtons />},
    {ID: 1005, Name: 'Kyle Parker', Email: 'kyle.parker@example.com', Date: '2023-06-20', Status: <StatusButton status='1' />, Actions: <TableActionButtons />},
    {ID: 1006, Name: 'Linda Sanders', Email: 'linda.sanders@example.com', Date: '2023-07-25', Status: <StatusButton status='0' />, Actions: <TableActionButtons />},
    {ID: 1007, Name: 'Mike Robinson', Email: 'mike.robinson@example.com', Date: '2023-08-10', Status: <StatusButton status='1' />, Actions: <TableActionButtons />},
    {ID: 1008, Name: 'Nina Clark', Email: 'nina.clark@example.com', Date: '2023-09-15', Status: <StatusButton status='0' />, Actions: <TableActionButtons />},
    {ID: 1009, Name: 'Oscar Lewis', Email: 'oscar.lewis@example.com', Date: '2023-10-20', Status: <StatusButton status='1' />, Actions: <TableActionButtons />},
    {ID: 1010, Name: 'Pamela Hall', Email: 'pamela.hall@example.com', Date: '2023-11-25', Status: <StatusButton status='0' />, Actions: <TableActionButtons />},
    {ID: 1011, Name: 'Quincy Allen', Email: 'quincy.allen@example.com', Date: '2023-12-10', Status: <StatusButton status='1' />, Actions: <TableActionButtons />},
    {ID: 1012, Name: 'Rebecca White', Email: 'rebecca.white@example.com', Date: '2024-01-15', Status: <StatusButton status='0' />, Actions: <TableActionButtons />},
    {ID: 1013, Name: 'Steven Adams', Email: 'steven.adams@example.com', Date: '2024-02-20', Status: <StatusButton status='1' />, Actions: <TableActionButtons />},
    {ID: 1014, Name: 'Tina Campbell', Email: 'tina.campbell@example.com', Date: '2024-03-25', Status: <StatusButton status='0' />, Actions: <TableActionButtons />},
    {ID: 1015, Name: 'Ulysses Murphy', Email: 'ulysses.murphy@example.com', Date: '2024-04-10', Status: <StatusButton status='1' />, Actions: <TableActionButtons />},
    {ID: 1016, Name: 'Victoria Peterson', Email: 'victoria.peterson@example.com', Date: '2024-05-15', Status: <StatusButton status='0' />, Actions: <TableActionButtons />},
    {ID: 1017, Name: 'Walter Bennett', Email: 'walter.bennett@example.com', Date: '2024-06-20', Status: <StatusButton status='1' />, Actions: <TableActionButtons />},
    {ID: 1018, Name: 'Xena Rogers', Email: 'xena.rogers@example.com', Date: '2024-07-25', Status: <StatusButton status='0' />, Actions: <TableActionButtons />},
    {ID: 1019, Name: 'Yvonne Powell', Email: 'yvonne.powell@example.com', Date: '2024-08-10', Status: <StatusButton status='1' />, Actions: <TableActionButtons />},
    {ID: 1020, Name: 'Zachary Hughes', Email: 'zachary.hughes@example.com', Date: '2024-09-15', Status: <StatusButton status='0' />, Actions: <TableActionButtons />},
    {ID: 1021, Name: 'Angela Crawford', Email: 'angela.crawford@example.com', Date: '2024-10-20', Status: <StatusButton status='1' />, Actions: <TableActionButtons />},
    {ID: 1022, Name: 'Brandon Long', Email: 'brandon.long@example.com', Date: '2024-11-25', Status: <StatusButton status='0' />, Actions: <TableActionButtons />},
    {ID: 1023, Name: 'Charlotte Dixon', Email: 'charlotte.dixon@example.com', Date: '2024-12-10', Status: <StatusButton status='1' />, Actions: <TableActionButtons />},
    {ID: 1024, Name: 'Dennis Gordon', Email: 'dennis.gordon@example.com', Date: '2025-01-15', Status: <StatusButton status='0' />, Actions: <TableActionButtons />},
    {ID: 1025, Name: 'Elena Harrison', Email: 'elena.harrison@example.com', Date: '2025-02-20', Status: <StatusButton status='1' />, Actions: <TableActionButtons />},
    {ID: 1026, Name: 'Felix Jenkins', Email: 'felix.jenkins@example.com', Date: '2025-03-25', Status: <StatusButton status='0' />, Actions: <TableActionButtons />},
    {ID: 1027, Name: 'Gina Porter', Email: 'gina.porter@example.com', Date: '2025-04-10', Status: <StatusButton status='1' />, Actions: <TableActionButtons />},
    {ID: 1028, Name: 'Henry Powell', Email: 'henry.powell@example.com', Date: '2025-05-15', Status: <StatusButton status='0' />, Actions: <TableActionButtons />},
    {ID: 1029, Name: 'Isabel Russell', Email: 'isabel.russell@example.com', Date: '2025-06-20', Status: <StatusButton status='1' />, Actions: <TableActionButtons />},
]