import "./About.css";
import priyanka from "../../assets/priyanka.jpg";
import bala from "../../assets/bala.jpg";
import raju from "../../assets/raju.jpg";
import dhanusha from "../../assets/dhanusha.jpg";
import rajasekhar from "../../assets/rajasekhar.jpg";
// import {
//   Mail
// } from "lucide-react";
// import { FaLinkedinIn } from "react-icons/fa6";
const leaders = [
  {
    name: "Bala Ramesh Kollu ",
    role: "Director",
    image: bala,
    description:
      "Leads the company's vision, strategy and long-term business growth while building strong global partnerships.",
  },

  {
    name: "Anaparthi Raju Moode",
    role: "Director",
    image: raju,
    description:
      "Oversees operations, innovation and customer success to ensure exceptional service delivery.",
  },

  {
    name: "Jayanth kundeti",
    role: "Chief Technology Officer",
    image:
      "https://randomuser.me/api/portraits/men/51.jpg",
    description:
      "Architects scalable cloud platforms, AI products and enterprise software solutions.",
  },

  {
    name: "Raja Shekhar Maddi",
    role: "Development Lead",
    image: rajasekhar,
    description:
      "Manages engineering teams delivering modern web, mobile and enterprise applications.",
  },

  {
    name: "Priyanka Batchu",
    role: "HR Lead",
    image: priyanka,
    description:
      "Builds high-performing teams, promotes company culture and drives employee engagement.",
  },

  {
    name: "Dhanusha nimmgadda",
    role: "Database Lead",
    image: dhanusha,
    description:
      "Designs secure, optimized and high-performance database architectures for enterprise systems.",
  },
];

function Leadership() {
  return (
      <section id="about" className="leadership-section">

      <div className="leadership-title">

        <span>OUR LEADERSHIP</span>

        <h2>
          Meet The Experts Behind
          <span> Belnova</span>
        </h2>

        <p>
          Our experienced leadership team combines innovation,
          engineering excellence and strategic thinking to deliver
          world-class technology solutions.
        </p>

      </div>

      <div className="leadership-grid">

        {leaders.map((leader) => (

<div className="leader-card" key={leader.name}>
  <div className="leader-image">
    <img
      src={leader.image}
      alt={leader.name}
    />
  </div>

  <div className="leader-info">
    <h3>{leader.name}</h3>
    <span>{leader.role}</span>
    <p>{leader.description}</p>
  </div>
</div>

        ))}

      </div>

    </section>
  );
}

export default Leadership;