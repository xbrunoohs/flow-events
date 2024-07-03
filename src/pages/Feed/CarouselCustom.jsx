import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./CarouselCustom.css";
import ButtonSecondary from "../../components/Button/ButtonSecondary";

export default function CarouselCustom({ events }) {
  return (
    <div className="carousel-custom-wrapper">
      <div className="carousel-custom">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={false}
        >
          {events && events.length > 0 ? (
            events.map((event) => (
              <SwiperSlide
                key={event.id}
                className="carousel-custom-card-wrapper"
              >
                <div
                  className="carousel-custom-card"
                  style={{
                    backgroundImage: `url(${event?.image})`,
                  }}
                >
                  <ButtonSecondary
                    onClick={() => {
                      window.open(event?.link);
                    }}
                  >
                    Saiba mais
                  </ButtonSecondary>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide className="carousel-custom-card">
              No events available
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
}
