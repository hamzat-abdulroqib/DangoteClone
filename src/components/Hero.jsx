import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.jpg";

function Hero() {
  return (
    <>
      <div>
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={hero1} className="d-block h-100 w-100" alt="" />
              <div className="carousel-caption d-none d-md-block caro-flex">
                <h2>An Empowered Africa</h2>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
                <a
                  href="#"
                  className="btn btn-link text-white text-decoration-none"
                >
                  Learn More →
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img src={hero2} className="d-block h-100 w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block caro-flex">
                <h3>SUSTAINABILITY</h3>
                <h2>The Dangote Way</h2>
                <p>
                  Dangote Group is all about creating ventures that serve the
                  interest of stakeholders, communities, and the people
                  concerned. We believe in establishing impactful businesses
                  that are socially responsible to cater to people’s needs.
                </p>
                <a
                  href="#"
                  className="btn btn-link text-white text-decoration-none"
                >
                  Learn More →
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img src={hero3} className="d-block h-100 w-100" alt="" />
              <div className="carousel-caption d-none d-md-block caro-flex">
                <h3>Aliko Dangote Foundation</h3>
                <h2>Touching Lives</h2>
                <p>
                  Through interventions in healthcare, education, economic
                  empowerment, and disaster relief, we are impacting the lives
                  of millions of people across Africa.
                </p>
                <a
                  href="#"
                  className="btn btn-link text-white text-decoration-none"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
