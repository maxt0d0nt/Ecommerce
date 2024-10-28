import React, { useState } from 'react';

"use client"

const slides = [
    {
      id: 1,
      title: "Summer Sale Collections",
      description: "Sale! Up to 50% off!",
      img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
      url: "/",
      bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    },
    {
      id: 2,
      title: "Winter Sale Collections",
      description: "Sale! Up to 50% off!",
      img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
      url: "/",
      bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    },
    {
      id: 3,
      title: "Spring Sale Collections",
      description: "Sale! Up to 50% off!",
      img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
      url: "/",
      bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
  ];

const Slider = () => {

    const [current, setCurrent] = useState(0)
    return (
        <div className='H-[calc(100vh-80px)] overflow-hidden'>
            <div className='w-max h-full flex transition-all ease-in-out duration-1000'></div>
            {slides.map(slide=>(
                <div className=''>
                    {/* TEXT CONTAINER*/}
                    <div className=''>
                        
                    </div>
                    {/* IMAGE CONTAINER*/}
                    <div className=''></div>
                </div>
            ))}
        </div>
    );
};

export default Slider;