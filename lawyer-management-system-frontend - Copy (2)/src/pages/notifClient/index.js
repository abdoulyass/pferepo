import React from 'react'
import "./style.css"
import { NotifClient , SideBarClient} from '../../components'
const Notification = () => {
  return (
    <div className="AppReq">
    <div className="AppGlassReq">
        
        <SideBarClient />
        <div className="middleContainerReq">
            <NotifClient/>
        </div>
    </div>
</div>
  )
}

export default Notification
