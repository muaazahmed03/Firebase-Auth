import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";

const ProfileManagementScreen = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/profile")
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Profile Management
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h6">Name: {profile.name}</Typography>
          <Typography variant="h6">Email: {profile.email}</Typography>
          <Typography variant="h6">Phone: {profile.phone}</Typography>
          <Typography variant="h6">Role: {profile.role}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileManagementScreen;