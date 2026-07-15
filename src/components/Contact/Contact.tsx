import "./Contact.css";
import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Send,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Accepts optional leading +, 10-15 digits total
const PHONE_REGEX = /^[6-9]\d{9}$/;

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    subject: false,
    message: false,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  // ---------- Validation ----------
  const isEmailValid = EMAIL_REGEX.test(formData.email.trim());
const isPhoneValid = PHONE_REGEX.test(formData.phone.trim());
  const isNameValid = formData.name.trim().length > 1;
  const isSubjectValid = formData.subject.trim().length > 2;
  const isMessageValid = formData.message.trim().length > 9;

  const isFormValid =
    isNameValid &&
    isEmailValid &&
    isPhoneValid &&
    isSubjectValid &&
    isMessageValid;

  const errorFor = (field: string) => {
    if (!touched[field as keyof typeof touched]) return "";
    switch (field) {
      case "name":
        return isNameValid ? "" : "Please enter your full name.";
      case "email":
        return isEmailValid ? "" : "Please enter a valid email address.";
      case "phone":
        return isPhoneValid
          ? ""
          :"Please enter a valid 10-digit mobile number.";
      case "subject":
        return isSubjectValid ? "" : "Please enter a project subject.";
      case "message":
        return isMessageValid
          ? ""
          : "Please tell us a bit more about your project (min 10 characters).";
      default:
        return "";
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // mark all as touched so any hidden errors surface
    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    });

    if (!isFormValid) return;

    setLoading(true);
    setSubmitError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

        setTouched({
          name: false,
          email: false,
          phone: false,
          subject: false,
          message: false,
        });

        // hide the success message after a while so the form is usable again
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setSubmitError(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitError("Unable to connect to the server. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-glow glow-one"></div>
      <div className="contact-glow glow-two"></div>

      <div className="section-title">
        <span>CONTACT US</span>

        <h2>
          Let's Build
          <span> Together</span>
        </h2>

        <p>
          Whether you're launching a startup, scaling an enterprise,
          or building your next digital product, our experts are here
          to help turn your vision into reality.
        </p>
      </div>

      <div className="contact-grid">
        {/* ================= FORM ================= */}
        <form className="contact-form glass" onSubmit={handleSubmit} noValidate>
          <h3>Send us a Message</h3>

          {submitted && (
            <div className="form-success">
              <CheckCircle2 size={20} />
              <span>Message sent successfully!</span>
            </div>
          )}

          {submitError && <div className="form-error-banner">{submitError}</div>}

          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errorFor("name") ? "input-invalid" : ""}
              required
            />
            {errorFor("name") && (
              <span className="field-error">{errorFor("name")}</span>
            )}
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errorFor("email") ? "input-invalid" : ""}
              required
            />
            {errorFor("email") && (
              <span className="field-error">{errorFor("email")}</span>
            )}
          </div>

          <div className="input-group">
            <label>Phone Number</label>
<input
  type="tel"
  name="phone"
  placeholder="Phone Number"
  value={formData.phone}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);

    setFormData({
      ...formData,
      phone: value,
    });
  }}
  onBlur={handleBlur}
  className={errorFor("phone") ? "input-invalid" : ""}
  maxLength={10}
  required
/>
            {errorFor("phone") && (
              <span className="field-error">{errorFor("phone")}</span>
            )}
          </div>

          <div className="input-group">
            <label>Project Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Project Subject"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errorFor("subject") ? "input-invalid" : ""}
              required
            />
            {errorFor("subject") && (
              <span className="field-error">{errorFor("subject")}</span>
            )}
          </div>

          <div className="input-group">
            <label>Project Details</label>
            <textarea
              rows={6}
              name="message"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errorFor("message") ? "input-invalid" : ""}
              required
            />
            {errorFor("message") && (
              <span className="field-error">{errorFor("message")}</span>
            )}
          </div>

          <button
            type="submit"
            className="send-btn"
            disabled={loading || !isFormValid}
          >
            {loading ? "Sending..." : "Send Message"}
            <Send size={18} />
          </button>
        </form>

        {/* ================= RIGHT SIDE ================= */}
        <div className="contact-info">
          {/* Office */}
          <div className="glass info-card">
            <MapPin size={28} />

            <h3>Belnova Technologies</h3>

            <p>
              4th & 5th Floor,
              <br />
              Plot No. 4,
              <br />
              Doc Bhavan,
              <br />
              2-91/12/4/NR,
              <br />
              Kondapur,
              <br />
              Hyderabad, Telangana 500081
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=4th%20%26%205th%20Floor%20Plot%20No%204%20Doc%20Bhavan%20Kondapur%20Hyderabad%20500081"
              target="_blank"
              rel="noreferrer"
              className="map-link"
            >
              Open in Google Maps
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Email */}
          <div className="glass info-card">
            <Mail size={28} />
            <h3>Email</h3>
            <a href="mailto:info@belnovatech.com" className="contact-link">
              info@belnovatech.com
            </a>
          </div>

          {/* Phone */}
          <div className="glass info-card">
            <Phone size={28} />
            <h3>Phone</h3>
            <a href="tel:+917382405380" className="contact-link">
              +91 73824 05380
            </a>
          </div>

          {/* Working Hours */}
          <div className="glass info-card">
            <Clock size={28} />
            <h3>Working Hours</h3>
            <p>
              Monday - Friday
              <br />
              9:00 AM - 6:00 PM
            </p>
          </div>

          {/* Buttons */}
          <div className="contact-buttons">
            <a
              href="https://wa.me/917382405380"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              WhatsApp Us
            </a>

            <a href="mailto:info@belnovatech.com" className="meeting-btn">
              Book Meeting
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
