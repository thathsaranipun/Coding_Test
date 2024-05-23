function BodySection3() {
  return (
    <>
      <div className="row d-flex justify-content-between mt-5 pt-5">
        <div className="col-lg-5">
          <div className="rounded-4" style={{ margin: "auto" }}>
            <div className="body-section-image">
              <img
                className="img-fluid w-100 rounded-4"
                src="body-section-3-img.png"
                alt=""
              />
              <button className="btn btn-sm btn-light px-3 button1 rounded-pill">
                Learn More
              </button>
              <button className="btn rounded-circle corner-button">
                <i className="bi bi-arrow-up-right"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-5 mt-lg-0">
          <p>
            <small>
              {" "}
              <span
                className="me-3 px-2 rounded-pill"
                style={{
                  background: "linear-gradient(to right, #ffe9dc, #c6e1db)",
                }}
              >
                NEW
              </span>
              Get Tips On How To Live More Sustainably And Contribute To Nature Conservation.
            </small>
          </p>
          <p className="fs-1 fw-semibold">
            Get Tips On How To Live More Sustainably And Contribute <br />
            To <span className="highlight rounded-4">Nature Conse</span>rvation.
          </p>
        </div>
      </div>

      <div className="row d-flex justify-content-between mt-4 align-items-center">
        <div className="col-lg-5">
          <div className="row">
            <div className="col-6  d-flex align-items-stretch">
              <div className="card rounded-4 px-2" style={{ width: "100%" }}>
                <div className="card-body">
                  <i className="bi bi-record-circle-fill text-secondary"></i>
                  <p className="card-text mt-3 fw-semibold">
                    SUSTAINABLE LIVING MESSAGES NATURE
                  </p>
                  <button className="btn ps-0">
                    Learn More <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-6  d-flex align-items-stretch">
              <div className="card rounded-4 px-2 " style={{ width: "100%" }}>
                <div className="card-body">
                  <i className="bi bi-record-circle-fill text-secondary"></i>
                  <p className="card-text mt-3 fw-semibold">
                    DEEP EXPLORATION OF NATURE
                  </p>
                  <button className="btn ps-0">
                    Learn More <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row d-flex mt-5 mt-lg-0">
            <div className="col-sm-4">
              <div className="d-flex">
                <div className="card-img">
                  <img
                    className="img-fluid w-100 rounded-4"
                    src="tree.jpg"
                    alt=""
                  />
                  <button className="btn btn-sm btn-light px-3 button1 rounded-pill">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-9 mt-3 mt-sm-0">
              <p className="text-secondary">
                WE WILL HELP YOU REDUCE YOUR ENVIRONMENTAL FOOTPRINT.
              </p>
              <button className="btn round-btn1 rounded-circle mt-2">
                <i className="bi bi-arrow-up-right"></i>
              </button>
            </div>
            <div className="col-sm-2 col-3 mt-3 mt-sm-0 d-flex justify-content-end">
              <div>
                <button className="btn btn-light rounded-circle border d-block">
                  <i className="bi bi-caret-right fs-3"></i>
                </button>
                <button className="btn btn-light rounded-circle border d-block mt-2">
                  <i className="bi bi-caret-left fs-3"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BodySection3;
