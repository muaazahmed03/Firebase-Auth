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
} from "@mui/material";

const BookingManagementScreen = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Booking Management
      </Typography>
      <Card>
        <CardContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Booking ID</TableCell>
                  <TableCell>Room ID</TableCell>
                  <TableCell>Customer Name</TableCell>
                  <TableCell>Check-In Date</TableCell>
                  <TableCell>Check-Out Date</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell>{booking.id}</TableCell>
                    <TableCell>{booking.roomId}</TableCell>
                    <TableCell>{booking.customerName}</TableCell>
                    <TableCell>{booking.checkInDate}</TableCell>
                    <TableCell>{booking.checkOutDate}</TableCell>
                    <TableCell>{booking.status}</TableCell>
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

export default BookingManagementScreen;