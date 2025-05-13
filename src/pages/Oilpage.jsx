import HeroCard from "../components/HeroCard";
import oilbg from "../assets/oilbg.jpg";
import Products from "../components/products";

function Oilpage() {
  return (
    <>
      <HeroCard
        imagebg={oilbg}
        heading1={"Petroleum Refinery"}
        paragraph={
          "The Dangote Petroleum Refinery is covering a land area of approximately 2,635 hectares, which is about the six times the size of Victoria Island"
        }
      />
      <section className="about-section">
        <div className="container mt-5 py-5">
          <div className="col-12 col-md-8 offset-md-2">
            <h1 className="text-primary mb-4">
              The Dangote Petroleum Refinery
            </h1>
            <p>
              Dangote Petroleum Refinery and Petrochemicals is a 650,000 barrels
              per day (BPD) integrated refinery located in the Lekki Free Zone
              of Ibeju Lekki Lagos, Nigeria. It is Africa’s biggest oil refinery
              and the world’s biggest single-train facility. The Pipeline
              Infrastructure at the Dangote Petroleum Refinery is the largest
              anywhere in the world, with 1,100 kilometers to handle 3 Billion
              Standard Cubic Foot of gas per day. The Refinery alone has a 435MW
              Power Plant that can meet the total power requirement of Ibadan
              DisCo. The Refinery will meet 100% of the Nigerian requirement of
              all refined products and also have a surplus of each of these
              products for export. Dangote Petroleum Refinery is a
              multi-billion-dollar project that will create a market for $21
              Billion per annum of Nigerian Crude. It is designed to process
              Nigerian crude with the ability to also process other crudes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Oilpage;
