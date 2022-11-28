import React, { useEffect, useState } from "react";
import AppLoader from "../components/common/AppLoader";
import CategoriesWithHeader from "../components/Homepage/CategoriesWithHeader";
import HomeSwiper from "../components/Homepage/HomeSwiper";
import { getBannerAPI, getCategoryAPI } from "../utils/APIs";
import { getCategoriesStorage, setCategoriesStorage } from "../utils/storage";

const HomePage = () => {
  const [categories, setCategories] = useState(null);
  const [banner, setBanner] = useState(null);
  useEffect(() => {
    getBannerAPI().then((res) => {
      if (res) {
        setBanner(res);
      }
    });
    getCategoryAPI().then((res) => {
      // console.log("res: ", res);
      if (res) {
        setCategoriesStorage(res);
        setCategories(res);
      } else {
        getCategoriesStorage().then((res) => {
          // console.log("res: ", res);
          if (res) {
            setCategories(res);
          }
        });
      }
    });
  }, []);

  return (
    <>
      {/* <AppLoader /> */}
      {categories === null && <AppLoader />}
      {categories !== null && (
        <>
          {banner && <HomeSwiper images={banner} />}
          {categories.map((cat, i) => (
            <CategoriesWithHeader
              key={cat.id}
              cat={cat}
              title={cat.name}
              items={cat.services}
            />
          ))}
        </>
      )}
    </>
  );
};

export default HomePage;
