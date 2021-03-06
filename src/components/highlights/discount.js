import React, {useEffect, useState} from 'react';
import {Fade, Slide} from 'react-reveal';
import MyButton from "../utils/myButton";

function Discount() {

    const [isInitial, setIsInitial] = useState(true);
    const [discountStart, setDiscountStart] = useState(0);
    const discountEnd = 30;

    const percentage = () => {
        setIsInitial(false);
        if (discountStart < 30) {
            setDiscountStart((prevState) => prevState + 1);
        }
    }

    useEffect(() => {
        if (!isInitial) {
            setTimeout(() => {
                percentage()
            }, 30)
        }
    }, [discountStart])

    return (
        <div className="center_wrapper">
            <div className="discount_wrapper">
                <Fade onReveal={percentage}>
                    <div className="discount_percentage">
                        <span>{discountStart}%</span>
                        <span>تخفیف</span>
                    </div>
                </Fade>

                <Slide left>
                    <div className="discount_description">
                        <h3>خرید قبل از ۱ تیر</h3>
                        <p>
                            از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
                            سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
                            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
                            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                            متخصصان را
                        </p>
                        <MyButton text="خرید" bck="#ffa800" link="https://google.com"/>
                    </div>
                </Slide>
            </div>

        </div>
    )
}

export default Discount