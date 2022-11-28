import React from "react";
// Import Swiper React components
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Category from "../Category";
import useWindowSize from "../hooks/useWindowSiza";

const CategoriesWithHeader = ({ items, title,cat }) => {
  const { width } = useWindowSize();
  return (
    <div className="categoriesCon">
      <h2 className="categoryTitle">{title}</h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={width < 500 ? 1 : width < 768 ? 2 : width < 960 ? 3 : 4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        style={{ height: "60%", paddingRight: 2, paddingLeft: 2 }}
      >
        <div style={{ paddingRight: 150, backgroundColor: "#000" }}>
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <Category item={item} key={item.id} category={cat} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default CategoriesWithHeader;
