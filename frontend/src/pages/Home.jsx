import Wedge from "@/components/Wedge";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Feature from "../sections/Feature";
import Hero from "../sections/Hero";
import KeyFeature from "../sections/KeyFeature";
import LookingFor from "../sections/LookingFor";
import Offers from "../sections/Offers";
import RoadMap from "../sections/RoadMap";
import InfoForm from "@/components/InfoForm";


function Home() {
  return (
    <main className="relative">
      <Nav />
      <section className="z-[1]">
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
        <InfoForm />
      </section>
      <Wedge />
      <Footer />
    </main>
  )
}

export default Home