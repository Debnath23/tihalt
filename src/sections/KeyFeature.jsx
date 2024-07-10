import KeyFeatureCard from "../components/KeyFeatureCard";
import { keyFeatures } from "../constants";

export default function KeyFeature() {
  return (
    <>
    <section className="bgKeyFeature md:px-[120px] pt-12 gap-8">
      <div className="flex items-center gap-4 text-white pb-[70px] font-medium text-[14px] font-montserrat pl-6">
        <p>KEY FEATURES</p>
        <hr className="w-8" />
      </div>
      <div  className="md:flex md:flex-wrap">
        {keyFeatures.map((item) => (
          <div key={item.id} className="mb-10">
            <KeyFeatureCard
              img={item.img}
              title={item.title}
              content={item.content}
            />
          </div>
        ))}
      </div>
    </section>
    <hr />
    </>
  );
}
