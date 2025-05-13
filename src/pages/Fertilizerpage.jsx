import HeroCard from "../components/HeroCard";
import fertilizerb from "../assets/fertilizerbg.jpg";
import Products from "../components/products";

function Fertilizerpage() {
  return (
    <>
      <HeroCard
        imagebg={fertilizerb}
        heading1={"Fertiliser Plant"}
        paragraph={"...contributing to agricultural growth"}
      />
      <section className="about-section">
        <div className="container mt-5 py-5">
          <div className="col-12 col-md-8 offset-md-2">
            <h1 className="text-primary mb-4">Dangote Fertiliser</h1>
            <p>
              Dangote Fertiliser Plant is Africa’s largest Granulated Urea
              Fertiliser complex. The plant occupies 500 hectares of land in
              Lekki Free Trade Zone, Lagos Nigeria. It was built at a cost of
              $2.5 Billion. With Nigeria estimated to need about 5 to 7 million
              metric tonnes per annum of fertiliser and with the current level
              of fertiliser consumption in the country which is 1.5 million
              metric tonnes, Dangote Fertiliser complex was established to
              produce 3 million metric tonnes per annum of urea fertiliser in
              phase 1. Dangote Fertiliser works with Farmer Associations,
              Corporate Farms, NPK Blenders, NGO/development partners and State
              Governments all over Nigeria, as well as governments across Africa
              and beyond who are looking for sustainable approach to improve
              soil and farm yields. The coming on stream of Dangote Fertilizer
              would surely make Africa self-sufficient in food production and a
              net exporter of food to the world.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Fertilizerpage;
