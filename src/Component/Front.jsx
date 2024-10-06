import React from 'react'
import { MdBookmarkBorder } from "react-icons/md";
import "./FrontStyle.css"
import Img from "../assets/p1.jpg";
import Back from "../assets/p4.jpg";
import { IoArrowRedoSharp } from "react-icons/io5";
const Front = () => {
    return (
        <>
            <section className="home-page">


                <div className="home">
                    <div className="home-left">
                        <h2 className='head1'>WELCOME TO</h2>
                        <h1 className='head2'><span>R</span>ROOM</h1>
                        <h3 className='head3'>Find Your Perfect Room with RRoom</h3>
                        <p className='para'>Welcome to Roomom, the easiest way to find your ideal room! Whether you’re looking for a cozy PG hostel or a spacious apartment, we’ve got you covered. Our platform offers a wide range of options to fit your needs and budget. Explore our listings, connect with landlords, and make your search for the perfect place stress-free. Let’s help you find a home you’ll love!</p>
                    </div>
                    <div className="home-right">
                        <img src={Back} alt="" />
                    </div>
                </div>
                <div className="box-head">
                    <h2>Our Services</h2>
                </div>
                <div className="home-boxes">

                    <div className="box">
                        <img src={Img} alt="" />
                        <div className="box-data">
                            <h4>House Rent</h4>
                            <div className="box-data-icons">
                                <h4><MdBookmarkBorder /></h4>
                                <h4><IoArrowRedoSharp /></h4>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <img src={Img} alt="" />
                        <div className="box-data">
                            <h4>House Rent</h4>
                            <div className="box-data-icons">
                                <h4><MdBookmarkBorder /></h4>
                                <h4><IoArrowRedoSharp /></h4>
                            </div>

                        </div>
                    </div>

                    <div className="box">
                        <img src={Img} alt="" />
                        <div className="box-data">
                            <h4>House Rent</h4>
                            <div className="box-data-icons">
                                <h4><MdBookmarkBorder /></h4>
                                <h4><IoArrowRedoSharp /></h4>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Front