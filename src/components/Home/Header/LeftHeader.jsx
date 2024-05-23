function LeftHeader() {
  return (
    <>
      <div
        className="fw-semibold text-uppercase fs-6"
        style={{ maxWidth: "200px" }}
      >
        <p>
          We are a community of nature lovers joined in a shared mission to
          share the natural beauty
        </p>
      </div>
      <div className="mt-5">
        <div className="d-flex">
          <button className="btn btn-outline-dark rounded-pill px-4 active">
            <small>Reforestation</small>
          </button>
          <button className="btn btn-outline-dark rounded-pill px-4">
            <small>Vegetation</small>
          </button>
          <button className="btn btn-outline-dark rounded-pill px-4">
            <small>Nature</small>
          </button>
        </div>
      </div>
      <div className="mt-5 pt-5">
        <div className="d-flex">
          <div className="avatar-img-section">
            <img
              className="img-fluid rounded-circle"
              src="avatar1.jpg"
              alt=""
            />
            <img
              className="img-fluid rounded-circle"
              src="avatar2.jpg"
              alt=""
            />
            <div className="avatar-txt-section">
              <span className="fs-1 fw-semibold">120</span>
              <span>k</span>
              <br />
              <small className="text-nowrap" style={{ fontSize: "8px" }}>DONEC VELMI SIT</small>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 pt-5">
        <h1 className="display-1 fw-semibold">
          Adventures<br/> Under
          <img className="img-fluid" src="world.png" alt="" />
          The <br/>Open Skies
        </h1>
      </div>
    </>
  );
}

export default LeftHeader;
