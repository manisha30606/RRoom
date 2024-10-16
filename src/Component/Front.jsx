import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdBookmarkBorder } from "react-icons/md";
import { CgMoreO } from 'react-icons/cg';
import { RxCross2 } from 'react-icons/rx';
import "./FrontStyle.css";
import Img1 from "../assets/p1.jpg";
import Img2 from "../assets/p18.png";
import Img3 from "../assets/p19.png";
import Img4 from "../assets/p6.jpg";
import Img5 from "../assets/p19.avif";
import Img6 from "../assets/p20.avif";
import Img7 from "../assets/p7.jpg";
import { IoArrowRedoSharp } from "react-icons/io5";

const Front = () => {
    const [details, setDetails] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const toggleDetails = (service) => {
        setSelectedService(service);
        setDetails(!details);
    };

    // Data for each service
    const serviceDetails = {
        hostel: {
            title: 'Choose Your Hostel Type',
            options: [
                { label: 'Girls', link: './servicedata/girlHostel', img: Img7 },
                { label: 'Boys', link: './servicedata/boyHostel', img: Img7 },
            ],
        },
        pg: {
            title: 'PG Services',
            options: [
                { label: 'Women', link: './servicedata/WomenPg', img: Img7 },
                { label: 'Men', link: './servicedata/MenPg', img: Img7 },
            ],
        },
        personalUse: {
            title: 'Personal Use Rooms',
            description: 'Rooms for personal use, fully equipped with modern amenities.',
            link: './servicedata/per',
        },
        houses: {
            title: 'House Services',
            description: 'Explore the houses available for rent or purchase.',
            link: './servicedata/house',
        },
        flats: {
            title: 'Flat Services',
            description: 'Luxury flats with all facilities. Click to explore!',
            link: './servicedata/flats',
        },
        hotels: {
            title: '5 Star Hotel Services',
            description: 'Book your stay in 5-star hotels for an exceptional experience.',
            link: './servicedata/hotels',
        },
    };

    return (
        <>
            <section className="home-page">
                <div className="home">
                    <h2 className='head1'>WELCOME TO</h2>
                    <h1 className='head2'><span>R</span>ROOM</h1>
                    <h3 className='head3'>Find Your Perfect Room with RRoom</h3>
                    <p className='para'>
                        Welcome to RRoom, the easiest way to find your ideal room! Whether you’re looking for a cozy PG hostel or a spacious apartment, we’ve got you covered. Our platform offers a wide range of options to fit your needs and budget. Let’s help you find a home you’ll love!
                    </p>
                    <div className="btn">
                        <Link to='./book'><button className="home-btn">Book Now</button></Link>
                    </div>
                </div>

                <div className="home-service">
                    <div className="box-head">
                        <h2>Our Services</h2>
                    </div>
                    <div className="home-boxes">

                        {/* Box for Hostel */}
                        <div className="box">
                            <img src={Img1} alt="" />
                            <div className="box-data">
                                <h4>Hostel</h4>
                                <div className="box-data-icons">
                                    <h4><MdBookmarkBorder /></h4>
                                    <h4 onClick={() => toggleDetails('hostel')}><CgMoreO /></h4>
                                </div>
                            </div>
                        </div>

                        {/* Other Boxes */}
                        <div className="box">
                            <img src={Img2} alt="" />
                            <div className="box-data">
                                <h4>PG</h4>
                                <div className="box-data-icons">
                                    <h4><MdBookmarkBorder /></h4>
                                    <h4 onClick={() => toggleDetails('pg')}><CgMoreO /></h4>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <img src={Img3} alt="" />
                            <div className="box-data">
                                <h4>Personal Use</h4>
                                <div className="box-data-icons">
                                    <h4><MdBookmarkBorder /></h4>
                                    <h4 onClick={() => toggleDetails('personalUse')}><IoArrowRedoSharp /></h4>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <img src={Img4} alt="" />
                            <div className="box-data">
                                <h4>Houses</h4>
                                <div className="box-data-icons">
                                    <h4><MdBookmarkBorder /></h4>
                                    <h4 onClick={() => toggleDetails('houses')}><IoArrowRedoSharp /></h4>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <img src={Img5} alt="" />
                            <div className="box-data">
                                <h4>Flats</h4>
                                <div className="box-data-icons">
                                    <h4><MdBookmarkBorder /></h4>
                                    <h4 onClick={() => toggleDetails('flats')}><IoArrowRedoSharp /></h4>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <img src={Img6} alt="" />
                            <div className="box-data">
                                <h4>5 Star Hotel</h4>
                                <div className="box-data-icons">
                                    <h4><MdBookmarkBorder /></h4>
                                    <h4 onClick={() => toggleDetails('hotels')}><IoArrowRedoSharp /></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Book details section */}
                {details && selectedService && (
                    <div className={`overlay ${details ? "show" : ""}`} onClick={toggleDetails}></div>
                )}

                {details && selectedService && (
                    <div className={`book-details ${details ? "open" : ""}`}>
                        <h4 onClick={toggleDetails}><RxCross2 /></h4> {/* Close on click */}

                        <div className="detail-box">
                            <div className="detail-box-head">
                                <h1>{serviceDetails[selectedService].title}</h1>
                            </div>

                            {serviceDetails[selectedService].options ? (
                                <div className="detail-box-data">
                                    {serviceDetails[selectedService].options.map(option => (
                                        <div className="detail-box-subdata" key={option.label}>
                                            <img src={option.img} alt={option.label} />
                                            <Link to={option.link}><h3>{option.label}</h3></Link>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="detail-box-data">
                                    <p>{serviceDetails[selectedService].description}</p>
                                    <Link to={serviceDetails[selectedService].link}>
                                        <button className="home-btn">View Details</button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </section>
        </>
    );
};

export default Front;
