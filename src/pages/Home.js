import React from "react";
import Products from "../components/Products";

const home = () => {
  return (
    <React.Fragment>
      <div className="container" style={{ paddingTop: "6rem" }}>
        <div className="row">
          <Products />
        </div>
      </div>
    </React.Fragment>
  );
};

export default home;
