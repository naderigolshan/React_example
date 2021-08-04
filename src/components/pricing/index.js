import React, {useEffect, useState} from 'react';
import Zoom from "react-reveal/Zoom";
import MyButton from "../utils/myButton";

function Pricing() {

    const [state, setState] = useState({
        pricing: [100, 150, 250],
        position: ['ردیف اول', 'ردیف دوم', 'ردیف دوم'],
        desc: [
            'از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.',
            'از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.',
            'از آنجایی که طراحان عموما نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و صفحه‌بندی را به پایان برند.',
        ],
        linkTo: ['http://localhost:3000/1', 'http://localhost:3000/2', 'http://localhost:3000/3'],
        delay: [500, 0, 500],
    });
    const showBox = () => {
        return state.pricing.map((item, index) => (
            <Zoom delay={state.delay[index]} key={`${state.position}${index}`}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>{item} تومان </span>
                            <span>{state.position[index]}</span>
                        </div>
                        <div className="pricing_description">
                            {state.desc[index]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton text="خرید" bck="#ffa800" color="#fff" link={state.linkTo[index]} />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    };

    return (
        <div className="bck_black">
            <div className="center_wrapper pricing_section">
                <h2>قیمت</h2>
                <div className="pricing_wrapper">
                    {showBox()}
                    {/*or <showBox/>*/}
                </div>
            </div>
        </div>
    )
}

export default Pricing