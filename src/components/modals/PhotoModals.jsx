import { Swiper, SwiperSlide } from "swiper/react";

function PhotoModals({show, toggle}) {
  const trees = [
    {
      date: "10.02.2022",
      text: "полив",
      img: "images/photo/item-1.jpg",
    },
    {
      date: "10.02.2022",
      text: "полив",
      img: "",
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
    <div className="photo-modals" style={{display: show ? 'block' : 'none'}}>
      <h2 className="modals__title">фотоальбом</h2>
      <div className="photo-modals__wrapper">
        <Swiper
          breakpoints={{
            1200: {
              spaceBetween: 25,
              slidesPerView: 3.4,
            },
            630: {
              spaceBetween: 25,
              slidesPerView: 2,
            },
            320: {
              spaceBetween: 25,
              slidesPerView: 1,
            },
          }}
        >
          {trees.map((item, idx) => {
            return (
              <SwiperSlide
                key={idx}
                className={`photo-modals__wrapper-item ${
                  !item.img ? "not-photo" : ""
                }`}
              >
                <div
                  className="photo-modals__wrapper-item_img"
                  style={{ backgroundImage: `url(${item.img})` }}
                ></div>
                <button className="photo-modals__wrapper-item_plus">+</button>
                <div className="photo-modals__wrapper-item_content">
                  <div className="photo-modals__wrapper-item_date">
                    {item.date}
                  </div>
                  <div className="photo-modals__wrapper-item_text">
                    Описание: {item.type}
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
