import React from "react";
import oil from "../assets/oil-biz.png";
import { NavLink } from "react-router-dom";

function BusinessPage() {
  return (
    <>
      <section className="hero-section d-flex align-items-center text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-6">
              <p className="fs-5 mb-0">Our Businesses</p>
              <h2 className="display-4 fw-bold mb-3">
                Providing Your Basic Needs
              </h2>
              <p className="lead">
                With our transformational projects and businesses across food,
                shelter and construction, Dangote Group continues to grow its
                vision of becoming the leading provider of essential needs in
                Africa.
              </p>
            </div>
          </div>
          <div className="text-center mt-5">
            <a href="#businesses" className="text-white">
              <i className="bi bi-chevron-down fs-1 down-arrow"></i>
            </a>
          </div>
        </div>
      </section>
      <section className="py-5" id="businesses">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-10 offset-md-1">
              <div className="row g-4">
                <div className="col-md-4">
                  <div
                    className="card business-card h-100 border-0 text-white shadow"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <img
                      src={oil}
                      className="card-img h-100"
                      alt="Cement Manufacturing"
                    />
                    <div className="card-img-overlay d-flex flex-column justify-content-center ps-5">
                      <h3 className="card-title">Cement Manufacturing</h3>
                      <NavLink
                        to="/ourproduct"
                        className="text-white text-decoration-none"
                      >
                        <span>Read More</span>
                        <i className="fas fa-arrow-right ms-2"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div
                    className="card business-card h-100 border-0 text-white shadow"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <img
                      src={oil}
                      className="card-img h-100"
                      alt="Sugar Refining"
                    />
                    <div className="card-img-overlay d-flex flex-column justify-content-center ps-5">
                      <h3 className="card-title">Salt Refining & Seasonings</h3>
                      <NavLink
                        to="/Saltpage"
                        className="text-white text-decoration-none"
                      >
                        <span>Read More</span>
                        <i className="fas fa-arrow-right ms-2"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="card business-card h-100 border-0 text-white shadow"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <img
                      src={oil}
                      className="card-img h-100"
                      alt="Sugar Refining"
                    />
                    <div className="card-img-overlay d-flex flex-column justify-content-center ps-5">
                      <h3 className="card-title">sugar Refining</h3>
                      <NavLink
                        to="/Sugarpage"
                        className="text-white text-decoration-none"
                      >
                        <span>Read More</span>
                        <i className="fas fa-arrow-right ms-2"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="card business-card h-100 border-0 text-white shadow"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <img
                      src={oil}
                      className="card-img h-100"
                      alt="Sugar Refining"
                    />
                    <div className="card-img-overlay d-flex flex-column justify-content-center ps-5">
                      <h3 className="card-title">Dangote Fertilizer</h3>
                      <NavLink
                        to="/Fertilizerpage"
                        className="text-white text-decoration-none"
                      >
                        <span>Read More</span>
                        <i className="fas fa-arrow-right ms-2"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="card business-card h-100 border-0 text-white shadow"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <img
                      src={oil}
                      className="card-img h-100"
                      alt="Sugar Refining"
                    />
                    <div className="card-img-overlay d-flex flex-column justify-content-center ps-5">
                      <h3 className="card-title">Rice-farming</h3>
                      <NavLink
                        to="/ricepage"
                        className="text-white text-decoration-none"
                      >
                        <span>Read More</span>
                        <i className="fas fa-arrow-right ms-2"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="card business-card h-100 border-0 text-white shadow"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <img
                      src={oil}
                      className="card-img h-100"
                      alt="Sugar Refining"
                    />
                    <div className="card-img-overlay d-flex flex-column justify-content-center ps-5">
                      <h3 className="card-title">Energy</h3>
                      <NavLink
                        to="/energypage"
                        className="text-white text-decoration-none"
                      >
                        <span>Read More</span>
                        <i className="fas fa-arrow-right ms-2"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="card business-card h-100 border-0 text-white shadow"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <img
                      src={oil}
                      className="card-img h-100"
                      alt="Sugar Refining"
                    />
                    <div className="card-img-overlay d-flex flex-column justify-content-center ps-5">
                      <h3 className="card-title">Refinery</h3>
                      <NavLink
                        to="/oilpage"
                        className="text-white text-decoration-none"
                      >
                        <span>Read More</span>
                        <i className="fas fa-arrow-right ms-2"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="card business-card h-100 border-0 text-white shadow"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <img
                      src={oil}
                      className="card-img h-100"
                      alt="Sugar Refining"
                    />
                    <div className="card-img-overlay d-flex flex-column justify-content-center ps-5">
                      <h3 className="card-title">Logistics</h3>
                      <NavLink
                        to="/logisticspage"
                        className="text-white text-decoration-none"
                      >
                        <span>Read More</span>
                        <i className="fas fa-arrow-right ms-2"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div
                    className="card business-card h-100 border-0 text-white shadow"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <img
                      src={oil}
                      className="card-img h-100"
                      alt="Salt & Seasonings"
                    />
                    <div className="card-img-overlay d-flex flex-column justify-content-center ps-5">
                      <h3 className="card-title">Trainnig Acadmy</h3>
                      <NavLink
                        to="/trainingpage"
                        className="text-white text-decoration-none"
                      >
                        <span>Read More</span>
                        <i className="fas fa-arrow-right ms-2"></i>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold text-primary sm-display-3">
            Key Business Facts
          </h2>
          <div className="row">
            <div className="col-sm-12 col-md-10 offset-md-1">
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="card shadow-sm h-100 border-0 text-center p-4">
                    <div className="card-body">
                      <i className="bi bi-cash-stack text-primary fs-1 mb-3"></i>
                      <h4 className="text-muted mt-3 mb-2">
                        Total Group Earnings:
                      </h4>
                      <p className="fs-3 fw-bold">$4.3 billion</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div className="card shadow-sm h-100 border-0 text-center p-4">
                    <div className="card-body">
                      <i className="bi bi-diagram-3 text-danger fs-1 mb-3"></i>
                      <h4 className="text-muted mt-5 mb-2">15 Subsidiaries</h4>
                      <p className="fs-3 fw-bold">&nbsp;</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 mb-4">
                  <div className="card shadow-sm h-100 border-0 text-center p-4">
                    <div className="card-body">
                      <i className="bi bi-building text-warning fs-1 mb-3"></i>
                      <h4 className="text-muted mt-3 mb-2">3 Public Listed</h4>
                      <p className="fs-3 fw-bold">Companies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BusinessPage;
