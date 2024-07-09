import Nav from "./components/Nav";
import Feature from "./sections/Feature";
import Hero from "./sections/Hero";
import KeyFeature from "./sections/KeyFeature";

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
    </main>
  );
}
