import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Collapse from "@mui/material/Collapse";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ForwardIcon from "@mui/icons-material/Forward";
import { Button, Menu, MenuItem, Avatar } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

// Import Screens for Hotel Management
// import LoginScreen from "./Screens/LoginScreen";
import DashboardScreen from "./Screens/DashboardScreen";
import CustomerManagementScreen from "./Screens/CustomerManagementScreen";
import RoomManagementScreen from "./Screens/RoomManagementScreen";
import BookingManagementScreen from "./Screens/BookingManagementScreen";
import PaymentManagementScreen from "./Screens/PaymentManagementScreen";
import ServiceManagementScreen from "./Screens/ServiceManagementScreen";
import InventoryManagementScreen from "./Screens/InventoryManagementScreen";
import ProfileManagementScreen from "./Screens/ProfileManagementScreen";

const drawerWidth = 240;

function AdminDashboard(props) {
  const logout = useNavigate();
  const signOut = () => {
    localStorage.clear();
    logout("/login");
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openSubMenu, setOpenSubMenu] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null); // For profile menu
  const openProfileMenu = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const [pagesArr, setPagesArr] = React.useState([
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
      route: "dashboard",
    },
    {
      text: "Customer Management",
      icon: <DashboardIcon />,
      route: "customermanagement",
    },
    {
      text: "Room Management",
      icon: <DashboardIcon />,
      route: "roommanagement",
    },
    {
      text: "Booking Management",
      icon: <DashboardIcon />,
      route: "bookingmanagement",
    },
    {
      text: "Payment Management",
      icon: <DashboardIcon />,
      route: "paymentmanagement",
    },
    {
      text: "Service Management",
      icon: <DashboardIcon />,
      route: "servicemanagement",
    },
    {
      text: "Inventory Management",
      icon: <DashboardIcon />,
      route: "inventorymanagement",
    },
    {
      text: "Profile Management",
      icon: <DashboardIcon />,
      route: "profilemanagement",
    },
  ]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const navigate = useNavigate();

  const handleRouter = (route) => {
    navigate(`/admin-dashboard/${route}`);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {pagesArr.map((item, index) => {
          const { text, icon, route } = item;
          return (
            <ListItem key={text} onClick={() => handleRouter(route)}>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            ADMIN HOTEL MANAGEMENT SYSTEM
          </Typography>
          <IconButton onClick={handleProfileMenuOpen} sx={{ p: 0 }}>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>P</Avatar>
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={openProfileMenu}
            onClose={handleProfileMenuClose}
          >
            <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleProfileMenuClose}>Settings</MenuItem>
            <MenuItem onClick={signOut}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/customermanagement" element={<CustomerManagementScreen />} />
          <Route path="/roommanagement" element={<RoomManagementScreen />} />
          <Route path="/bookingmanagement" element={<BookingManagementScreen />} />
          <Route path="/paymentmanagement" element={<PaymentManagementScreen />} />
          <Route path="/servicemanagement" element={<ServiceManagementScreen />} />
          <Route path="/inventorymanagement" element={<InventoryManagementScreen />} />
          <Route path="/profilemanagement" element={<ProfileManagementScreen />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default AdminDashboard;