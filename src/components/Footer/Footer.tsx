import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-logo">
          <h2>Belnova Technologies</h2>

          <p>
            Delivering innovative technology solutions for businesses
            worldwide.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#leadership">Leadership</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3>Services</h3>

          <ul>
            <li>AI Solutions</li>
            <li>Cloud</li>
            <li>Software Development</li>
            <li>Digital Transformation</li>
          </ul>
        </div>

        <div>
          <h3>Follow Us</h3>

          <ul>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>X (Twitter)</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Belnova Technologies. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;