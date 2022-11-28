import React from "react";
import logo from "../../assets/images/logo.png";
const CustomeImage = ({ src, alt, ...props }) => {
  // const [url, setUrl] = useState(src || logo);
  // console.log("url: ", url);
  return (
    <img
      src={src || logo}
      alt={alt}
      
      // onError={(e) => setUrl(require("../../assets/logo.png").default)}
      // onErrorCapture={() => console.log("eee")}
      // onAbort={() => console.log("on about")}
      {...props}
    />
  );
};

export default CustomeImage;
