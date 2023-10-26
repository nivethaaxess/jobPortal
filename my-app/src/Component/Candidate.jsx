import React from "react";
import "./Candidate.css";
import logo from "../assets/logo.png";


function Candidate() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" height={"15px"} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="#">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <div class="section">
          <div class="container">
            <div class="row full-height justify-content-center">
              <div class="col-12 text-center align-self-center py-5">
                <div class="section pb-5 pt-5 pt-sm-2 text-center">
                  <h6 class="mb-0 pb-3">
                    <span>Candidate</span>
                    <span>Employer</span>
                  </h6>
                  <input
                    class="checkbox"
                    type="checkbox"
                    id="reg-log"
                    name="reg-log"
                  />
                  <label for="reg-log" />
                  <div class="card-3d-wrap mx-auto">
                    <div class="card-3d-wrapper">
                      <div class="card-front">
                        <div class="center-wrap">
                          <div class="section text-center">
                            <h4 class="mb-4 pb-3 mt-5">Log In</h4>
                            <div class="form-group">
                              <input
                                type="email"
                                name="logemail"
                                class="form-style"
                                placeholder="Your Email"
                                id="logemail"
                                autocomplete="off"
                              />
                              <i class="input-icon uil uil-at" />
                            </div>
                            <div class="form-group mt-2">
                              <input
                                type="password"
                                name="logpass"
                                class="form-style"
                                placeholder="Your Password"
                                id="logpass"
                                autocomplete="off"
                              />
                              <i class="input-icon uil uil-lock-alt" />
                            </div>
                            <a href="#" class="btn mt-4">
                              submit
                            </a>
                            <p class="mb-0 mt-4 text-center">
                              <a href="#0" class="link">
                               New user <span className="">Sign Up</span>
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="card-back overflow-y-scroll ">
                        <div class="center-wrap">
                          <div class="section text-center">
                            <h4 class="mb-4 pb-3 mt-4">Sign Up</h4>
                            <div class="form-group">
                              <input
                                type="text"
                                name="logname"
                                class="form-style"
                                placeholder="First Name"
                                id="logname"
                              />
                              <i class="input-icon uil uil-user" />
                            </div>
                            <div class="form-group mt-2">
                              <input
                                type="email"
                                name="logemail"
                                class="form-style"
                                placeholder="Last Name"
                                id="logemail"
                              />
                              <i class="input-icon uil uil-at" />
                            </div>
                            <div class="form-group mt-2">
                              <input
                                type="password"
                                name="logpass"
                                class="form-style"
                                placeholder="E-mail"
                                id="logpass"
                              />
                              <i class="input-icon uil uil-lock-alt" />
                            </div>
                            <div class="form-group mt-2">
                              <input
                                type="password"
                                name="logpass"
                                class="form-style"
                                placeholder="Current Company"
                                id="logpass"
                              />
                              <i class="input-icon uil uil-lock-alt" />
                            </div>
                            <div class="form-group mt-2">
                              <input
                                type="number"
                                name="logpass"
                                class="form-style"
                                placeholder="Current CTC"
                                id="logpass"
                              />
                              <i class="input-icon uil uil-lock-alt" />
                            </div>
                            <div class="form-group mt-2">
                              <input
                                type="number"
                                name="logpass"
                                class="form-style"
                                placeholder="Total Experience"
                                id="logpass"
                              />
                              <i class="input-icon uil uil-lock-alt" />
                            </div>
                            <div class="form-group mt-2">
                              <input
                                type="number"
                                name="logpass"
                                class="form-style"
                                placeholder="Phone-Number"
                                id="logpass"
                              />
                              <i class="input-icon uil uil-lock-alt" />
                            </div>
                            <div class="form-group mt-2">
                              <input
                                type="number"
                                name="logpass"
                                class="form-style"
                                placeholder="password"
                                id="logpass"
                              />
                              <i class="input-icon uil uil-lock-alt" />
                            </div>
                            <a href="#" class="btn mt-4 mb-3">
                              submit
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Candidate;
