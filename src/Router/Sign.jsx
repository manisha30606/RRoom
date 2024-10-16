import React from 'react'
import { Link } from 'react-router-dom'

const Sign = () => {
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
                 <p className='login-subpara'>Already have any Account. </p>
                 <Link to = "/login"><button>Log In</button></Link>
             </div>
         </div>
         <div className="login-right">
             <div className="login-head">
                 Sign In
             </div>
             <div className="login-form">
                 <form action="">
                     <h3>Name</h3>
                     <input type="Name" />
                     <h3>Email</h3>
                     <input type="Email" />
                     <h3>Phone Number</h3>
                     <input type='phone' />
                     <h3>Password</h3>
                     <input type="password" name="password" id="" />
                 </form>

                 <div className="submit-btn">
                     <button>
                         Sign In
                     </button>
                 </div>

                

             </div>
         </div>
     </section>
            
 </div>
        </>
    )
}

export default Sign