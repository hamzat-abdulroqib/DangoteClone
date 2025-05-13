import bs from "../assets/bs-2.webp";
import bs2 from "../assets/bs-3.webp";
import bs3 from "../assets/fert.webp";

function BusinessSection() {
  return (
    <>
      <div className="container mx-auto">
        <div className="text-primary text-center mt-5 mb-4">
          <h1 className="fw-bold display-4">Our Business</h1>
          <p className="mx-auto w-75">
            As a diversified conglomerate, our interest in multiple industries
            indicates our determination to <br />
            cater to our vision of providing basic needs.
          </p>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-10 offset-md-1">
            <div className="row row-grid">
              <div className="col-md-4">
                <div className="bussiness-card">
                  <div className="bussiness-image">
                    <img src={bs} className="d-block w-100 rounded" alt="" />
                  </div>
                  <h1 className="business-heading">cement Manufacturing</h1>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="bussiness-card">
                  <div className="bussiness-image">
                    <img src={bs} className="d-block w-100 rounded" alt="" />
                  </div>
                  <h1 className="business-heading">Sugar Refining</h1>
                </div>
              </div>
              <div className="col-md-4">
                <div className="bussiness-card">
                  <div className="bussiness-image">
                    <img src={bs} className="d-block w-100 rounded" alt="" />
                  </div>
                  <h1 className="business-heading">Salt Refining</h1>
                </div>
              </div>
            </div>
            <div className="row row-grid">
              <div className="col-md-4 mb-4">
                <div className="bussiness-card">
                  <div className="bussiness-image">
                    <img src={bs2} className="d-block w-100 rounded" alt="" />
                  </div>
                  <h1 className="business-heading">oil Refining</h1>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="bussiness-card">
                  <div className="bussiness-image">
                    <img
                      src={bs3}
                      className="d-block w-100 h-100 rounded"
                      alt=""
                    />
                  </div>
                  <h1 className="business-heading">Packkaging</h1>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div>
                  <div className="bussiness-card">
                    <img src={bs3} className="d-block w-100 rounded" alt="" />
                  </div>
                  <h1 className="business-heading">Fertlizer</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BusinessSection;
