import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row text-start">
            <div className="col-md-3 mb-4">
              <h6 className="fw-bold">COMPANY</h6>
              <ul className="list-unstyled">
                <li>
                  <NavLink to="about">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="business">Our Businesses</NavLink>
                </li>
                <li>
                  <NavLink to="page">Blog</NavLink>
                </li>

                <li>
                  <NavLink to="contact">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to="career">Career</NavLink>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-4">
              <h6 className="fw-bold">BUSINESSES</h6>
              <ul className="list-unstyled">
                <li>
                  <NavLink to="/ourproduct">Cement Manufacturing</NavLink>
                </li>
                <li>
                  <NavLink to="/Sugarpage">Sugar Refining</NavLink>
                </li>
                <li>
                  <NavLink to="/Saltpage">Salt Refining & Seasonings</NavLink>
                </li>
                <li>
                  <NavLink to="/Fertilizerpage">Dangote Fertilizer</NavLink>
                </li>
                <li>
                  <NavLink to="/oilpage">Dangote Oil Refinery</NavLink>
                </li>
                <li>
                  <NavLink to="/business">View all Businesses</NavLink>
                </li>
              </ul>
            </div>

            <div className="col-md-3 mb-4">
              <h6 className="fw-bold">GENERAL INQUIRIES</h6>
              <p className="t">Call: +234 1 448 0816</p>
              <p className="t">Fax: +234 1 271 2231</p>
              <p className="t">Email: communications@dangote</p>
              <div>
                <span className="social-icon">
                  <i className="bi bi-facebook"></i>
                </span>
                <span className="social-icon">
                  <i className="bi bi-twitter"></i>
                </span>
                <span className="social-icon">
                  <i className="bi bi-instagram"></i>
                </span>
              </div>
            </div>

            <div className="col-md-3 mb-4">
              <h6 className="fw-bold">NEWSLETTER</h6>
              <p className="t">Join our weekly mailing list</p>
              <form className="d-flex">
                <input
                  type="email"
                  className="form-control me-2"
                  placeholder="Your email"
                />
                <button className="btn btn-danger" type="submit">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>

          <div className="bottom-border"></div>

          <div className="d-md-flex justify-content-between text-center text-md-start copy-right">
            <div>© 2025 Dangote Industries Limited.</div>
            <div>
              <a href="#" className="me-3">
                Terms Of Use.
              </a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
