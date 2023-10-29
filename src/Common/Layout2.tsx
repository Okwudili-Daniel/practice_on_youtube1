import React from 'react'
import Header from '../Static/Header'
import {Outlet} from "react-router-dom"

const Layout2 = () => {
  return (
    <div style={{overflow:"hidden"}}>
      {/* <Header/> */}
      <Outlet/>
    </div>
  )
}

export default Layout2
