import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  return (
    <section className="max-container">
      <div className="flex justify-center flex-wrap gap-9">
        {services.map((service) => (
          <ServiceCard
            key={service.label}
            iconUrl={service.imgURL}
            label={service.label}
            subtext={service.subtext}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
