import Nav from "./components/Nav";
import Feature from "./sections/Feature";
import Hero from "./sections/Hero";
import KeyFeature from "./sections/KeyFeature";
import LookingFor from "./sections/LookingFor";
import Offers from "./sections/Offers";
import RoadMap from "./sections/RoadMap";

export default function App() {
  return (
    <main className="relative">
      <Nav />
      <section>
        <Hero />
      </section>
      <section>
        <Feature />
      </section>
      <section>
        <KeyFeature />
      </section>
      <section>
        <LookingFor />
      </section>
      <section>
        <Offers />
      </section>
      <section>
        <RoadMap />
      </section>
    </main>
  );
}
