import "./Services.css";
import { services } from "../../data/services";
import { useState } from "react";
import {
  Cpu,
  Cloud,
  Code2,
  Globe,
  Smartphone,
  ShieldCheck,
  Users,
} from "lucide-react";

const icons = [
  <Cpu size={42} />,
  <Cloud size={42} />,
  <Code2 size={42} />,
  <Globe size={42} />,
  <Smartphone size={42} />,
  <ShieldCheck size={42} />,
  <Users size={42} />, // Outsourcing
];

function Services() {
  
  type Service = (typeof services)[number];

const [selectedService, setSelectedService] =
  useState<Service | null>(null);
  return (
    <section className="services" id="services">
      <div className="section-title">
        <span>OUR SERVICES</span>

        <h2>Technology Solutions That Drive Business Growth</h2>

        <p>
          We help organizations accelerate digital transformation through AI,
          Cloud, Enterprise Software, Mobile Apps and Modern Digital
          Experiences.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="glass-overlay"></div>

            <div className="service-icon">
              {icons[index % icons.length]}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

           <button
  className="learn-btn"
  onClick={() => setSelectedService(service)}
>
  Learn More →
</button>
          </div>
        ))}
      </div>
      {selectedService && (
  <div
    className="popup-overlay"
    onClick={() => setSelectedService(null)}
  >
    <div
      className="popup-card"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="close-btn"
        onClick={() => setSelectedService(null)}
      >
        ✕
      </button>

      <h3>{selectedService.title}</h3>

      <p>{selectedService.details}</p>
    </div>
  </div>
)}
    </section>
  );
}

export default Services;