import React from 'react';

function Location() {

    return (
        <div className="location_wrapper">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207371.9779492625!2d51.20973530936143!3d35.69701178464333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2sTehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2sde!4v1628056590557!5m2!1sen!2sde"
                width="100%"
                height="500px"
                allowFullScreen
                loading="lazy">
            </iframe>
            <div className="location_tag">
                موقعیت مکانی
            </div>
        </div>
    );

}

export default Location