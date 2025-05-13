import HeroCard from "../components/HeroCard";
import logisticsbg from "../assets/logisticsbg.jpg";
import Products from "../components/products";

function Logisticpage() {
  return (
    <>
      <HeroCard
        imagebg={logisticsbg}
        heading1={"Logistics"}
        paragraph={
          "A big part of manufacturing is products finding their ways into the consumer hands, the Group makes sure that this is handled end to end."
        }
      />
      <section className="about-section">
        <div className="container mt-5 py-5">
          <div className="col-12 col-md-8 offset-md-2">
            <h1 className="text-primary mb-4">Dangote Logistics</h1>
            <p>
              The biggest challenge for manufacturing is to tackle logistics and
              distribution costs, as products will have to be moved to newer
              markets from production centers. Apart from ramping up production
              capabilities across Africa by adding new greenfield projects,
              clinker grinding plants, and import terminals, we accord top
              priority to scientific logistics. Our Fleet is a fast and very
              reliable service provider to thousands of customers nationwide.
              Our finished products are delivered to our markets nationwide.
              With a professional team that has a minimum of 15 years of
              industry experience, our goal is to be the best by helping our
              customers achieve their delivery schedules and timelines.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Logisticpage;
