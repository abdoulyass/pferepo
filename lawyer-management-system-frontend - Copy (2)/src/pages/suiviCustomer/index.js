import React from 'react'
import { SuiviClient,SideBarClient } from '../../components'
import "./style.css"
import tster from "../../imgs/tst.png";
import tste from "../../imgs/tst2.png";
const Suivi = () => {
  return (
    <div className="AppSuiv">
    <div className="AppGlassSuiv">
        <img src={tster} className='backGround' alt="background" />
        <img src={tste} className='backGround2' alt="background2" />
            <SuiviClient className="clients" />

    </div>
</div>
  )
}

export default Suivi
