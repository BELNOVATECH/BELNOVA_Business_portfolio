import "./HireDevelopers.css";

import {
  Code2,
  Users,
  BriefcaseBusiness,
  CheckCircle2,
  Cpu,
  Smartphone,
  Cloud,
  BrainCircuit,
  Database,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const plans = [
  {
    icon: <Code2 size={42} />,
    title: "Dedicated Developer",
    price: "$2,500",
    period: "/month",
    featured: false,
    features: [
      "Full-time dedicated resource",
      "Daily standups",
      "Weekly reports",
      "Direct communication",
      "Flexible engagement",
    ],
    button: "Hire Developer",
  },

  {
    icon: <Users size={42} />,
    title: "Team Augmentation",
    price: "$9,500",
    period: "/month",
    featured: true,
    features: [
      "3–8 Engineers",
      "Tech Lead Included",
      "Agile Sprint Planning",
      "Project Manager",
      "QA Included",
    ],
    button: "Build Team",
  },

  {
    icon: <BriefcaseBusiness size={42} />,
    title: "Project Outsourcing",
    price: "Custom",
    period: "",
    featured: false,
    features: [
      "End-to-End Delivery",
      "Architecture Design",
      "Project Management",
      "QA & Deployment",
      "Maintenance",
    ],
    button: "Let's Talk",
  },
];

const developers = [
  {
    icon: <Code2 />,
    title: "React Developer",
    level: "Frontend Expert",
  },
  {
    icon: <BrainCircuit />,
    title: "AI Engineer",
    level: "LLMs & Automation",
  },
  {
    icon: <Database />,
    title: "Backend Developer",
    level: "Node / Python",
  },
  {
    icon: <Smartphone />,
    title: "Flutter Developer",
    level: "Cross Platform",
  },
  {
    icon: <Cloud />,
    title: "Cloud Engineer",
    level: "AWS / Azure",
  },
  {
    icon: <Cpu />,
    title: "DevOps Engineer",
    level: "CI/CD",
  },
  {
    icon: <ShieldCheck />,
    title: "Cyber Security",
    level: "Security Expert",
  },
  {
    icon: <Users />,
    title: "UI/UX Designer",
    level: "Figma Expert",
  },
];

function HireDevelopers() {
  return (
    <section className="hire">

      <div className="hire-glow glow1"></div>
      <div className="hire-glow glow2"></div>

      <div className="section-title">

        <span>HIRE DEVELOPERS</span>

        <h2>Scale Your Team With World-Class Engineers</h2>

        <p>
          Hire dedicated developers, build high-performing engineering teams,
          or outsource complete software projects with Belnova.
        </p>

      </div>

      <div className="plans">

        {plans.map((plan, index) => (

          <div
            className={`plan-card ${
              plan.featured ? "featured" : ""
            }`}
            key={index}
          >

            {plan.featured && (
              <div className="popular">
                MOST POPULAR
              </div>
            )}

            <div className="plan-icon">

              {plan.icon}

            </div>

            <h3>{plan.title}</h3>

            <div className="price">

              {plan.price}

              <span>{plan.period}</span>

            </div>

            <ul>

              {plan.features.map((feature) => (

                <li key={feature}>

                  <CheckCircle2 size={18} />

                  {feature}

                </li>

              ))}

            </ul>

            <button>

              {plan.button}

              <ArrowRight size={18} />

            </button>

          </div>

        ))}

      </div>

      <div className="talent-title">

        <h2>Available Talent</h2>

      </div>

      <div className="talent-grid">

        {developers.map((dev, index) => (

          <div className="talent-card" key={index}>

            <div className="talent-icon">

              {dev.icon}

            </div>

            <h4>{dev.title}</h4>

            <p>{dev.level}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default HireDevelopers;