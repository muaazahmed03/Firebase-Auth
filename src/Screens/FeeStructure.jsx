import React from 'react';
import { Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const feeStructure = [
  { className: 'Class 1', admissionFee: 5000, monthlyFee: 2500, examFee: 800 },
  { className: 'Class 2', admissionFee: 5500, monthlyFee: 2700, examFee: 850 },
  { className: 'Class 3', admissionFee: 6000, monthlyFee: 3000, examFee: 900 },
];

const FeeStructure = () => {
  return (
    <Container>
      <Typography variant="h5" fontWeight="bold" textAlign="center" marginY={3}>
        Fee Structure
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Class</strong></TableCell>
              <TableCell><strong>Admission Fee (PKR)</strong></TableCell>
              <TableCell><strong>Monthly Fee (PKR)</strong></TableCell>
              <TableCell><strong>Exam Fee (PKR)</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {feeStructure.map((fee, index) => (
              <TableRow key={index}>
                <TableCell>{fee.className}</TableCell>
                <TableCell>{fee.admissionFee}</TableCell>
                <TableCell>{fee.monthlyFee}</TableCell>
                <TableCell>{fee.examFee}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default FeeStructure;
