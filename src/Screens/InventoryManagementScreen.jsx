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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const InventoryManagementScreen = () => {
  const [inventory, setInventory] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("");

  // Fetch inventory
  useEffect(() => {
    fetch("http://localhost:3000/inventory")
      .then((res) => res.json())
      .then((data) => setInventory(data))
      .catch((error) => console.error("Error fetching inventory:", error));
  }, []);

  // Handle form submission
  const handleAddInventory = () => {
    if (!name || !quantity || !status) {
      alert("Please fill all fields!");
      return;
    }

    const newItem = {
      name,
      quantity: parseInt(quantity),
      status,
    };

    // Add new item to the inventory
    fetch("http://localhost:3000/inventory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => {
        setInventory([...inventory, data]); // Update the table
        setOpenDialog(false); // Close the dialog
        setName(""); // Reset form fields
        setQuantity("");
        setStatus("");
      })
      .catch((error) => console.error("Error adding inventory:", error));
  };

  // Handle deleting an item
  const handleDeleteInventory = (id) => {
    fetch(`http://localhost:3000/inventory/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        // Remove the item from the local state
        setInventory((prevInventory) =>
          prevInventory.filter((item) => item.id !== id)
        );
      })
      .catch((error) => console.error("Error deleting inventory:", error));
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Inventory Management
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpenDialog(true)}
        style={{ marginBottom: "20px" }}
      >
        Add Inventory
      </Button>
      <Card>
        <CardContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {inventory.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>{item.status}</TableCell>
                    <TableCell>
                      <IconButton
                        color="error"
                        onClick={() => handleDeleteInventory(item.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      {/* Add Inventory Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Add New Inventory Item</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Quantity"
            fullWidth
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Status"
            fullWidth
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleAddInventory} color="primary">
            Add Item
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default InventoryManagementScreen;