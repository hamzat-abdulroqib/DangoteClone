// import hero1 from "../assets/hero1.jpg";
import salt2 from "../assets/salt2.png";
import salt1 from "../assets/salt1.png";
import salt3 from "../assets/salt3.png";
import HeroCard from "../components/HeroCard";
import saltb from "../assets/saltb.jpg";
import Products from "../components/products";

function Saltpage() {
  return (
    <>
      <HeroCard
        imagebg={saltb}
        heading1={"Salt & Seasonings"}
        paragraph={
          "A member of the Dangote Group of companies, NASCON is a leading player in Salt in Nigeria with footprint throughout Nigeria with expanding market share across our categories."
        }
      />
      <section className="about-section">
        <div className="container mt-5 py-5">
          <div className="col-12 col-md-8 offset-md-2">
            <h1 className="text-primary mb-4">
              About NASCON Allied Industries Plc
            </h1>
            <p>
              Established in 1973, NASCON Allied Industries Plc (previously
              known as NASCON Plc), a registered company in Nigeria, was
              established as a salt refining establishment under the name
              National Salt Company (NASCON). The company has since evolved with
              additional business lines to include Vegetable Oil, Tomato Paste
              and Seasoning with production facilities in Lagos State (Apapa and
              Oregun), Ogun State (Ota), Rivers State (Port Harcourt).
            </p>
            <a href="#" className="btn btn-primary shadow mt-3">
              Visit site <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      <Products
        revenue="₦N80.8B"
        revenueyear="Revenues in 2023"
        heading="Key Figures"
        peoples="500"
        peoplelocstion="People employed in Africa"
        production="567,000MTA"
        productioncapacity="Production Capacity"
        brandshowcase="Brand Showcase"
        picture1={salt1}
        picture2={salt2}
        picture3={salt3}
      />
    </>
  );
}

export default Saltpage;
