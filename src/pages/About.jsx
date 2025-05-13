import HeroCard from "../components/HeroCard";
import heroimage from "../assets/hero.jpg";
import dangotebg from "../assets/gpce_grey2.jpg";
import executiveData from "../components/ExecutiveData";
import ExecutiveCard from "../components/ExecutiveCard";

function About() {
  return (
    <>
      <HeroCard
        imagebg={heroimage}
        heading1={"About Dangote Industries Limited"}
        paragraph={
          "Dangote Group continues to grow its vision of becoming the leading provider of essential daily needs in Sub-Saharan Africa."
        }
      />

      <section>
        <div className="container">
          <div className="row my-5 py-5">
            <div className="col-12 col-md-8 offset-md-2 text-center">
              <p>Our Mission & Vision</p>
              <h1 className="text-primary mb-4">Nurturing a Vision</h1>
              <p>
                Dangote Group continues to grow its focus of becoming the
                leading provider of essential needs in Food and Shelter in
                Sub-Saharan Africa. Our vision is to be a world-class enterprise
                that is passionate about the quality of life of the general
                populace and high returns to stakeholders. Our mission is to
                touch the lives of people by providing their basic needs. We
                continue to sustain and improve on our market leadership in
                Cement Manufacturing, Sugar Milling, Sugar Refining, Port
                Operations, Packaging Material Production and Salt Refining.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="hero-section d-flex align-items-center text-white text-center"
        style={{
          backgroundImage: `url(${dangotebg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6"></div>
            <div className="col-12 col-md-6 col-lg-6 text-start">
              <h3>Aliko Dangote, GCON</h3>
              <h4>Group President & Chief Executive</h4>
              <hr />
              <p>
                Aliko Dangote is the founder and president/chief executive of
                the Dangote Group, the largest conglomerate in West Africa. The
                Group currently has a presence in 17 African countries and is a
                market leader in cement on the continent. One of the Group's
                subsidiaries, Dangote Cement Plc, is the largest listed company
                in West Africa and the first Nigerian company to join the Forbes
                Global 2000 Companies list.
              </p>
              <a href="#">
                <span className="btn btn-success">Read More</span>
                <span className="btn btn-primary">-</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="vision">
        <div className="container ex-container my-5 ">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="heading-e">Executive Leadership</h1>
              <p className="parapgraph-e">
                Our senior executives bring tremendous experience, visionary
                thinking and a shared commitment to excellence,
                <br /> creativity, and innovation to the day to day operation of
                the company.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              {executiveData.map((executive) => (
                <ExecutiveCard
                  key={executive.id}
                  image={executive.image}
                  name={executive.name}
                  title={executive.title}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
