import "./WhyChooseUs.css";

const features = [
  {
    title: "Innovation First",
    description:
      "We leverage the latest technologies to deliver future-ready solutions.",
  },
  {
    title: "Expert Team",
    description:
      "Highly skilled professionals with expertise across multiple domains.",
  },
  {
    title: "Customer Focus",
    description:
      "We prioritize client success through transparent communication and quality delivery.",
  },
  {
    title: "Scalable Solutions",
    description:
      "Our solutions are designed to grow with your business.",
  },
  {
    title: "On-Time Delivery",
    description:
      "Efficient project execution with timely delivery and continuous support.",
  },
  {
    title: "Global Standards",
    description:
      "Enterprise-grade security, quality assurance, and best development practices.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why" id="why">
      <div className="why-header">
        <span>WHY BELNOVA</span>

        <h2>Why Businesses Trust Belnova Technologies</h2>

        <p>
          We combine innovation, technology, and business expertise to help
          organizations achieve sustainable digital growth.
        </p>
      </div>

      <div className="why-grid">
        {features.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="why-icon">✓</div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;