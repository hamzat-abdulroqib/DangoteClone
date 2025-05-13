// import hero1 from "../assets/hero1.jpg";
import sugar2 from "../assets/sugar2.png";
import sugar1 from "../assets/sugar1.png";
import sugar3 from "../assets/sugar3.png";
import HeroCard from "../components/HeroCard";
import sugarb from "../assets/sugarb.jpg";
import Products from "../components/products";

function Saltpage() {
  return (
    <>
      <HeroCard
        imagebg={sugarb}
        heading1={"Sugar Refining"}
        paragraph={
          "Dangote Sugar is committed to becoming an integrated sugar business, serving local and export markets from integrated sugarcane plantations and factories across Nigeria."
        }
      />
      <section className="about-section">
        <div className="container mt-5 py-5">
          <div className="col-12 col-md-8 offset-md-2">
            <h1 className="text-primary mb-4">About Dangote Sugar Refinery</h1>
            <p>
              Dangote Sugar Refinery Plc (“Dangote Sugar” or “DSR”) is a
              household name in the sugar refining sector of the Nigerian Food
              and Beverage Industry. Our entry into the sugar business is dated
              back to the 1970s with the import and sale of sugar by our parent
              company, Dangote Industries Limited.
            </p>
            <a href="#" className="btn btn-primary shadow mt-3">
              Visit site <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      <Products
        revenue="N150B"
        revenueyear="Revenues in 2018"
        heading="Key Figures"
        peoples="10,000"
        peoplelocstion="People employed in Nigeria"
        production="1.44 MTPA"
        productioncapacity="Production Capacity"
        brandshowcase="Brand Showcase"
        picture1={sugar1}
        picture2={sugar2}
        picture3={sugar3}
      />
    </>
  );
}

export default Saltpage;
