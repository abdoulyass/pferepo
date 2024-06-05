import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';  // Make sure to import the default styles
import { Box, IconButton, Typography } from "@mui/material";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import "./style.css"; // Assurez-vous que le fichier CSS est correctement importé ici

const colors = {
  primary: {
    400: '#1a73e8',
  },
  grey: {
    100: '#f5f5f5',
    300: '#e0e0e0',
  },
  greenAccent: {
    500: '#00e676',
  },
};

const Item = ({ title, to, icon, selected, setSelected }) => (
  <MenuItem
    active={selected === title}
    onClick={() => setSelected(title)}
    icon={icon}
  >
    {title}
  </MenuItem>
);

const Filter = ({ onFilterChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('');

  const handleSidebarClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Box
      sx={{
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        height: "84vh", // Définir la hauteur à 80vh
        "& .pro-sidebar-inner": {
          background: `#fafafa !important`,
          width: isCollapsed ? '20px' : 'inherit', // Définir la largeur à 20px si isCollapsed est true
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
           color:"#000",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={handleSidebarClick}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Manage Lawyer"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Filter;
