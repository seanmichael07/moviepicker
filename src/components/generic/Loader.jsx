import React from "react";
import "../../components/generic/Loader";
import "../../styles/css/loader/loader.css";

const Loader = () => (
  <div id="loader-outer-div">
    <svg id="loader">
      <circle cx="70" cy="70" r="70" />
    </svg>
  </div>
);

export default Loader;
