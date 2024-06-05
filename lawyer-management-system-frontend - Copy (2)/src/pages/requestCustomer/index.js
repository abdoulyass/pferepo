import React from 'react'
import { RequestClient,SideBarClient } from '../../components'
import tster from "../../imgs/tst.png";
import tste from "../../imgs/tst2.png"
import "./style.css"
const Request = () => {
  return (
    <div className="AppReq">
    <div className="AppGlassReq">
      <img src={tster} className='backGround'/>
      <img src={tste} className='backGround2'/>
        <div className="middleContainerReq" >
            <RequestClient />
        </div>
    </div>
</div>
  )
}

export default Request
