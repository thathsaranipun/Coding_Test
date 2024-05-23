function BodySection2() {
  return (
    <>
      <div className="row d-flex justify-content-between mt-5 pt-5">
        <div className="col-lg-5">
          <div className="row">
            <div className="col-2">
              <img
                className="img-fluid rounded-circle"
                src="avatar6.jpg"
                alt=""
                style={{ width: "75px" }}
              />
            </div>
            <div className="col-7">
              <span className="fw-semibold fs-3">Danang Karbu</span>
              <br />
              <span className="fw-semibold">Dewan Ambalaan</span>
            </div>
            <div className="col-3 d-flex justify-content-end">
              <div className="avatar-img-section-2">
                <img
                  className="img-fluid rounded-circle"
                  src="avatar2.jpg"
                  alt=""
                />
                <img
                  className="img-fluid rounded-circle"
                  src="avatar7.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div
            className="row mt-5 bg-dark rounded-4 p-4"
            style={{ margin: "auto" }}
          >
            <p className="fs-1 fw-semibold">
              <span className="text-secondary">
                They Will Share
                <br /> Inspiring
              </span>{" "}
              <span className="text-white">Stories And Spectacular</span>
            </p>
            <div className="d-flex text-white mt-4">
              <div className="col-6">
                <i className="bi bi-globe"></i>
              </div>
              <div className="col-6">
                <p>LOREM IPSUM DOLOR SIT AMET CONSECTETUR.</p>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-2">
              <img
                className="img-fluid rounded-circle"
                src="avatar4.jpg"
                alt=""
                style={{ width: "45px" }}
              />
            </div>
            <div className="col-4">
              <span className="fw-semibold">THE NATURE</span>
              <br />
              <small className="text-secondary">22/06/2016</small>
            </div>
            <div className="col-4 py-2">
              <small className="fw-semibold">More Sustainbly</small>
            </div>
            <div className="col-2 text-end py-2">
              <i className="bi bi-arrow-up-right"></i>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-2">
              <img
                className="img-fluid rounded-circle"
                src="avatar5.jpg"
                alt=""
                style={{ width: "45px" }}
              />
            </div>
            <div className="col-4">
              <span className="fw-semibold">TIM SAR</span>
              <br />
              <small className="text-secondary">16/02/2004</small>
            </div>
            <div className="col-4 py-2">
              <small className="fw-semibold">You Can Contribute</small>
            </div>
            <div className="col-2 text-end py-2">
              <i className="bi bi-arrow-up-right"></i>
            </div>
          </div>
        </div>

        <div className="col-lg-7 mt-5 mt-lg-0">
          <div className="body-section-image">
            <img
              className="img-fluid w-100 rounded-4"
              src="body-section-2-img.png"
              alt=""
            />
            <button className="btn rounded-circle corner-button">
              <i className="bi bi-arrow-up-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BodySection2;
