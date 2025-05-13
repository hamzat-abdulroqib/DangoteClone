import HeroCard from "../components/HeroCard";
import trainingbg from "../assets/trainingbg.jpg";
import Products from "../components/products";

function Trainingpage() {
  return (
    <>
      <HeroCard
        imagebg={trainingbg}
        heading1={"Training Acadamy"}
        paragraph={
          "The Dangote Academy is a world-class training institution that is committed to developing the next generation of leaders in the manufacturing and construction sectors."
        }
      />
      <section className="about-section">
        <div className="container mt-5 py-5">
          <div className="col-12 col-md-8 offset-md-2">
            <h1 className="text-primary mb-4">About Dangote Academy</h1>
            <p>
              Our Mission at the Dangote Academy is to be the center of
              excellence for corporate leadership skills, technical training,
              and vocational skills acquisition while our vision is to provide
              the talent pipeline for the Dangote Group while filling the
              industrial skill-gap in Nigeria. Our four cornerstones for the
              Dangote Academy consist of; First, to be the umbrella organization
              for all talent development and learning initiatives for the Group.
              Second, to provide facility and platform for technical skills
              acquisition benchmarked to world-class standards. Third, to
              attract and develop high-quality talent from secondary and
              tertiary institutions through a structured process. Fourth, to
              align with the rapidly changing technologies by building long-term
              relationships with OEMs and institutions of learning. Our business
              imperative to look at the wide skill-gap between what the
              industries require and what the academic institutions offer, as a
              business, we’re expanding and growing rapidly, sourcing the right
              skills in the right number is a big challenge, this makes it
              essential that the Academy provides a talent pipeline for our
              businesses while promoting employability in Nigeria. One of the
              priorities for the Dangote Academy over the next few months is to
              build business capability by supporting the development of
              industry-related and functional knowledge through creative and
              innovative learning interventions. The role of the Academy in this
              instance is to pay specific attention to the skills required for
              senior employees to perform their current and future roles. We
              will be working in conjunction with Training partners to create a
              blended learning experience with a strong focus on e-learning,
              Coaching & Mentoring. We have several collaborations and
              partnerships, that help us achieve world-class standards in
              learning and development, we have collaborations with OEMs such as
              Haver & Boecker, FLS, Siemens, Losche, and HEMM Manufacturers.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Trainingpage;
