import React from "react";
import "../Login/login.scss";

const signup = () => {
  return (
    <section className="vh-100" style={{ paddingTop: "6rem" }}>
      <div className="px-4 py-5 px-md-5 text-center text-lg-start">
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <img
                src="https://www.pngkey.com/png/full/501-5010058_online-store-png-e-business-ecommerce-clipart.png"
                class="img-fluid"
                alt="Sample img"
              />
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card">
                <div className="card-body py-5 px-md-5">
                  <img
                    src="https://www.logolynx.com/images/logolynx/97/977e0290e82162aab107754b2b18ff07.png"
                    class="img-fluid"
                    alt="Sample img"
                  />
                  <form>
                    <div className="form-outline mb-4 mt-4">
                      <input
                        type="text"
                        id="form3Example1"
                        className="form-control"
                      />
                      <label className="form-label" for="form3Example1">
                        Name
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example2"
                        className="form-control"
                      />
                      <label className="form-label" for="form3Example2">
                        Email address
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example3"
                        className="form-control"
                      />
                      <label className="form-label" for="form3Example3">
                        Password
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                      />
                      <label className="form-label" for="form3Example4">
                        Phone
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-dark btn-block mb-4"
                    >
                      Sign up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default signup;
