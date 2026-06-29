import "./Leadership.css";
import { team } from "../../data/team";

function Leadership() {
  return (
    <section className="leadership" id="leadership">
      <div className="section-header">
        <span>OUR LEADERSHIP</span>
        <h2>Meet Our Leadership Team</h2>
        <p>
          Our experienced leadership team is dedicated to driving innovation,
          delivering excellence, and helping businesses succeed in the digital era.
        </p>
      </div>

      <div className="team-grid">
        {team.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.image} alt={member.name} />

            <h3>{member.name}</h3>

            <h4>{member.role}</h4>

            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Profile →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Leadership;