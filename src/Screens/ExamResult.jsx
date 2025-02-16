import React from 'react';
import { Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const examResults = [
  { subject: 'Mathematics', marksObtained: 85, totalMarks: 100, grade: 'A' },
  { subject: 'English', marksObtained: 78, totalMarks: 100, grade: 'B+' },
  { subject: 'Science', marksObtained: 92, totalMarks: 100, grade: 'A+' },
];

const ExamResult = () => {
  return (
    <Container>
      <Typography variant="h5" fontWeight="bold" textAlign="center" marginY={3}>
        Exam Results
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Subject</strong></TableCell>
              <TableCell><strong>Marks Obtained</strong></TableCell>
              <TableCell><strong>Total Marks</strong></TableCell>
              <TableCell><strong>Grade</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {examResults.map((result, index) => (
              <TableRow key={index}>
                <TableCell>{result.subject}</TableCell>
                <TableCell>{result.marksObtained}</TableCell>
                <TableCell>{result.totalMarks}</TableCell>
                <TableCell>{result.grade}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ExamResult;
