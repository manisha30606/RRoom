import React from 'react'
import "./loginStyle.css";
import { FaSquare } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const login = () => {
    return (
        <>
        <div className="main-page">
     
            <section className="container">
                <div className="login-left">
                    <div className="left-logo">
                        <h2>RRoom</h2>
                    </div>
                    <div className="login-left-data">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info.</p>
                        <p className='login-subpara'>Not have any Account. </p>
                        <Link to = "/signup"><button>Signup</button></Link>
                    </div>
                </div>
                <div className="login-right">
                    <div className="login-head">
                        Login
                    </div>
                    <div className="login-form">
                        <form action="">
                            <h3>Name</h3>
                            <input type="Name" />
                            <h3>Email</h3>
                            <input type="Email" />
                            <h3>Password</h3>
                            <input type="password" name="password" id="" />
                        </form>

                        <div className="submit-btn">
                            <button>
                                Login
                            </button>
                        </div>

                       

                    </div>
                </div>
            </section>
                   
        </div>
        </>
    )
}

export default login