function BodySection1() {
  return (
    <>
      <div className="row d-flex justify-content-between pt-5">
        <div className="col-lg-5 d-flex align-items-stretch">
          <div className="row bg-white rounded-4" style={{margin: "auto"}}>
            <div className="col-sm-7 px-0">
              <div className="card-img">
                <img
                  className="img-fluid w-100 rounded-4"
                  src="tree.jpg"
                  alt=""
                />
                <button className="btn btn-sm btn-light px-3 button1 rounded-pill">
                  Learn More
                </button>
                <button className="btn btn-sm btn-light button2 rounded-circle">
                  <i className="bi bi-arrow-up-right"></i>
                </button>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="mt-3 d-flex">
                <button className="btn btn-outline-dark rounded-pill px-3">
                  INSIGHT
                </button>
                <div className="round-btn1">
                  <i className="bi bi-filter-circle"></i>
                </div>
              </div>
              <p className="text-secondary mt-5">02/24/24</p>
              <p className="fw-semibold mt-5 fs-5">
                WE Beleive That Protecting Nature Is A Shared Duty
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-5 mt-lg-0">
          <p className="fs-1 fw-semibold">
            Get Information On The Best Natural Destinations, Epic <span className="highlight rounded-4">Hiking Route</span>s And Amazing Locations.
          </p>
          <div className="row d-flex">
            <div className="col-sm-8">
            <div className="mt-5 d-flex">
                <button className="btn bg-white rounded-pill ps-3" style={{paddingRight: "50%"}}>
                  ABOUT
                </button>
                <div className="round-btn1">
                  <i className="bi bi-filter-circle"></i>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
                <p className="text-secondary">LEARN ABOUT THE LATEST CONSERVATION EFFORTS, AS WELL AS HOW YOU CAN CONTRIBUTE</p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default BodySection1;
