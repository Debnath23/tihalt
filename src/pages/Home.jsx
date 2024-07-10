import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Feature from "../sections/Feature";
import Hero from "../sections/Hero";
import Info from "../sections/Info";
import KeyFeature from "../sections/KeyFeature";
import LookingFor from "../sections/LookingFor";
import Offers from "../sections/Offers";
import RoadMap from "../sections/RoadMap";


function Home() {
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
      {/* <section>
        <RoadMap />
      </section> */}
      <section>
        <Info />
      </section>
      <Footer />
    </main>
  )
}

export default Home