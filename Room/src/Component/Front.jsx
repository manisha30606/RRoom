import React from 'react'
import { CiBookmark } from "react-icons/ci";
import "./FrontStyle.css"
import Img from "../assets/p1.jpg";
const Front = () => {
    return (
        <>
            <section className="front-page">
                <div className="front-head">
                    <h1>Room Rent</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Facere autem, dignissimos beatae dolorum porro ea nihil numquam illum molestiae voluptas.</p>
                </div>

                <div className="front-boxes">

                    <div className="box">
                        <img src={Img} alt="" />
                        <div className="box-data">
                            <h4>House Rent</h4>
                            <h4><CiBookmark className='book-icon' /></h4>
                        </div>
                    </div>

                    <div className="box">
                        <img src={Img} alt="" />
                        <div className="box-data">
                            <h4>House Rent</h4>
                            <h4><CiBookmark className='book-icon' /></h4>
                        </div>
                    </div>

                    <div className="box">
                        <img src={Img} alt="" />
                        <div className="box-data">
                            <h4>House Rent</h4>
                            <h4><CiBookmark className='book-icon' /></h4>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Front