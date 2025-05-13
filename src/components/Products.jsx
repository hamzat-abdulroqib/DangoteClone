function Products({
  revenue,
  revenueyear,
  heading,
  peoples,
  peoplelocstion,
  production,
  productioncapacity,
  brandshowcase,
  picture1,
  picture2,
  picture3,
  picture1p,
  picture2p,
  picture3p,
}) {
  return (
    <>
      <section className="key-figures bg-secondary-subtle py-5 my-5">
        <div className="container justify-content-center">
          <h1 className="text-center text-primary mb-5">{heading}</h1>
          <div className="row gy-4 gx-4 justify-content-center px-5 py-5">
            <div className="col-12 col-md-4">
              <div className="bg-white p-4 shadow text-center py-5">
                <h3>{revenue}</h3>
                <p>{revenueyear}</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="bg-white py-5 shadow text-center">
                <h3>{peoples}</h3>
                <p>{peoplelocstion}</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="bg-white p-4 shadow text-center py-5">
                <h3>{production}</h3>
                <p>{productioncapacity}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-showcase py-5">
        <div className="container">
          <h1 className="text-center text-primary mb-5">{brandshowcase}</h1>
          <div className="row g-3 justify-content-center text-center">
            <div className="col-12 col-md-4">
              <img
                src={picture1}
                alt="Brand 1"
                className="img-fluid cement-img"
              />
              <h3 className="text-primary mt-2">{picture1p}</h3>
            </div>
            <div className="col-12 col-md-4">
              <img
                src={picture2}
                alt="Brand 2"
                className="img-fluid cement-img"
              />
              <h3 className="text-primary mt-2">{picture2p}</h3>
            </div>
            <div className="col-12 col-md-4">
              <img
                src={picture3}
                alt="Brand 3"
                className="img-fluid cement-img"
              />
              <h3 className="text-primary mt-2">{picture3p}</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
