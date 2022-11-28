import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/serviceDetails.css";

import TopSection from "../components/serviceDetails/TopSection";
import { getCategoriesStorage } from "../utils/storage";
import RelatedServices from "../components/serviceDetails/RelatedServices";
import ServiceGallary from "../components/serviceDetails/ServiceGallary";

const ServiceDetails = () => {
  const { catId, serviceId } = useParams();
  const [details, setDetails] = useState(null);
  const [category, setCategory] = useState(null);
  const [services, setServices] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    getCategoriesStorage().then((res) => {
      // console.log("res: ", res);
      if (res) {
        const cat = res.find((cat) => cat.id?.toString() === catId);
        const services = cat.services;
        setCategory(cat);
        setServices(services);

        // console.log("services: ", services)
        const service = services.find(
          (ser) => ser.id?.toString() === serviceId
        );
        // console.log(service)
        setDetails(service);
      }
    });
  }, [catId, serviceId]);

  return (
    <div className="">
      {services && (
        <>
          <TopSection service={details} category={category} />
          <div className="serviceBottomPart">
            <div className="gallaryCon">
              <div
                className={`serviceDetailCon${
                  details?.images?.length > 0 && " hasImages"
                }`}
              >
                <h2 className="detailsTitlte"> الوصف</h2>
                <p className="serviceDes">{details.des}</p>
              </div>
              {details?.images && details.images?.length > 0 && (
                <ServiceGallary />
              )}
            </div>

            <h2 className="detailsTitlte"> خدمات تابعة</h2>
            <RelatedServices category={category} service={details} />
          </div>
        </>
      )}
    </div>
  );
};

export default ServiceDetails;
