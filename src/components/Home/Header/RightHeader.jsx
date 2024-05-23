function RightHeader() {
  return (
    <>
        <div
          className="d-flex align-items-center mt-5 mt-md-0"
          style={{ height: "100%" }}
        >
          <div className="main-image">
            <img
              className="img-fluid w-100 rounded-4"
              src="header-main-img.svg"
              alt=""
            />
            <button className="btn rounded-circle corner-button">
              <i className="bi bi-arrow-up-right"></i>
            </button>
            <div className="left-card">
              <div>
                <img src="header-second-img.jpg" alt="" />
                <p className="fw-semibold mt-2">
                  We'll Help You Plan Extraodinary Nature Adventures.
                </p>
                <div
                  className="avatar-img-section pt-2"
                  style={{ borderTop: "1px dotted grey" }}
                >
                  <div className="row">
                    <div className="col-4">
                      <div>
                        <img
                          className="img-fluid rounded-circle"
                          src="avatar3.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-8">
                      <span className="fw-semibold">Yanto Edelwies </span>
                      <br />
                      <small className="">Pecinta Alam</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="middle-button-1">
              <button
                type="button"
                className="btn btn-light position-relative"
              >
                Reforestation
                <span className="position-absolute top-100 start-0 translate-middle p-2 bg-light border border-light rounded-circle">
                  
                </span>
              </button>
              
            </div>
            <div className="middle-button-2">
              <button
                type="button"
                className="btn btn-light position-relative"
              >
                Vegetate
                <span className="position-absolute top-100 start-100 translate-middle p-2 bg-light border border-light rounded-circle">
                  
                </span>
              </button>
              
            </div>
          </div>
        </div>
    </>
  );
}

export default RightHeader;
