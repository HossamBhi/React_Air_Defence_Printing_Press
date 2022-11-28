import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const AppLoader = () => (
  <div className="loaderContainer">
    <Loader type="Triangle" color="#0D47A1" className="loader" />
    {/* <Loader type="Triangle" color="#0D47A1" className="loader" />

    <Loader type="Triangle" color="#0D47A1" className="loader" /> */}
  </div>
);

export default AppLoader;
