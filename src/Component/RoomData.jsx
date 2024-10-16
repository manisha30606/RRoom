import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Img1 from '../assets/p17.jpg';
import Img2 from '../assets/p16.jpg';
import './RoomDataStyle.css';

const RoomData = () => {
    const { RoomType, serviceType } = useParams(); // Destructure both RoomType and serviceType

    const RoomDetails = {
        room157: {
            title: 'Room Number 157',
            description: 'Details about renting houses...',
            img: Img1,
        },
        room158: {
            title: 'Room Number 158',
            description: 'Details about renting houses...',
            img: Img2,
        },
        room159: {
            title: 'Room Number 159',
            description: 'Details about renting houses...',
            img: Img1,
        },
        room160: {
            title: 'Room Number 160',
            description: 'Details about renting houses...',
            img: Img2,
        },
    };

    // Get the current room details based on RoomType
    const currentRoom = RoomDetails[RoomType];

    if (!currentRoom) {
        return <h1>Room Not Found</h1>;
    }

    return (
        <>
            <div className="room-data">
                <h1>{currentRoom.title} Details</h1>
                <div className="room-data-detail">
                    <div className="room-data-img">
                        <img src={currentRoom.img} alt={`${currentRoom.title}`} />
                        <img src={currentRoom.img} alt={`${currentRoom.title}`} />
                        <img src={currentRoom.img} alt={`${currentRoom.title}`} />
                    </div>
                    <div className="room-data-locate">
                        <h2>Location - 160 sec B Scheme 78, Indore, Madhya Pradesh</h2>
                    </div>
                    <div className="room-data-info">
                        <div className="data-info1">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit...</p>
                        </div>
                        <div className="data-info2">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit...</p>
                        </div>
                    </div>

                    <div className="room-data-btn">
                        <Link to={`/servicedata/${serviceType}`}>
                            <button>
                                Check Out More Rooms ⬅️
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RoomData;
