import React, { useEffect, useState } from "react";
import SocialTab from "./SocialTab";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsMessenger,
  BsInstagram,
  BsWhatsapp,
} from "react-icons/bs";
import { getContactsAPI } from "../../utils/APIs";
const SocialMediaBar = () => {
  const [socialData, setSocialData] = useState({});
  useEffect(() => {
    getContactsAPI().then((res) => {
      // console.log("contacts: ", res);
      if (res) {
        setSocialData(res);
      }
    });
  }, []);
  return (
    <div className="social-bar">
      <div className="social-bar-right">
        <SocialTab
          icon={<BsFacebook className="social-icon" />}
          link={socialData?.FACEBOOK?.value}
        />
        <SocialTab
          icon={<BsTwitter className="social-icon" />}
          link={socialData?.TWITTER?.value}
        />
        <SocialTab
          icon={<BsYoutube className="social-icon" />}
          link={socialData?.YOUTUBE?.value}
        />
        <SocialTab
          icon={<BsMessenger className="social-icon" />}
          link={socialData?.MESSANGER?.value}
        />
        <SocialTab
          icon={<BsInstagram className="social-icon" />}
          link={socialData?.INSTAFGRAM?.value}
        />
        <SocialTab
          icon={<BsWhatsapp className="social-icon" />}
          link={socialData?.WHATSAPP?.value}
        />
      </div>
      <div className="social-bar-left">
        <SocialTab
          title={socialData?.PHONE?.value}
          link={"tel:" + socialData?.PHONE?.value}
        />
        <SocialTab
          title={socialData?.EMAIL?.value}
          link={"mailto:" + socialData?.EMAIL?.value}
        />
      </div>
    </div>
  );
};

export default SocialMediaBar;
