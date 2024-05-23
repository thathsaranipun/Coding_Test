import NavBar from "../../NavBar";
import HeaderBar from "./HeaderBar";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";

function Header() {
  return (
    <>
      <NavBar />
      <div className="container-fluid">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <LeftHeader />
            </div>
            <div className="col-md-6 ">
              <RightHeader />
            </div>
          </div>
        </div>
      </div>
      <HeaderBar />
    </>
  );
}

export default Header;
