import { Link } from "react-router-dom";
import "./Nav.css";
export default function Navbar() {
  return (
    <>
      <header id="site-header" class="fixed-top">
          <nav class="navbar navbar-expand-lg navbar-light">
          <Link to='/'>
            <a class="navbar-brand" href="index.html">
              <i class="fas fa-graduation-cap"></i>MV School
            </a></Link>
            <button
              class="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon fa icon-expand fa-bars"></span>
              <span class="navbar-toggler-icon fa icon-close fa-times"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarScroll">
              <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                <li class="nav-item">
                <Link to='/'>
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="index.html"
                    style={{ fontSize: "20px" }}
                  >
                    Home
                  </a></Link>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="courses.html"
                    style={{ fontSize: "20px" }}
                  >
                    Academics
                  </a>
                </li>
                <li class="nav-item">
                  <Link to='/admission' >
                  <a
                    class="nav-link"
                    href="courses.html"
                    style={{ fontSize: "20px" }}
                  >
                    Admission
                  </a></Link>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="courses.html"
                    style={{ fontSize: "20px" }}
                  >
                    Calender
                  </a>
                </li>
                <li class="nav-item">
                  <Link to='/contact'>
                  <a
                    class="nav-link"
                    href="contact.html"
                    style={{ fontSize: "20px" }}
                  >
                    Contact
                  </a></Link>
                </li>
                {/* <li class="nav-item">
                            <a class="nav-link" href="courses.html" style={{fontSize:"20px"}}>Support Us</a>
                        </li> */}
              </ul>

              {/* <div class="header-search position-relative">
                        <div class="search-right mx-lg-2">
                            <a href="#search" class="btn search-btn p-0" title="search">
                                <i class="fas fa-search"></i></a>
                      
                            <div id="search" class="pop-overlay">
                                <div class="popup">
                                    <form action="#search" method="GET" class="search-box">
                                        <input type="search" placeholder="Enter Keyword..." name="search"
                                            required="required" autofocus="" />
                                        <button type="submit" class="btn"><span class="fas fa-search"
                                                aria-hidden="true"></span></button>
                                    </form>
                                </div>
                                <a class="close" href="#close">×</a>
                            </div>

                        </div>
                    </div> */}
            </div>

            {/* <div class="cont-ser-position">
              <nav class="navigation">
                <div class="theme-switch-wrapper">
                  <label class="theme-switch" for="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div class="mode-container">
                      <i class="gg-sun"></i>
                      <i class="gg-moon"></i>
                    </div>
                  </label>
                </div>
              </nav>
            </div> */}

            <div className="login">
            <Link to="/admin">
              <button className="log-btn">

                <b>Student Login</b>
              </button></Link>
            </div>
          </nav>

      </header>
    </>
  );
}
