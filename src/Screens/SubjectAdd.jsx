import React, { useState } from 'react'
import { Container, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, Typography, Box } from "@mui/material";

const SubjectAdd = () => {
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
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Subject Add
            </Typography>
          </Box>
    
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Subject Name"
              name="enter your subject name"
              value={formData.firstName}
              onChange={handleChange}
            />
    
            <TextField
              fullWidth
              margin="normal"
              label="Class"
              name="class"
              value={formData.lastName}
              onChange={handleChange}
            />
    
            <FormControl margin="normal">
              <FormLabel sx={{ color: "black", fontWeight: "bold" }}>Select Group</FormLabel>
              <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
                <FormControlLabel value="female" control={<Radio sx={{ color: "green" }} />} label="General Science" />
                <FormControlLabel value="male" control={<Radio sx={{ color: "green" }} />} label="Pre-Engineering" />
              </RadioGroup>
            </FormControl>
    
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, bgcolor: "green", "&:hover": { bgcolor: "darkgreen" } }}>
              Add
            </Button>
          </form>
        </Container>
  )
}

export default SubjectAdd;