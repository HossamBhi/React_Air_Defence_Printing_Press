import React from "react";
import { IMAGES_URL } from "../../utils/config";
import CustomeImage from "../common/CustomeImage";

const TopSection = ({
  category,
  service: { id, name, image, des, price = 500 },
}) => (
  <div className="topSection">
    <CustomeImage
      src={IMAGES_URL + category.image}
      alt={name}
      className="topSectionBg"
    />
    <div className="overlay">
      <div className="topDetails">
        <CustomeImage
          src={IMAGES_URL + image}
          alt={name}
          className="topSectionImage"
        />
        <h3 className="detailPrice">{price}</h3>
        <h3 className="topSectiontitle">{name}</h3>
      </div>
    </div>
  </div>
);

export default TopSection;
