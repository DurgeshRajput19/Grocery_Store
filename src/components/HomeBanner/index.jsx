import React from 'react';
import Slider from 'react-slick';
import img from '../../assests/adi-goldstein-JTlwuJblZdk-unsplash.jpg';
import img1 from '../../assests/adi-goldstein-sdtnZ4LgbWk-unsplash.jpg';
import img2 from '../../assests/kai-pilger-7YwWjgS7aJs-unsplash.jpg';

const HomeBanner = () =>{

     var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
     }

    return(
        <div className="homeBanner container">
            <Slider {...settings}>
                <div >
                    <img className="item w-100" src={img}  alt="" />
                </div>
                <div >
                    <img className="item w-100" src={img1} alt="" />
                </div>
                <div >
                    <img className="item w-100" src={img2} alt="" />
                </div>
            </Slider>
        </div>
    )
}

export default HomeBanner;