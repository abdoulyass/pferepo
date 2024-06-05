import React from 'react'
import { CaseCreateClient,SideBarClient } from '../../components'
import "./style.css"
import { back } from '../../assets/images'
import tster from "../../imgs/tst.png";
import tste from "../../imgs/tst2.png"

const CaseCreate = () => {
  return (
    <div className="AppCre">
    <div className="AppGlassCre">
    <img src={tster} className='backGround'/>
       <img src={tste} className='backGround2'/>
        {/* <SideBarClient /> */}
        <div className="middleContainerCre card" >
            <CaseCreateClient />
        </div>
    </div>
</div>
  )
}

export default CaseCreate
