import React, { useState } from 'react'
import { Container, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, Typography, Box } from "@mui/material";

const StdReg = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        className: "",
        gender: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
      };
    
      return (
        <Container maxWidth="sm">
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              STUDENTS REGISTRATION FORM
            </Typography>
          </Box>
    
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
    
            <TextField
              fullWidth
              margin="normal"
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
    
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
    
            <TextField
              fullWidth
              margin="normal"
              label="Class"
              name="className"
              value={formData.className}
              onChange={handleChange}
            />
    
            <FormControl margin="normal">
              <FormLabel sx={{ color: "black", fontWeight: "bold" }}>Gender</FormLabel>
              <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
                <FormControlLabel value="female" control={<Radio sx={{ color: "green" }} />} label="Female" />
                <FormControlLabel value="male" control={<Radio sx={{ color: "green" }} />} label="Male" />
              </RadioGroup>
            </FormControl>
    
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, bgcolor: "green", "&:hover": { bgcolor: "darkgreen" } }}>
              Submit
            </Button>
          </form>
        </Container>
  )
}

export default StdReg