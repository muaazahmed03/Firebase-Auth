import React from 'react';
import { Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const examSchedule = [
  { subject: 'Mathematics', date: '2025-03-10', time: '10:00 AM - 12:00 PM', room: 'Room 101' },
  { subject: 'English', date: '2025-03-12', time: '10:00 AM - 12:00 PM', room: 'Room 102' },
  { subject: 'Science', date: '2025-03-14', time: '10:00 AM - 12:00 PM', room: 'Room 103' },
];

const ExamSchedule = () => {
  return (
    <Container>
      <Typography variant="h5" fontWeight="bold" textAlign="center" marginY={3}>
        Exam Schedule
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Subject</strong></TableCell>
              <TableCell><strong>Date</strong></TableCell>
              <TableCell><strong>Time</strong></TableCell>
              <TableCell><strong>Room</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {examSchedule.map((exam, index) => (
              <TableRow key={index}>
                <TableCell>{exam.subject}</TableCell>
                <TableCell>{exam.date}</TableCell>
                <TableCell>{exam.time}</TableCell>
                <TableCell>{exam.room}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ExamSchedule;
