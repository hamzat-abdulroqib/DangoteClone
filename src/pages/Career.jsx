import HeroCard from "../components/HeroCard";
import careerbg from "../assets/career.png";
import OurValueData from "../components/OurValueData";
import OurvalueCard from "../components/OurvalueCard";

function Career() {
  return (
    <>
      <HeroCard
        imagebg={careerbg}
        heading1={"More than just a career"}
        paragraph={
          "Working with the Dangote Group is more than just a career; it’s meaningful work that improves the lives of millions of people."
        }
      />

      <section className="about-section">
        <div className="container mt-5 py-5">
          <div className="col-12 col-md-8 offset-md-2 text-center">
            <h5>Positioned for impact</h5>
            <h1 className=" mb-4">Why work with the Dangote Group?</h1>
            <p>
              Meeting the basic needs of people across the world is at the core
              of what we do at the Dangote Group. We are building a team
              consisting of the best minds from all over the world doing their
              best work to bring about this outcome. We have created an
              environment where staff members are valued, empowered, and can
              thrive both professionally and personally.
            </p>
          </div>
        </div>
      </section>
      <section className="our-value">
        <div className="cotainer">
          <h2 className="text-center">Our Core Values</h2>
          <div className="row py-4">
            {OurValueData.map((value, index) => {
              return (
                <OurvalueCard
                  key={index}
                  icon={value.icon}
                  title={value.tittle}
                  description={value.description}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Career;
