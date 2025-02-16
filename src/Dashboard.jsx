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
import {  useNavigate } from "react-router-dom";
import {  Route, Routes,} from "react-router-dom"
import { useState } from "react";
import Collapse from "@mui/material/Collapse";
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import DoorbellOutlinedIcon from '@mui/icons-material/DoorbellOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ForwardIcon from '@mui/icons-material/Forward';
import StudentReg from "./Screens/StudentReg";
import StudentList from "./Screens/StudentList";
import TeacherReg from "./Screens/TeacherReg";
import TeacherList from "./Screens/TeacherList";
import SubjectAdd from "./Screens/SubjectAdd";
import SubjectList from "./Screens/SubjectList";
import SyllabusForm from "./Screens/SyllabusForm";
import SyllabusList from "./Screens/SyllabusList";
import StdReg from "./Screens/StdReg";
import TeachReg from "./Screens/TeachReg";
import ClassForm from "./Screens/ClassForm";
import ClassList from "./Screens/ClassList";
import FeeVoucherPage from "./Screens/FeeVoucher";
import FeeStructure from "./Screens/FeeStructure";
import AdmissionForm from "./Screens/AdmissionForm";
import ExamSchedule from "./Screens/ExamSchedule";
import ExamResult from "./Screens/ExamResult";
import { Button } from "@mui/material";

const drawerWidth = 240;

function Dashboard(props) {


  const logout = useNavigate();

  const signOut = () => {
    localStorage.clear();
    logout("/login");
  };
  
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(""); // State to manage submenu open/close
  const [pagesArr, setPagesArr] = React.useState([
    {
      text: "Students",
      icon: <DashboardIcon />,
      mainItems: [
        {
              text: <b>Student Registration</b>,
            route:"studentreg",
            icon:<ForwardIcon/>
        },
        {
              text: <b>Student List</b>,
            route:"studentlist",
            icon:<ForwardIcon/>
        },
      
      ],
    },
    {
      text: "Teacher",
      icon: <DashboardIcon />,
      mainItems: [
        {
            text: <b>Teacher Registration</b>,
            route:"teacherreg",
            icon:<ForwardIcon/>
        },
        {
              text: <b>Teacher List</b>,
            route:"teacherlist",
            icon:<ForwardIcon/>
        },
      
      ],
    },
    {
      text: "Subjects",
      icon: <DashboardIcon />,
      mainItems: [
        {
              text: <b>Subjects Add</b>,
            route:"subjectadd",
            icon:<ForwardIcon/>
        },
        {
              text: <b>Subject List</b>,
            route:"subjectlist",
            icon:<ForwardIcon/>
        },
      
      ],
    },
    {
      text: "Syllabus",
      icon: <DashboardIcon />,
      mainItems: [
        {
              text: <b>Syllabus Form</b>,
            route:"syllabusform",
            icon:<ForwardIcon/>
        },
        {
              text: <b>Syllabus List</b>,
            route:"syllabuslist",
            icon:<ForwardIcon/>
        },
      
      ],
    },
    {
      text: "School",
      icon: <DashboardIcon />,
      mainItems: [
        {
              text: <b>Student Registration</b>,
            route:"stdreg",
            icon:<ForwardIcon/>
        },
        {
              text: <b>Teacher Registration</b>,
            route:"teachreg",
            icon:<ForwardIcon/>
        },
      
      ],
    },
    {
      text: "Class",
      icon: <DashboardIcon />,
      mainItems: [
        {
              text: <b>Class Form</b>,
            route:"classform",
            icon:<ForwardIcon/>
        },
        {
              text: <b>Class List</b>,
            route:"classlist",
            icon:<ForwardIcon/>
        },
      
      ],
    },
    {
      text: "Fees",
      icon: <DashboardIcon />,
      mainItems: [
        {
              text: <b>Fee Structure</b>,
            route:"feestructure",
            icon:<ForwardIcon/>
        },
        {
              text: <b>Fee Voucher</b>,
            route:"feevoucher",
            icon:<ForwardIcon/>
        },
      
      ],
    },
    {
      text: "Admission",
      icon: <DashboardIcon />,
      mainItems: [
        {
            text: <b>Admission Form</b>,
            route:"admissionform",
            icon:<ForwardIcon/>
        },
      
      ],
    },
    {
      text: "Exam",
      icon: <DashboardIcon />,
      mainItems: [
        {
            text: <b>Exam Schedule</b>,
            route:"examschedule",
            icon:<ForwardIcon/>
        },
        {
            text: <b>Exam Result</b>,
            route:"examresult",
            icon:<ForwardIcon/>
        },
      
      ],
    },
    {
      text: <Button onClick={signOut} variant="contained" color="error">SignOut</Button>
    },
    
  ]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const navigate = useNavigate();

  const handleRouter = (route) => {
    navigate(`/dashboard/${route}`);
  };
  const handleMainRouter = (route) => {
    navigate(`/dashboard/${route}`);
}

  const handleSubMenuClick = (text) => {
    // Toggle submenu open/close
    setOpenSubMenu(openSubMenu === text ? "" : text);
  };


  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {/* MAP */}
        {pagesArr.map((item, index) => {
      const { text, icon, route, subItems , mainItems} = item;
      return (
        <div key={text}>
          {mainItems ? (
            <ListItem onClick={() => handleSubMenuClick(text)}>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ) : (
            <ListItem onClick={() => handleRouter(route)}>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )}
          {mainItems && (
            <Collapse
              in={openSubMenu === text}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {mainItems.map((Item, Index) => (
                  <ListItem
                    key={Index}
                    onClick={() => handleMainRouter(Item.route)}
                  >
                    <ListItemButton>
                    <ListItemIcon>{Item.icon}</ListItemIcon>
                      <ListItemText primary={Item.text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          )}
            </div>
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
          <div style={{display:"flex" , justifyContent:"space-between"}}>
            <div>LEARNING MANAGEMENT SYSTEM</div>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
          <Route path="/studentreg" element={<StudentReg />} />
          <Route path="/studentlist" element={<StudentList />} />
          <Route path="/teacherreg" element={<TeacherReg />} />
          <Route path="/teacherlist" element={<TeacherList />} />
          <Route path="/subjectadd" element={<SubjectAdd />} />
          <Route path="/subjectlist" element={<SubjectList />} />
          <Route path="/syllabusform" element={<SyllabusForm />} />
          <Route path="/syllabuslist" element={<SyllabusList />} />
          <Route path="/stdreg" element={<StdReg />} />
          <Route path="/teachreg" element={<TeachReg />} />
          <Route path="/classform" element={<ClassForm />} />
          <Route path="/classlist" element={<ClassList />} />
          <Route path="/feestructure" element={<FeeStructure />} />
          <Route path="/feevoucher" element={<FeeVoucherPage />} />
          <Route path="/admissionform" element={<AdmissionForm />} />
          <Route path="/examschedule" element={<ExamSchedule />} />
          <Route path="/examresult" element={<ExamResult />} />
        </Routes>
      </Box>
    </Box>
    
  );
}

export default Dashboard;