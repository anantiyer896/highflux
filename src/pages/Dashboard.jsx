import React from 'react';
import Header from '../components/Header';
import MemberCard from '../components/MemberCard';


// CSS imports
import '../styles/header.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'; 

function Dashboard() {
    return (
        <div style={{minHeight: "100vh",height: '100vh',
        width: '100vw',
        overflow: 'hidden',}}>
            <Header />
            <MemberCard />
        </div>
    )
}

export default Dashboard;
