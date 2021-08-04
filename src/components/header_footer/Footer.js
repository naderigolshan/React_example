import React from 'react';
import Fade from "react-reveal/Fade";

function Footer() {

    return (
      <footer className="bck_black">
          <Fade delay={500}>
              <div>پریسا نادری</div>
              <div className="footer_copyright">کلیه حقوق این وبسایت محفوظ می باشد.</div>
          </Fade>
      </footer>
    );
}

export default Footer