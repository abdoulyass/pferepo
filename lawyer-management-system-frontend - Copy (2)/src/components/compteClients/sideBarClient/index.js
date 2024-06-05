import React, { useState } from "react";
import "./style.css";
import Logo from "../../../imgs/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarDataClient } from "../../../data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SideBarClient = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left: '0'
    },
    false: {
      left: '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
    
    </>
  );
}

export default SideBarClient
