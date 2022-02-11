import { Swiper, SwiperSlide } from "swiper/react";

function PhotoModals() {
  const trees = [
    {
      date: "10.02.2022",
      text: "полив",
      img: "images/photo/item-1.jpg",
    },
    {
      date: "10.02.2022",
      text: "полив",
      img: "images/photo/item-1.jpg",
    },
    {
      date: "10.02.2022",
      text: "полив",
      img: "images/photo/item-1.jpg",
    },
    {
      date: "10.02.2022",
      text: "полив",
      img: "images/photo/item-1.jpg",
    },
    {
      date: "10.02.2022",
      text: "полив",
      img: "images/photo/item-1.jpg",
    },
    {
      date: "10.02.2022",
      text: "полив",
      img: "images/photo/item-1.jpg",
    },
  ];

  return (
    <div className="photo-modals">
      <h2 className="modals__title">фотоальбом</h2>
      <div className="photo-modals__wrapper">
        <Swiper spaceBetween={25} slidesPerView={3.4}>
          {trees.map((item, idx) => {
            return (
              <SwiperSlide
                key={idx}
                className="photo-modals__wrapper-item"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="photo-modals__wrapper-item_content">
                  <div className="photo-modals__wrapper-item_date">
                    {item.date}
                  </div>
                  <div className="photo-modals__wrapper-item_text">
                    Полив: {item.type}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default PhotoModals;
