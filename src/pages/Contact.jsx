import React, { useState } from "react";
import bgimage from "../assets/hero1.jpg";
import HeroCard from "../components/HeroCard";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const formsubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for submitting the form \n
        Your Name: ${data.fullname} \n
        Your Phone Number: ${data.phone} \n
        Your Email: ${data.email} \n
        Your Message: \n ${data.message}
    `);
  };

  return (
    <>
      <HeroCard
        imagebg={bgimage}
        heading1={"Contact Us"}
        paragraph={"Contact us for any queries or feedback."}
      />
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container container-div" id="contact">
        <div className="row mb-5">
          <div className="col-md-6 col-12 mx-auto">
            <img src={bgimage} alt="home-image" className="img-fluid h-100" />
          </div>
          <div className="col-md-6 col-12 vborder1 border-lg-2 mx-auto">
            <form onSubmit={formsubmit}>
              <div className="mb-3">
                <label htmlFor="fullname" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="fullname"
                  value={data.fullname}
                  onChange={handleInputChange}
                  id="fullname"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  value={data.phone}
                  onChange={handleInputChange}
                  id="phone"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={data.email}
                  onChange={handleInputChange}
                  id="email"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  value={data.message}
                  onChange={handleInputChange}
                  id="message"
                  rows="3"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="col-12 mb-5">
                <button type="submit" className="btn btn-danger">
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
