import "./Services.css";
import { services } from "../../data/services";

function Services() {
  return (
    <section className="services" id="services">

      <div className="section-title">

        <span>OUR SERVICES</span>

        <h2>Technology Solutions That Drive Business Growth</h2>

        <p>
          We help organizations accelerate digital transformation through
          AI, Cloud, Enterprise Software, Mobile Apps and Modern Digital
          Experiences.
        </p>

      </div>

      <div className="services-grid">

        {services.map((service, index) => (

          <div className="service-card" key={index}>

            <div className="glass-overlay"></div>

            <div className="service-icon">
              🚀
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <a href="#contact">
              Learn More →
            </a>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Services;