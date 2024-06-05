import React, { useState, useEffect } from 'react';
import { MainDash, Sidebar, TableRev } from '../../components'
import "./style.css"
import axios from 'axios';
const Revenue = () => {
 
  return (
    <div className="AppRev">
    <div className="AppGlassRev">
        
        <Sidebar />
        <div className="middleContainerRev">
            <TableRev className="clientsTab"/>
        </div>
    </div>
</div>
  )
}

export default Revenue
