import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" style={{ color: "black" }}>
              <img
                style={{ opacity: 0.5 }}
                src="https://img.wallpapersafari.com/desktop/1920/1080/71/14/vywrYD.png"
                className="d-block w-100"
                alt="..."
              />
              <div
                className="carousel-caption d-none d-md-block"
                style={{ color: "black" }}
              >
                <h5>Khabarnama - the voice beneath</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                style={{ opacity: 0.5 }}
                src="https://img.wallpapersafari.com/desktop/1920/1080/90/48/tGRZw4.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div
                className="carousel-caption d-none d-md-block"
                style={{ color: "black" }}
              >
                <h5>Established in 1858</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nemo.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                style={{ opacity: 0.5 }}
                src="https://img.wallpapersafari.com/desktop/1600/900/34/57/NJxMA9.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>
                  For queries related to sponserships, contact to below numbers.
                </h5>
                <p>
                  Lorem ipsum dolor sit amet.
                  <br />
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}

export default About;
