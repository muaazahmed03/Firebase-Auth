import React, { useState } from 'react'
import { Container, TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, Typography, Box } from "@mui/material";
import BackupIcon from '@mui/icons-material/Backup';


const SyllabusForm = () => {
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
              Syllabus Add
            </Typography>
          </Box>
    
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Subject Name"
              name="subjectname"
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

    
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, bgcolor: "green", "&:hover": { bgcolor: "darkgreen" } }}>
              <BackupIcon style={{marginRight: 6}} /> Upload PDF
            </Button>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, bgcolor: "green", "&:hover": { bgcolor: "darkgreen" } }}>
              Add
            </Button>
          </form>
        </Container>
  )
}

export default SyllabusForm