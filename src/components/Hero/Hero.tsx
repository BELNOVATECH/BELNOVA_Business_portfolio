import "./Hero.css";
import{
    Sparkles,
  ArrowRight,
    BrainCircuit,
    Code2,
    Cloud,
    Database,
    ShieldCheck,
    Server,
} from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background */}

      <div className="hero-blob blob1"></div>
      <div className="hero-blob blob2"></div>
      <div className="hero-grid-bg"></div>

      <div className="hero-container">

        {/* ================= LEFT ================= */}

        <div className="hero-left">

          <div className="hero-tag">
            <Sparkles size={16} />
            BELNOVA TECHNOLOGIES
          </div>

          <h1>
            Transform Ideas
<span>Into Digital Excellence</span>
          </h1>

          <p>
            BelnovaTech helps startups and enterprises build
            AI-powered products, scalable cloud infrastructure,
            enterprise software, and dedicated engineering teams
            for modern businesses.
          </p>

          <div className="hero-buttons">

<a href="#contact" className="primary-btn">
  Let's Talk
</a>

<a href="#portfolio" className="secondary-btn">
  View Portfolio
  <ArrowRight size={18}/>
</a>

          </div>

          {/* Stats */}

          {/* <div className="hero-stats">

            <div>
              <h2>150+</h2>
              <span>Projects</span>
            </div>

            <div>
              <h2>80+</h2>
              <span>Clients</span>
            </div>

            <div>
              <h2>99%</h2>
              <span>Satisfaction</span>
            </div>

          </div> */}

        </div>

        {/* ================= RIGHT ================= */}

        <div className="hero-right">

          <div className="orbit-wrapper">

            {/* Outer Ring */}

            <div className="orbit orbit-one">

              <div className="orbit-icon top">
                <Code2/>
              </div>

              <div className="orbit-icon right">
                <Cloud/>
              </div>

              <div className="orbit-icon bottom">
                <Database />
              </div>

              <div className="orbit-icon left">
               <ShieldCheck/>
              </div>

            </div>

            {/* Second Ring */}

            <div className="orbit orbit-two">

              <div className="orbit-icon top2">
                <BrainCircuit/>
              </div>

              <div className="orbit-icon right2">
                <Server/>
              </div>

            </div>

            {/* Center */}

            <div className="core">

              <div className="core-glow"></div>

              <div className="core-card">

                <h3>Belnova</h3>

                <span>TECH CORE</span>

              </div>

            </div>

            {/* Floating Cards */}

<div className="floating-card analytics">
    <h4>AI Solutions</h4>
    <p>Machine Learning</p>
</div>

<div className="floating-card uptime">
    <h4>Cloud Native</h4>
    <p>AWS • Azure</p>
</div>

<div className="floating-card ai">
    <h4>Enterprise Apps</h4>
    <p>Web & Mobile</p>
</div>

<div className="floating-card uptime">
  <h4>Cloud Solutions</h4>
  <p>AWS • Azure • GCP</p>
</div>


            <div className="floating-card ai">

              <h4>App Development</h4>

              <p>Web • Mobile</p>

            </div>

          </div>

        </div>

      </div>

      {/* Scroll */}

      <div className="scroll-indicator">

        <span></span>

      </div>

    </section>
  );
}

export default Hero;