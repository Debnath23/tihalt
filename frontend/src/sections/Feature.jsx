import React from "react";
import FeatureCard from "../components/FeatureCard";
import { features } from "../constants/index";

function Feature() {
  return (
    <section className="md:grid md:grid-cols-2 lg:gap-16 lg:grid-cols-4 md:px-[120px] lg:px-[60px] pb-[40px] max-sm:pl-12">
      {features.map((item) => (
        <div key={item.id}>
          <FeatureCard
            img={item.img}
            title={item.title}
            content={item.content}
          />
        </div>
      ))}
    </section>
  );
}

export default Feature;
