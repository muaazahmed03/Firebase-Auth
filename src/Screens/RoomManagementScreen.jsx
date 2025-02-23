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
  TextField,
  Button,
  Grid,
} from "@mui/material";

const RoomManagementScreen = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [customerName, setCustomerName] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  // Fetch available rooms
  useEffect(() => {
    fetch("http://localhost:3000/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data.filter((room) => room.status === "available")));
  }, []);

  // Handle room booking
  const handleBookRoom = () => {
    if (!selectedRoom || !customerName || !checkInDate || !checkOutDate) {
      alert("Please fill all fields!");
      return;
    }

    const newBooking = {
      roomId: selectedRoom.id,
      customerName,
      checkInDate,
      checkOutDate,
      status: "booked",
    };

    // Add booking to the bookings table
    fetch("http://localhost:3000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        // Update room status to "occupied"
        fetch(`http://localhost:3000/rooms/${selectedRoom.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "occupied" }),
        })
          .then(() => {
            // Refresh available rooms
            fetch("http://localhost:3000/rooms")
              .then((res) => res.json())
              .then((data) => setRooms(data.filter((room) => room.status === "available")));
          });

        // Add payment entry
        const newPayment = {
          bookingId: data.id,
          amount: selectedRoom.price,
          status: "pending",
        };

        fetch("http://localhost:3000/payments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPayment),
        });
      });

    // Reset form
    setSelectedRoom(null);
    setCustomerName("");
    setCheckInDate("");
    setCheckOutDate("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Room Management
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Available Rooms
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Room Number</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell>Price</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rooms.map((room) => (
                      <TableRow key={room.id}>
                        <TableCell>{room.roomNumber}</TableCell>
                        <TableCell>{room.type}</TableCell>
                        <TableCell>${room.price}</TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => setSelectedRoom(room)}
                          >
                            Book
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Book a Room
              </Typography>
              {selectedRoom && (
                <form>
                  <TextField
                    label="Customer Name"
                    fullWidth
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    margin="normal"
                  />
                  <TextField
                    label="Check-In Date"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    margin="normal"
                  />
                  <TextField
                    label="Check-Out Date"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    margin="normal"
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleBookRoom}
                    fullWidth
                    style={{ marginTop: "20px" }}
                  >
                    Confirm Booking
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default RoomManagementScreen;