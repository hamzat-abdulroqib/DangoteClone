import HeroCard from "../components/HeroCard";
import energybg from "../assets/energybg.jpg";
import Products from "../components/products";

function Energypage() {
  return (
    <>
      <HeroCard
        imagebg={energybg}
        heading1={"Energy"}
        paragraph={
          "Due to the nature of the manufacturing the Group undertakes, ensuring constant energy supply is the topmost priority"
        }
      />
      <section className="about-section">
        <div className="container mt-5 py-5">
          <div className="col-12 col-md-8 offset-md-2">
            <h1 className="text-primary mb-4">Captive Power Generation</h1>
            <p>
              A constant power supply is a key input and a major cost in the
              manufacturing process. We make sure that operational performance
              is crucial to our cement plant's overall productivity, directly
              affecting end products. Dangote Cement recently signed an
              agreement to deploy GE's Asset Performance Management (APM)
              digital solution to reduce unplanned downtime and enhance
              performance at its two cement plants in Obajana and Ibese,
              Nigeria. The project includes extending the current service
              agreement for an additional 50,000 operating hours for the seven
              GE LM6000PC aero-derivative gas turbines installed at the sites.
              GE’s total plant solutions will improve efficiency, reliability
              essential to continuous operations and the plants’ business
              strategy. The Group provides captive power supply to all of its
              cement plants in Nigeria and Pan Africa, the power generation has
              capacities to supply energy to neighboring cities, town, and
              states.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Energypage;
