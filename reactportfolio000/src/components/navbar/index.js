import React from "react";

function Navbar() {
  return (
    <div class="row">

            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <nav class="navbar navbar-expand-lg bg-light">

                    <div class="name col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl 4 text-center">
                        <a class="navbar-brand"><span id="myName">Nick Algarra</span></a>
                    </div>

                    <div
                        class="links navbarText text-center offset-md-3 offset-lg-4 offset-xl-4 col-xs-12  col-sm-12 col-md-3 col-lg-4 col-xl-4">
                        <ul class="navbar-nav text-center ml-auto mr-auto d-inline">
                            <li class="nav-item d-inline">
                                <a class="nav-link" href="index.html">Home</a>
                            </li>
                            <li class="nav-item d-inline">
                                <a class="nav-link">|</a>
                            </li>
                            <li class="nav-item d-inline">
                                <a class="nav-link" href="portfolio.html">Portfolio
                                    <span class="sr-only">(current)</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>

        </div>
  );
}

export default Navbar;