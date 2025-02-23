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

const CustomerManagementScreen = () => {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/customers")
      .then((res) => res.json())
      .then((data) => setCustomers(data))
      .catch((error) => console.error("Error fetching customers:", error));
  }, []);

  const handleAddCustomer = () => {
    if (!name || !email || !phone) {
      alert("Please fill all fields!");
      return;
    }

    const newCustomer = {
      name,
      email,
      phone,
    };

    fetch("http://localhost:3000/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCustomer),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setCustomers([...customers, data]); 
        setName(""); 
        setEmail("");
        setPhone("");
      })
      .catch((error) => console.error("Error adding customer:", error));
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Customer Management
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Add New Customer
              </Typography>
              <form>
                <TextField
                  label="Name"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  margin="normal"
                />
                <TextField
                  label="Email"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  margin="normal"
                />
                <TextField
                  label="Phone"
                  fullWidth
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  margin="normal"
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddCustomer}
                  fullWidth
                  style={{ marginTop: "20px" }}
                >
                  Add Customer
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Customer List
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Phone</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {customers.map((customer) => (
                      <TableRow key={customer.id}>
                        <TableCell>{customer.name}</TableCell>
                        <TableCell>{customer.email}</TableCell>
                        <TableCell>{customer.phone}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default CustomerManagementScreen;