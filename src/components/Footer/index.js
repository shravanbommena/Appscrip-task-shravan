import { BsDot } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import "./index.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-desktop-top-section">
        <div className="footer-desktop-top-left">
          <p className="footer-title">BE THE FIRST TO KNOW</p>
          <p className="footer-dummy-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. this is simply dummy text.
          </p>
          <p className="footer-signup-text">
            Sign up for updates from mettā muse.
          </p>
          <div className="footer-email-subscription">
            <input
              type="text"
              placeholder="Enter your e-mail..."
              className="footer-email-input"
            />
            <button type="button" className="footer-subscribe-button">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <hr className="footer-hr" />
        <div className="footer-desktop-top-right">
          <div className="footer-call-section">
            <p className="footer-call-title">CALL US</p>
            <p className="footer-desktop-call-title">CONTACT US</p>
            <div className="footer-call-details-container">
              <p className="footer-call-details">+44 221 133 5360</p>
              <BsDot className="footer-call-details-icon" />
              <p className="footer-call-details">customercare@mettamuse.com</p>
            </div>
          </div>
          <hr className="footer-hr" />
          <div className="footer-currency-section">
            <p className="footer-currency-title">CURRENCY</p>
            <div className="footer-currency-container">
              <img
                src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1712514403/United_States_of_America_US_ywh9ls.png"
                alt="us-flag"
                className="footer-currency-flag"
              />
              <BsDot className="footer-currency-details" />
              <p className="footer-currency-details">USD</p>
            </div>
            <p className="footer-currency-desktop-additional">
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
      </div>
      <hr className="footer-sections-seperator" />
      <div className="footer-desktop-bottom-section">
        <div className="footer-collapse-section">
          <p className="footer-collapse-title">mettā muse</p>
          <MdOutlineKeyboardArrowDown className="footer-down-arrow" />
        </div>
        <hr className="footer-hr" />
        <div className="footer-collapse-section">
          <p className="footer-collapse-title">QUICK LINKS</p>
          <MdOutlineKeyboardArrowDown className="footer-down-arrow" />
        </div>
        <hr className="footer-hr" />
        <div className="footer-collapse-section">
          <p className="footer-collapse-title">FOLLOW US</p>
          <MdOutlineKeyboardArrowDown className="footer-down-arrow" />
        </div>
        <hr className="footer-hr" />
        <div className="footer-payment-section">
          <p className="footer-payment-title">mettā muse ACCEPTS</p>
          <img
            src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1712515776/Frame_136278_ncwk1t.png"
            alt="payments"
          />
        </div>
        <p className="footer-copyright">
          Copyright © 2023 mettamuse. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
