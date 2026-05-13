import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Strength • Fitness • Discipline</p>
          <h1>Build your strongest version with IronCore Gym.</h1>
          <p>
            Join a modern training space designed for beginners, athletes, and
            everyone ready to improve their health, confidence, and discipline.
          </p>
          <div className="hero-buttons">
            <Link to="/signup" className="btn btn-primary">
              Start today
            </Link>
            <Link to="/services" className="btn btn-outline light">
              View services
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <p className="eyebrow">Why choose us</p>
          <h2>A gym that supports real progress</h2>
        </div>

        <div className="grid-3">
          <div className="card">
            <h3>Expert coaches</h3>
            <p>Get guidance from professional trainers who help you train safely and effectively.</p>
          </div>
          <div className="card">
            <h3>Modern equipment</h3>
            <p>Use high-quality machines, free weights, and functional training areas.</p>
          </div>
          <div className="card">
            <h3>Flexible programs</h3>
            <p>Choose personal training, group classes, strength plans, or cardio sessions.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
