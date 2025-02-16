import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'SubjectName', headerName: 'Subject Name', width: 150 },
  { field: 'Class', headerName: 'Class', width: 100 },
  { field: 'Group', headerName: 'Group', width: 150 },
];

const rows = [
  { id: 1, SubjectName: 'Math', Class: '9', Group: 'General Science' },
  { id: 2, SubjectName: 'Physics', Class: '10', Group: 'Science' },
  { id: 3, SubjectName: 'Chemistry', Class: '10', Group: 'Science' },
  { id: 4, SubjectName: 'Biology', Class: '9', Group: 'General Science' },
  { id: 5, SubjectName: 'English', Class: '8', Group: 'Arts' },
  { id: 6, SubjectName: 'History', Class: '7', Group: 'Arts' },
  { id: 7, SubjectName: 'Geography', Class: '8', Group: 'General' },
  { id: 8, SubjectName: 'Computer Science', Class: '10', Group: 'Science' },
  { id: 9, SubjectName: 'Economics', Class: '9', Group: 'Commerce' },
];

const paginationModel = { page: 0, pageSize: 5 };
const SubjectList = () => {
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
  )
}

export default SubjectList;
