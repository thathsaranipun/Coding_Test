function Footer() {
  return (
    <div>
      <div className="mt-5">
        <div className="container-fluid pt-5">
          <div className="container-fluid row">
            <div className="col-lg-4 col-md-6 text-center text-md-start">
              <p className="fs-1 fw-semibold">
                Join Us In Exploring Nature's{" "}
                <span className="highlight rounded-4">Beauty And</span> Honoring
                These
              </p>
            </div>
            <div className="col-lg-4 col-md-6 mt-3 mt-md-0">
              <div className="row">
                <div className="col text-center text-md-start">
                  <p className="fw-semibold pb-3">PRODUCT</p>
                  <p>NATURE</p>
                  <p>GREEN</p>
                  <p>FRESH</p>
                </div>
                <div className="col text-center text-md-start">
                  <p className="fw-semibold pb-3">COMPANY</p>
                  <p>ABOUT</p>
                  <p>MISSION</p>
                  <p>CARRIER</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-3 mt-lg-0 text-center text-lg-end">
              <p className="fw-semibold">
                YOUR ULTIMATE DESTINATION FOR ALL THINGS FASHION. OUR MISSION IS
                TO EMPOWER YOU TO EXPRESS YOU
              </p>
              <div className="input-group border border-dark rounded-pill bg-white p-1 mt-3">
                <input
                  type="text"
                  className="form-control border-0 rounded-start-pill"
                  aria-label="content"
                  aria-describedby="basic-addon2"
                />
                <span
                  className="input-group-text rounded-pill btn btn-dark py-2 px-3"
                  id="basic-addon2"
                >
                  <small>SEND</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-dark">
        <div className="footer-section py-4 rounded-bottom-5"></div>
      </div>
      <div className="bg-dark py-4">
        <div className="container-fluid">
          <div className="container-fluid d-flex justify-content-between">
            <div className="col text-start d-none d-lg-block">
              <button
                className="btn btn-dark fw-semibold rounded-circle border"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="bi bi-discord fs-4"></i>
              </button>
              <button
                className="btn btn-dark fw-semibold rounded-circle border ms-3"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="bi bi-instagram fs-4"></i>
              </button>
              <button
                className="btn btn-dark fw-semibold rounded-circle border ms-3"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="bi bi-telegram fs-4"></i>
              </button>
            </div>
            <div className="col text-center text-light py-3">
              ©2023 Reserved
            </div>
            <div className="col text-end d-none d-lg-block">
              <button className="btn btn-dark fw-semibold rounded-pill border px-4 py-3">
                TERMS & CONDITIONS
              </button>
              <button className="btn btn-dark fw-semibold rounded-pill border px-4 py-3 ms-3">
                PRIVACY POLICY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
