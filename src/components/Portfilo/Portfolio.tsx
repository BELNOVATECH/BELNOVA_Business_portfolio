import "./Portfolio.css";
import { Check } from "lucide-react";

const projects = [
  {
    badge: "Enterprise Application",
    title: "HRMS",
    subtitle: "Human Resource Management System",

    description:
      "Complete HR management solution designed to streamline employee onboarding, attendance, payroll, leave management, recruitment and performance evaluation for organizations.",

    tech: [
      "React",
      "Python",
      "SQL Server",
      "REST APIs",
    ],

    features: [
      "Employee Management",
      "Attendance & Leave",
      "Payroll Automation",
      "Performance Tracking",
    ],
  },

  {
    badge: "Financial Services",
    title: "Lakshmandeep",
    subtitle: "Financial Services Platform",

    description:
      "Modern financial management platform developed for customer onboarding, loan processing, transaction management, document verification and financial reporting.",

    tech: [
      "React",
      "Python",
      "SQL Server",
      "Azure",
    ],

    features: [
      "Loan Management",
      "EMI Tracking",
      "Customer Profiles",
      "Financial Reports",
    ],
  },

  {
    badge: "Healthcare",
    title: "HIMS",
    subtitle: "Hospital Information Management System",

    description:
      "Comprehensive healthcare platform that simplifies patient registration, appointments, pharmacy, billing, laboratory management and electronic medical records.",

    tech: [
      "React",
      ".NET",
      "SQL Server",
      "Docker",
    ],

    features: [
      "Patient Records",
      "Appointment Scheduling",
      "Pharmacy Management",
      "Billing & Reports",
    ],
  },

  {
    badge: "Transportation",
    title: "JustRide",
    subtitle: "Vehicle Rental Platform",

    description:
      "Smart vehicle booking platform supporting online reservations, GPS-enabled tracking, secure payments and customer management for rental businesses.",

    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Google Maps",
    ],

    features: [
      "Vehicle Booking",
      "GPS Tracking",
      "Secure Payments",
      "Booking History",
    ],
  },

  {
    badge: "Enterprise Finance",
    title: "INRFS",
    subtitle: "Integrated Network Resource & Finance System",

    description:
      "Enterprise-grade financial resource management platform built to streamline fund tracking, transaction management, reporting and financial analytics.",

    tech: [
      "React",
      "Python",
      "SQL Server",
      "REST APIs",
    ],

    features: [
      "Financial Dashboards",
      "Advanced Reporting",
      "Banking API Integration",
      "Fund Tracking",
    ],
  },

  {
    badge: "Retail & Fashion",
    title: "Kapri House",
    subtitle: "Fashion & Clothing Store Platform",

    description:
      "Modern clothing store solution featuring inventory management, online shopping, secure checkout, order tracking and customer engagement.",

    tech: [
      "React",
      ".NET",
      "MongoDB",
      "Stripe",
    ],

    features: [
      "Inventory Management",
      "Online Orders",
      "Secure Payments",
      "Order Tracking",
    ],
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">

      <div className="section-title">

        <span>OUR PORTFOLIO</span>

        <h2>Projects That Create Business Impact</h2>

        <p>
          We build enterprise-grade software solutions across finance,
          healthcare, retail, transportation and HR that help businesses
          scale with confidence.
        </p>

      </div>

      <div className="portfolio-grid">

        {projects.map((project, index) => (

          <div
            className="project-card"
            key={index}
          >

            <div className="project-badge">

              {project.badge}

            </div>

            <h3>

              {project.title}

            </h3>

            <h5>

              {project.subtitle}

            </h5>

            <p className="project-description">

              {project.description}

            </p>

            <div className="tech-stack">

              {project.tech.map((item) => (

                <span key={item}>

                  {item}

                </span>

              ))}

            </div>

            <div className="feature-list">

              {project.features.map((feature) => (

                <div
                  className="feature"
                  key={feature}
                >

                  <Check
                    size={18}
                    strokeWidth={2.5}
                  />

                  <span>

                    {feature}

                  </span>

                </div>

              ))}

            </div>

            {/* <div className="project-footer">

              <button>

                View Project

                <ArrowUpRight size={18} />

              </button>

            </div> */}

          </div>

        ))}

      </div>

    </section>
  );
}