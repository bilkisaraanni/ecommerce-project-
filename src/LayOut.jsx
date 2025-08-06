import React from 'react'
import { Outlet } from "react-router";
import NavBar from './Component/NavBar'
import FirstPart from './Component/FirstPart'
import Exclusive from './Component/Exclusive'

const LayOut = () => {
  return (
   <>
    <FirstPart/>
    {/* <NavBar/> */}
    <Outlet/>
    <Exclusive/>
    
   </>
  )
}

export default LayOut