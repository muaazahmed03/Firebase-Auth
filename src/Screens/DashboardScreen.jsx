import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const DashboardScreen = () => {
  const [metrics, setMetrics] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/dashboard")
      .then((res) => res.json())
      .then((data) => setMetrics(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Bookings</Typography>
              <Typography variant="h4">{metrics.totalBookings}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Active Bookings</Typography>
              <Typography variant="h4">{metrics.activeBookings}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Available Rooms</Typography>
              <Typography variant="h4">{metrics.availableRooms}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Revenue</Typography>
              <Typography variant="h4">${metrics.revenue}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardScreen;