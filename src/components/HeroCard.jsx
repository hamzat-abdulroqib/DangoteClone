function HeroCard({ imagebg, heading1, paragraph }) {
  return (
    <section
      className="hero-section d-flex align-items-center text-white text-center"
      style={{
        backgroundImage: `url(${imagebg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8">
            <h1 className="display-5 fw-bold mb-3">{heading1}</h1>
            <p className="lead">{paragraph}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroCard;
