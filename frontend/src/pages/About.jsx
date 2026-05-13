const About = () => {
  return (
    <section className="section page-section">
      <div className="about-layout">
        <div>
          <p className="eyebrow">About us</p>
          <h1>We help people train with structure, confidence, and discipline.</h1>
          <p>
            IronCore Gym was created for people who want more than a room full of
            machines. Our mission is to create a supportive environment where every
            member knows what to do, how to progress, and how to stay consistent.
          </p>
          <p>
            We combine modern equipment, professional coaching, and flexible plans
            to make fitness accessible for different levels and lifestyles.
          </p>
        </div>

        <div className="card about-card">
          <h2>Our values</h2>
          <ul>
            <li>Respect every member's starting point.</li>
            <li>Train with safe and correct technique.</li>
            <li>Focus on long-term progress, not quick promises.</li>
            <li>Build a strong and positive community.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
