import React, { useState } from 'react';
import './SectionTwo.css'
import Slider from "react-slick";
import Data5 from '../../FakeData/LayoutOneData'
import PartOne from './PartOne';
const SectionTwo = () => {
    const [Sli ,SetSli] =useState(Data5)

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      
      speed: 500,      
      slidesToShow: 1,
      slidesToScroll: 1
 
     
    };
    return (
        <div>

        <div className="container">
            <div className="pb-5">
            
                <Slider {...settings}>
                  {
                   Sli.map((Sliderdata)=> <PartOne Profile={Sliderdata}/>)
                  }
              
                </Slider>
              </div>
            </div>
                    
                </div>
    );
};

export default SectionTwo;