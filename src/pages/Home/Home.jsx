import "./Home.scss";

import features from "../../data/features";
import Hero from "../../components/Home/Hero/Hero";

import hero400 from "../../assets/images/hero-400.webp";
import hero800 from "../../assets/images/hero-800.webp";
import hero1200 from "../../assets/images/hero-1200.webp";
import hero1600 from "../../assets/images/hero-1600.webp";
import ItemList from "../../components/ItemList/ItemList";
import Feature from "../../components/Home/Feature/Feature";

function Home() {
  return (
    <>
      <Hero
        src={hero1200}
        srcSet={`${hero400} 400w, ${hero800} 800w, ${hero1200} 1200w, ${hero1600} 1600w`}
        width={1200}
        height={800}
        alt="Une petite plante pousse dans un verre rempli de pièces de monnaie, symbolisant la croissance financière"
        title="Promoted Content"
        subtitles={["No fees.", "No minimum deposit.", "High interest rates."]}
        text="Open a savings account with Argent Bank today!"
      />
      <section className="features">
        <ItemList items={features} Component={Feature} />
      </section>
    </>
  );
}

export default Home;
