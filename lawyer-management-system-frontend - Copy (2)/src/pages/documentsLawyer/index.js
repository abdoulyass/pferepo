import React from 'react'
import { MainDash, Sidebar, TableDoc} from '../../components'
import "./style.css"
const Documents = () => {
  return (
    <div>
      <div className="AppDoc">
    <div className="AppGlassDoc">
        
        <Sidebar />
        <div className="middleContainerDoc">
            <TableDoc className="clientsDoc" />
        </div>
    </div>
</div>
    </div>
  )
}

export default Documents
