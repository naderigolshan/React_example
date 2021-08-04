import React, {useState} from 'react'
import Slider from "react-slick";

import sl_1 from "../../assets/images/la.jpg";
import sl_2 from "../../assets/images/php.jpg";
import sl_3 from "../../assets/images/py.jpg";
import sl_4 from "../../assets/images/re.jpg";

function Carrousel() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            <div>
                <div className="carrousel_image" style={{background:`url(${sl_1})` , height: `${window.innerHeight}px`}} />
            </div>

            <div>
                <div className="carrousel_image" style={{background:`url(${sl_2})`, height: `${window.innerHeight}px`}} />
            </div>

            <div>
                <div className="carrousel_image" style={{background:`url(${sl_3})`, height: `${window.innerHeight}px`}} />
            </div>

            <div>
                <div className="carrousel_image" style={{background:`url(${sl_4})`, height: `${window.innerHeight}px`}} />
            </div>

        </Slider>
    )
}

export default Carrousel