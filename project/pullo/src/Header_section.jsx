import React from "react";
function Header() {
  return (
    // <div className="bg-dark">
    <div className="container">
      <div className="row align-items-center ">
        <div className="col-sm-3">
          <div className="logo">
            <a href="/">
              <img src={require("./images/logo.png")} alt="logo" />
            </a>
          </div>
        </div>
        <div className="col-sm-9">
          <nav className="navbar navbar-expand-lg   bg-back">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active text-white" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                    Collection
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                    Shoes
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                    Racing Boots
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                    Contact
                    </a>
                  </li>
                  <li className="nav-item las">
                    <a className="nav-link text-white " href="#">
                    <img src={require(".//images/search_icon.png")} alt="search" />
                    </a>
                  </li>
                  <li className="nav-item las">
                    <a className="nav-link text-white " href="#">
                    <img src={require(".//images/shop_icon.png")} alt="shop" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    // </div>
  );
}
// header end
export default Header;
