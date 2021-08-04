import React, {useState} from 'react';
import Zoom from 'react-reveal/Zoom';
import icon_calender from "../../assets/images/icons/calendar.png";
import icon_location from "../../assets/images/icons/location.png";


function ProductInfo() {


    return (
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="cn_wrapper">
                    <Zoom duration={500}>
                        <div className="cn_item">
                            <div className="cn_outer">
                                <div className="cn_inner">
                                    <div className="cn_icon_square bck_red"></div>
                                    <div className="cn_icon" style={{background: `url(${icon_calender})`}}></div>
                                    <div className="cn_title">تاریخ و زمان سمینار</div>
                                    <div className="cn_desc">21 شهریور 1400</div>
                                </div>
                            </div>
                        </div>
                    </Zoom>

                    <Zoom duration={500} delay={500}>
                        <div className="cn_item">
                            <div className="cn_outer">
                                <div className="cn_inner">
                                    <div className="cn_icon_square bck_yellow"></div>
                                    <div className="cn_icon" style={{background: `url(${icon_location})`}}></div>
                                    <div className="cn_title">محل سمینار</div>
                                    <div className="cn_desc">دانشگاه تهران</div>
                                </div>
                            </div>
                        </div>
                    </Zoom>

                </div>
            </div>
        </div>
    )
}

export default ProductInfo