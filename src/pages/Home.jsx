import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="highlight">MechESA</span>
          </h1>
          <p className="hero-subtitle">
            Mechanical Engineering Student Association
          </p>
          <p className="hero-description">
            Innovate. Collaborate. Excel. Join a community of passionate
            engineers building the future.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary">
              Join Our Community
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="gear gear-1"></div>
          <div className="gear gear-2"></div>
          <div className="gear gear-3"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">What We Offer</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🔧</div>
            <h3>Technical Workshops</h3>
            <p>
              Learn cutting-edge mechanical engineering concepts through
              hands-on workshops and seminars.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Competitions</h3>
            <p>
              Participate in national and international competitions to showcase
              your skills and creativity.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Networking</h3>
            <p>
              Connect with industry professionals and fellow engineers to build
              lasting relationships.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Innovation Projects</h3>
            <p>
              Work on real-world projects that make a difference in the
              mechanical engineering field.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-item">
          <h3 className="stat-number">500+</h3>
          <p className="stat-label">Active Members</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number">50+</h3>
          <p className="stat-label">Events Annually</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number">15+</h3>
          <p className="stat-label">Years of Excellence</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number">100%</h3>
          <p className="stat-label">Passion & Dedication</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Join the Engineering Revolution?</h2>
        <p>
          Be part of a community that pushes the boundaries of mechanical
          engineering.
        </p>
        <Link to="/contact" className="btn btn-primary btn-large">
          Get In Touch
        </Link>
      </section>
    </main>
  );
}
