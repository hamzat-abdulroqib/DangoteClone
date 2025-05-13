// import hero1 from "../assets/hero1.jpg";
import cement from "../assets/cement-bg1-1.png";
import cement3 from "../assets/cement-bg3.png";
import HeroCard from "../components/HeroCard";
import cementb from "../assets/cement-bg.jpg";
import Products from "../components/products";

function Ourproduct() {
  return (
    <>
      <HeroCard
        imagebg={cementb}
        heading1={"Dangote Cement"}
        paragraph={
          "Africas leading cement producer with existing operations in over 10 African countries."
        }
      />
      <section className="about-section">
        <div className="container mt-5 py-5">
          <div className="col-12 col-md-8 offset-md-2">
            <h1 className="text-primary mb-4">About Dangote Cement PLC</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eaque
              non in nesciunt assumenda voluptas totam voluptate similique
              itaque fugit id sapiente maiores, suscipit delectus consequatur.
            </p>
            <a href="#" className="btn btn-primary shadow mt-3">
              Visit site <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>

      <Products
        revenue="₦1,305.6B"
        revenueyear="2021"
        heading="Dangote Cement"
        peoples="24,000"
        peoplelocstion="People Employed in Africa"
        production="51.6 MTPA"
        productioncapacity="Production Capacity"
        brandshowcase="Brand Showcase"
        picture1={cement}
        picture2={cement}
        picture3={cement3}
        picture1p="32.5R"
        picture2p="32.5R"
        picture3p="32.5R"
      />
    </>
  );
}

export default Ourproduct;
