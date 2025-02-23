import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const ServiceManagementScreen = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Service Management
      </Typography>
      <Card>
        <CardContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Service ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {services.map((service) => (
                  <TableRow key={service.id}>
                    <TableCell>{service.id}</TableCell>
                    <TableCell>{service.name}</TableCell>
                    <TableCell>${service.price}</TableCell>
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

export default ServiceManagementScreen;