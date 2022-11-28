// Import Swiper React components
import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  Thumbs,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/thumbs";
import CustomeImage from "../common/CustomeImage";
import { IMAGES_URL } from "../../utils/config";

const SwiperImage = ({ image, bgColor }) => {
  // console.log("height: ", window.innerHeight);
  return (
    <div
      style={{
        flex: 1,
        flexDirection: "row",
        // backgroundColor: bgColor || "#333",
        maxHeight: 400,
        height: window.innerHeight - 150,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CustomeImage src={image} />
    </div>
  );
};
const HomeSwiper = ({ images = [] }) => {
  SwiperCore.use([Autoplay]);

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y, Autoplay, Thumbs]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      // style={{ height: "50%" }}
      autoplay={{ delay: 3000 }}
      className={"homeSwiper"}
    >
      {images.map((image, i) => (
        <SwiperSlide key={i}>
          <SwiperImage
            // image={require("../../assets/images/banner1.png")}
            image={IMAGES_URL + image}
            // bgColor="#F2EFEA"
          />
        </SwiperSlide>
      ))}
      {/* <SwiperSlide>
        <SwiperImage image={require("../../assets/images/banner2.png")} />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperImage
          image={require("../../assets/images/banner3.jpg")}
          bgColor="#F2EFEA"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperImage image={require("../../assets/images/banner4.png")} />
      </SwiperSlide> */}
    </Swiper>
  );
};

export default HomeSwiper;
