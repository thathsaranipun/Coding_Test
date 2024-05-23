function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <div className="container-fluid d-flex justify-content-between">
            <div className="col text-start">
              <p>
                <button
                  className="btn btn-outline-dark rounded-circle px-2 py-1"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseWidthExample"
                  aria-expanded="false"
                  aria-controls="collapseWidthExample"
                >
                  <i className="bi bi-list"></i>
                </button>
              </p>
              <div>
                <div
                  className="collapse collapse-horizontal"
                  id="collapseWidthExample"
                >
                  <div className="border-top" style={{ maxWidth: "300px" }}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a href="/" className="nav-link">
                          Home
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col text-center">
              <a href="#" className="navbar-brand fw-semibold">
                Binar
              </a>
            </div>
            <div className="col text-end">
              <a
                href="#"
                className="btn btn-outline-dark fw-semibold rounded-pill px-3"
              >
                <small>CONTACT US</small>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
