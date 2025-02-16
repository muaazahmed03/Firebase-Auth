import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First Name', width: 130 },
  { field: 'lastName', headerName: 'Last Name', width: 130 },
  { field: 'fatherName', headerName: 'Father Name', width: 150 },
  { field: 'email', headerName: 'Email', width: 200 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90 },
  {
    field: 'fullName',
    headerName: 'Full Name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, firstName: 'Jon', lastName: 'Snow', fatherName: 'Eddard Stark', email: 'jon.snow@got.com', age: 35 },
  { id: 2, firstName: 'Cersei', lastName: 'Lannister', fatherName: 'Tywin Lannister', email: 'cersei.lan@got.com', age: 42 },
  { id: 3, firstName: 'Jaime', lastName: 'Lannister', fatherName: 'Tywin Lannister', email: 'jaime.lan@got.com', age: 45 },
  { id: 4, firstName: 'Arya', lastName: 'Stark', fatherName: 'Eddard Stark', email: 'arya.stark@got.com', age: 16 },
  { id: 5, firstName: 'Daenerys', lastName: 'Targaryen', fatherName: 'Aerys Targaryen', email: 'dany.targ@got.com', age: null },
  { id: 6, firstName: 'Melisandre', lastName: null, fatherName: 'Unknown', email: 'mel.red@got.com', age: 150 },
  { id: 7, firstName: 'Ferrara', lastName: 'Clifford', fatherName: 'John Clifford', email: 'ferrara.cliff@got.com', age: 44 },
  { id: 8, firstName: 'Rossini', lastName: 'Frances', fatherName: 'Marco Rossini', email: 'rossini.frances@got.com', age: 36 },
  { id: 9, firstName: 'Harvey', lastName: 'Roxie', fatherName: 'Robert Harvey', email: 'roxie.harvey@got.com', age: 65 },
];

const paginationModel = { page: 0, pageSize: 5 };

const ClassList = () => {
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
};

export default ClassList;
