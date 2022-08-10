import React from 'react'
import { Outlet } from "react-router";
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div >
        <Navbar/>
        <div className="container mt-2">
            <Outlet/>
        </div>
    </div>
  )
}

export default App 