import React from "react";
import CustomeImage from "../common/CustomeImage";
const SocialTab = ({ link, image, title, icon }) => {
  return (
    <a className="social-tab" href={link}>
      {image && <CustomeImage src={image} className={"socialImage"} />}
      {title && <p className="socialText">{title}</p>}
      {icon && icon}
    </a>
  );
};

export default SocialTab;
