import "./About.css";
import {
  Rocket,
  Target,
  Eye,
  Users,
  Globe,
  Award,
  ArrowRight,
} from "lucide-react";

const leaders = [
  {
    name: "Rahul Sharma",
    role: "CEO & Founder",
    image: "/team/ceo.jpg",
  },
  {
    name: "Arjun Patel",
    role: "Chief Technology Officer",
    image: "/team/cto.jpg",
  },
  {
    name: "Priya Menon",
    role: "Head of Design",
    image: "/team/design.jpg",
  },
];

const stats = [
  {
    number: "150+",
    title: "Projects Delivered",
  },
  {
    number: "80+",
    title: "Global Clients",
  },
  {
    number: "12+",
    title: "Countries Served",
  },
  {
    number: "98%",
    title: "Client Satisfaction",
  },
];

function About() {
  return (
    <section className="about" id="about">

      <div className="about-glow glow-one"></div>
      <div className="about-glow glow-two"></div>

      <div className="section-title">

        <span>ABOUT BELNOVA</span>

        <h2>
          Building The Future Through
          <span> Technology</span>
        </h2>

        <p>
          Belnova Technologies empowers businesses with
          innovative software engineering, AI solutions,
          cloud infrastructure, and digital transformation
          services that drive measurable growth.
        </p>

      </div>

      <div className="about-grid">

        <div className="story-card glass">

          <div className="icon-box">
            <Rocket size={34} />
          </div>

          <h3>Our Story</h3>

          <p>
            Founded with the vision of helping businesses
            innovate faster, Belnova has grown into a trusted
            software engineering partner serving startups,
            SMEs, and enterprises worldwide.
          </p>

          <p>
            Our multidisciplinary team specializes in
            AI, Cloud, Mobile Apps, Enterprise Platforms,
            UI/UX, and Digital Product Engineering.
          </p>

          <a href="#portfolio">
            View Our Work
            <ArrowRight size={18} />
          </a>

        </div>

        <div className="mission-area">

          <div className="glass mission-card">

            <div className="icon-box">
              <Target size={30} />
            </div>

            <h3>Our Mission</h3>

            <p>
              Deliver world-class software solutions that
              enable organizations to innovate faster,
              reduce costs, and create long-term business value.
            </p>

          </div>

          <div className="glass vision-card">

            <div className="icon-box purple">
              <Eye size={30} />
            </div>

            <h3>Our Vision</h3>

            <p>
              Become one of the world's most trusted
              technology partners by combining innovation,
              engineering excellence, and customer success.
            </p>

          </div>

        </div>

      </div>

      <div className="stats-grid">

        {stats.map((item) => (

          <div className="stat-card" key={item.title}>

            <h3>{item.number}</h3>

            <p>{item.title}</p>

          </div>

        ))}

      </div>

      <div className="leadership">

        <h2>Leadership Team</h2>

        <div className="leaders-grid">

          {leaders.map((leader) => (

            <div className="leader-card glass" key={leader.name}>

              <div className="leader-image">

                <img
                  src={leader.image}
                  alt={leader.name}
                />

              </div>

              <div className="leader-content">

                <h3>{leader.name}</h3>

                <span>{leader.role}</span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default About;