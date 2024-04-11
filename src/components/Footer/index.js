import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import "./index.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <div>
        <p className="footer-loctation">
          KARO ABHAYAAS <br /> 112, ELECTRONIC CITY <br /> BANGALORE, INDIA
        </p>
      </div>
      <div>
        <p className="follow-us">Follow Us</p>
        <div className="footer-social-media-links">
          <div className="footer-social-media-icon">
            <FaLinkedin size={24} color="#fff" />
          </div>
          <div className="footer-social-media-icon">
            <FaFacebookSquare size={24} color="#fff" />
          </div>
          <div className="footer-social-media-icon">
            <FaInstagram size={24} color="#fff" />
          </div>
          <div className="footer-social-media-icon">
            <FaYoutube size={24} color="#fff" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
