import "./Contact.css";
import {
  Mail,
  MapPin,
 Phone,
  Clock,
  Send
} from "lucide-react";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="section-title">

        <span>CONTACT</span>

        <h2>
          Let's Build
          <span> Together</span>
        </h2>

        <p>
          Have an idea? Looking for a dedicated development team?
          We'd love to hear about your project.
        </p>

      </div>

      <div className="contact-grid">

        <div className="contact-form glass">

          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe"/>
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input type="email" placeholder="john@email.com"/>
          </div>

          <div className="input-group">
            <label>Company</label>
            <input type="text" placeholder="Company Name"/>
          </div>

          <div className="input-group">
            <label>Project Details</label>
            <textarea rows={6} placeholder="Tell us about your project..." />
          </div>

          <button className="send-btn">
            Send Message
            <Send size={18}/>
          </button>

        </div>

        <div className="contact-info">

          <div className="glass info-card">

            <MapPin size={28}/>

            <h3>Office</h3>

            <p>
              Hyderabad, Telangana
              <br/>
              India
            </p>

          </div>

          <div className="glass info-card">

            <Mail size={28}/>

            <h3>Email</h3>

            <p>hello@belnovatech.com</p>

          </div>

          <div className="glass info-card">

            <Phone size={28}/>

            <h3>Phone</h3>

            <p>+91 XXXXX XXXXX</p>

          </div>

          <div className="glass info-card">

            <Clock size={28}/>

            <h3>Working Hours</h3>

            <p>Monday - Friday<br/>9:00 AM - 6:00 PM</p>

          </div>

          <div className="contact-buttons">

            <a className="whatsapp-btn" href="#">
              WhatsApp Us
            </a>

            <a className="meeting-btn" href="#">
              Book Meeting
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;