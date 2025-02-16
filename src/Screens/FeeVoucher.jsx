import React from "react";
import { Container, Typography, Paper, Box, Button } from "@mui/material";

const FeeVoucher = ({ student }) => {
  return (
    <Container>
      <Paper elevation={3} sx={{ padding: 3, marginY: 4 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          textAlign="center"
          marginBottom={2}
        >
          Fee Voucher
        </Typography>

        <Box marginBottom={2}>
          <Typography>
            <strong>Student Name:</strong> {student.name}
          </Typography>
          <Typography>
            <strong>Class:</strong> {student.className}
          </Typography>
          <Typography>
            <strong>Roll Number:</strong> {student.rollNumber}
          </Typography>
        </Box>

        <Box>
          <Typography>
            <strong>Admission Fee:</strong> {student.fees.admissionFee} PKR
          </Typography>
          <Typography>
            <strong>Monthly Fee:</strong> {student.fees.monthlyFee} PKR
          </Typography>
          <Typography>
            <strong>Exam Fee:</strong> {student.fees.examFee} PKR
          </Typography>
          <Typography>
            <strong>Total Payable:</strong> {student.fees.total} PKR
          </Typography>
          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              bgcolor: "green",
              "&:hover": { bgcolor: "darkgreen" },
            }}
          >
            Pay Now
          </Button>
        </Box>

        <Typography fontSize={12} fontStyle="italic" color="gray" marginTop={3}>
          * Please pay before the due date to avoid late charges.
        </Typography>
      </Paper>
    </Container>
  );
};

// Example Usage
const studentInfo = {
  name: "Ali Ahmed",
  className: "Class 3",
  rollNumber: "12345",
  fees: {
    admissionFee: 6000,
    monthlyFee: 3000,
    examFee: 900,
    total: 9900,
  },
};

export default function FeeVoucherPage() {
  return <FeeVoucher student={studentInfo} />;
}
