import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

const PaymentManagementScreen = () => {
  const [payments, setPayments] = useState([]);

  // Fetch payments
  useEffect(() => {
    fetch("http://localhost:3000/payments")
      .then((res) => res.json())
      .then((data) => setPayments(data))
      .catch((error) => console.error("Error fetching payments:", error));
  }, []);

  // Handle marking payment as successful
  const handleMarkAsSuccessful = (paymentId) => {
    fetch(`http://localhost:3000/payments/${paymentId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "successful" }),
    })
      .then((res) => res.json())
      .then((updatedPayment) => {
        // Update the payment status in the local state
        setPayments((prevPayments) =>
          prevPayments.map((payment) =>
            payment.id === paymentId ? updatedPayment : payment
          )
        );
      })
      .catch((error) => console.error("Error updating payment:", error));
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Payment Management
      </Typography>
      <Card>
        <CardContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Payment ID</TableCell>
                  <TableCell>Booking ID</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {payments.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell>{payment.id}</TableCell>
                    <TableCell>{payment.bookingId}</TableCell>
                    <TableCell>${payment.amount}</TableCell>
                    <TableCell>{payment.status}</TableCell>
                    <TableCell>
                      {payment.status !== "successful" && (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() => handleMarkAsSuccessful(payment.id)}
                        >
                          Mark as Successful
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentManagementScreen;