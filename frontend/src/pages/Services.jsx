import ServiceCard from "../components/ServiceCard";

const services = [
  {
    title: "Personal Training",
    description: "One-to-one coaching with a custom plan based on your level and goals.",
    price: "From €45 / session",
  },
  {
    title: "Strength Training",
    description: "Structured programs for muscle gain, power, and better technique.",
    price: "Included in membership",
  },
  {
    title: "Cardio Zone",
    description: "Treadmills, bikes, rowing machines, and guided endurance sessions.",
    price: "Included in membership",
  },
  {
    title: "Group Classes",
    description: "HIIT, boxing fitness, body pump, mobility, and core classes.",
    price: "From €25 / class",
  },
  {
    title: "Nutrition Coaching",
    description: "Simple nutrition guidance to support fat loss, muscle gain, or better energy.",
    price: "From €60 / plan",
  },
  {
    title: "Recovery Area",
    description: "Stretching, mobility, and recovery sessions to reduce injury risk.",
    price: "Included in premium",
  },
];

const Services = () => {
  return (
    <section className="section page-section">
      <div className="section-title">
        <p className="eyebrow">Our services</p>
        <h1>Training programs for every goal</h1>
        <p>
          Whether you want to lose weight, build muscle, improve endurance, or
          simply feel better, our gym gives you a clear path.
        </p>
      </div>

      <div className="grid-3">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
