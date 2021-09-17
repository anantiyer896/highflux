import React from 'react'
import errorImage from '../images/Error.png'
import '../Style/error.css'; 

export default function ErrorPage() {
    return (
        <div className="error-page">
            <img className="error" src={errorImage}/>
            <div className="error-text">
                <h1>oops!</h1>
                <p>We couldn’t find this page</p>
                <a href="../" className="home-link">Go to Home Page</a>
            </div>
        </div>
    )
}
