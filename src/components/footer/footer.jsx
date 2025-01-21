import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <h3 className="footer-title">JEWELRY PART CO., LTD</h3>
        <div className="grid--footer">
          <div>
            <p className="footer-text address">
              207/4 Charemkrung Rd., Watprayakrai, Bangkorlamb, Bangkok 10120
            </p>
            <p className="footer-text">Tel : (662) 289-4436</p>
            <p className="footer-text">Fax : (662) 291-6677</p>
            <p className="footer-text">Mobile : 08-2345-5455</p>
          </div>
          <div>
            <h4 className="footer-contact-title">Contact us</h4>
            <p>
              <span className="footer-icon">
                <i class="fa-solid fa-envelope"></i>
              </span>
              <a class="footer-link" href="mailto:jewelryparts@gmail.com">
                jewelryparts@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
