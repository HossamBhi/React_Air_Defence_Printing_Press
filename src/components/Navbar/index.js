import React from "react";
import { Link } from "react-router-dom";
import CustomeImage from "../common/CustomeImage";
import Search from "./SearchComponent";
import SocialMediaBar from "./SocialMediaBar";

const Navbar = () => (
  <div className="navbar">
    <SocialMediaBar />
    <div className="logo-search">
      <div className="navLogo">
        <Link to={"/"}>
          <CustomeImage
            src={require("../../assets/images/logo2.png")}
            className="navLogoImg"
          />
        </Link>
      </div>
      <Search />
    </div>
  </div>
);

export default Navbar;
