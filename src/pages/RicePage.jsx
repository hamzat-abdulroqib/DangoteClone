import HeroCard from "../components/HeroCard";
import fertilizerb from "../assets/fertilizerbg.jpg";
import Products from "../components/products";

function Ricepage() {
  return (
    <>
      <HeroCard
        imagebg={fertilizerb}
        heading1={"Rice Farming"}
        paragraph={"...contributing to agricultural growth"}
      />
      <section className="about-section">
        <div className="container mt-5 py-5">
          <div className="col-12 col-md-8 offset-md-2">
            <h1 className="text-primary mb-4">Dangote Rice Limited</h1>
            <p>
              Dangote Rice Limited, an affiliate company of the Dangote group is
              into, making Nigeria, self-sustainable in the Rice sector. With a
              vision to accomplish this dream, we are in the process of setting
              up rice processing facilities across the country, along with
              various models to satisfy its paddy rice needs, customized to each
              catchment’s areas situation. Our grower program through direct
              outreach, Aggregation and Agent-based models will be the
              cornerstones (60% share) and are essential for a rapid scale-up.
              Own farms will be included to increase security of supply for
              which land has already been identified in Nasarawa. Open Market
              will be used to match supply to demand. This sourcing strategy
              will create a robust supply of paddy rice, improve livelihoods of
              over 100,000 farmers, and improve food security.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ricepage;
