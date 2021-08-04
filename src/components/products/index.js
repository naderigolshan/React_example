import React, {useState} from 'react'
import Carrousel from "./carrousel";
import CountDown from "./CountDown";

function Product() {


    return (
        <div style={{
            position: "relative"
        }}>
            <Carrousel />
            <div className="artist_name">
                <div className="wrapper">
                    پریسا نادری
                </div>
            </div>
            <CountDown />
        </div>
    )
}

export default Product