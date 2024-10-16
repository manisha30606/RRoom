import React, { useState } from 'react';
import './ServiceDataStyle.css';
import { CgMoreO } from 'react-icons/cg';
import { Link, useParams } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';

import Img1 from '../assets/p17.jpg';
import Img2 from '../assets/p16.jpg';
import Img3 from '../assets/p16.jpg'; 

const ServiceData = () => {
//   const [details, setDetails] = useState(false);

//   const toggleDetails = () => {
//     setDetails(!details);
//   };

  const { serviceType } = useParams();

  const serviceDetails = {
    girlHostel: {
        title: 'Girl Hostel Service',
        description: 'Details about renting houses...',
      //   img: Img1,
    },
    boyHostel: {
        title: 'Boy Hostel Service',
        description: 'Details about renting houses...',
      //   img: Img1,
    },
    flats: {
      title: 'Flats Services',
      description: 'Details about renting houses...',
    //   img: Img1,
    },
    MenPg: {
      title: 'PG Services For men',
      description: 'Details about PG services...',
    //   img: Img2,
    },
    WomenPg: {
      title: 'PG Services For Women',
      description: 'Details about PG services...',
    //   img: Img2,
    },
    hotel: {
      title: 'Hotel Services',
      description: 'Details about hotel services...',
    //   img: Img3,
    },
    per: {
        title: 'Personal Room  Services',
        description: 'Details about hotel services...',
      //   img: Img3,
      },
    house: {
        title: 'House Services',
        description: 'Details about hotel services...',
      //   img: Img3,
      },
      hotels: {
        title: '5 Star Services',
        description: 'Details about hotel services...',
      //   img: Img3,
      },
    // Add more services here
  };

  // Use the current service's details based on the URL parameter
  const currentService = serviceDetails[serviceType];

  if (!currentService) {
    return <h1>Service Not Found</h1>;
  }

    return (
        <section className='serData'>
            <div className='sub-data'>
                <h1>{currentService.title}</h1>
                <p>{currentService.description}</p>
                <button className='sub-data-btn'>Book Now</button>
            </div>

            <div className='service-data-box-head'>
                <h2>Services In <span>{currentService.title}</span></h2>
            </div>
            <div className="service-data-box">

                <div className="service-box">
                    <div className="box-img">
                        <img src={Img1} className='img' alt="Service" />
                    </div>
                    <div className="boxes-data">
                        <div className="subdata1">
                            <h3>Single</h3>
                            <p>Room No. 157</p>
                            
                        </div>
                        <div className="subdata2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, autem. lorem10</p>
                        </div>
                        <div className="subdata-btn">
                            <button>
                                Book Now
                            </button>
                            <Link to='./roomdata/room157'><button>
                               View Room
                            </button>
                            </Link>
                        </div>
                    </div>


                </div>
                <div className="service-box">
                    <div className="box-img">
                        <img src={Img2} className='img' />
                    </div>
                    <div className="boxes-data">
                        <div className="subdata1">
                        <h3>2 BHK</h3>
                        <p>Room No. 158</p>
     

                        </div>
                        <div className="subdata2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, autem. lorem10</p>
                        </div>
                        <div className="subdata-btn">
                            <button>
                                Book Now
                            </button>
                            <Link to='./roomdata/room158'><button>
                               View Room
                            </button>
                            </Link>
                        </div>
                    </div>


                </div>
            </div>
           


        </section>
    )
}

export default ServiceData