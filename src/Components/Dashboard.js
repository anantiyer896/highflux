import React from 'react'
import '../Style/dashboard.css'; 
import Navbar from './Navbar.js'

export default function Dashboard() {
    return (
        <div >
            <Navbar/>
            <h1 className="dashboard">Hello, I am Mr. Dashboard!</h1>
        </div>
    )
}
