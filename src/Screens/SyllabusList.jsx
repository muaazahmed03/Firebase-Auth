import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'subject', headerName: 'Subject', width: 150 },
  { field: 'className', headerName: 'Class', width: 100 },
  { field: 'chapter', headerName: 'Chapter', width: 180 },
  { field: 'topic', headerName: 'Topic', width: 180 },
];

const rows = [
  { id: 1, subject: 'Math', className: '9', chapter: 'Algebra', topic: 'Linear Equations' },
  { id: 2, subject: 'Math', className: '9', chapter: 'Geometry', topic: 'Triangles' },
  { id: 3, subject: 'Physics', className: '10', chapter: 'Motion', topic: 'Laws of Motion' },
  { id: 4, subject: 'Chemistry', className: '10', chapter: 'Atoms', topic: 'Atomic Structure' },
  { id: 5, subject: 'Biology', className: '9', chapter: 'Cells', topic: 'Cell Structure' },
  { id: 6, subject: 'English', className: '8', chapter: 'Grammar', topic: 'Tenses' },
  { id: 7, subject: 'History', className: '7', chapter: 'Ancient Civilizations', topic: 'Egyptian Culture' },
  { id: 8, subject: 'Geography', className: '8', chapter: 'Earth', topic: 'Layers of Earth' },
  { id: 9, subject: 'Computer Science', className: '10', chapter: 'Programming', topic: 'Loops' },
];

const paginationModel = { page: 0, pageSize: 5 };

const SyllabusList = () => {
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
}

export default SyllabusList;
