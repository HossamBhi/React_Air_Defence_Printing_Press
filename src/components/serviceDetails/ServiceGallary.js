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

const SwiperImage = ({ image }) => {
  return (
    <div
      style={{
        flex: 1,
        flexDirection: "row",
        height: window.innerHeight - 150,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CustomeImage src={image} />
    </div>
  );
};
const ServiceGallary = ({ images = [] }) => {
  SwiperCore.use([Autoplay]);

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay, Thumbs]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
      autoplay={{ delay: 3000 }}
      className="serviceGallary"
    >
      {images.map((image, i) => (
        <SwiperSlide key={i}>
          <SwiperImage image={IMAGES_URL + image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceGallary;
