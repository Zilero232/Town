import { Swiper, SwiperSlide } from "swiper/react";

function SelectTree() {
  const trees = [
    {
      title: "Пушкин",
      type: "дуб",
      date: "10.02.2022",
      cordinaty: 20,
      img: "images/flowers/item-1.png",
    },
    {
      title: "Пушкин",
      type: "дуб",
      date: "10.02.2022",
      cordinaty: 20,
      img: "images/flowers/item-1.png",
    },
    {
      title: "Пушкин",
      type: "дуб",
      date: "10.02.2022",
      cordinaty: 20,
      img: "images/flowers/item-1.png",
    },
    {
      title: "Пушкин",
      type: "дуб",
      date: "10.02.2022",
      cordinaty: 20,
      img: "images/flowers/item-1.png",
    },
    {
      title: "Пушкин",
      type: "дуб",
      date: "10.02.2022",
      cordinaty: 20,
      img: "images/flowers/item-1.png",
    },
    {
      title: "Пушкин",
      type: "дуб",
      date: "10.02.2022",
      cordinaty: 20,
      img: "images/flowers/item-1.png",
    },
  ];

  return (
    <div className="select-tree">
      <div className="select-tree__wrapper">
        <h2 className="modals__title">Выберите дерево</h2>

        <Swiper spaceBetween={25} slidesPerView={3.4}>
          {trees.map((item, idx) => {
            return (
              <SwiperSlide className="profile__flowers-block_item" key={idx}>
                <div className="profile__flowers-block_img">
                  <img src={item.img} alt="" />
                </div>
                <div className="profile__flowers-block_content">
                  <div className="profile__flowers-block_title">
                    {item.title}
                  </div>
                  <div className="profile__flowers-block_type">
                    Вид: {item.type}
                  </div>
                  <div className="profile__flowers-block_date">
                    Дата посадки: {item.date}
                  </div>
                  <div className="profile__flowers-block_coordinate">
                    Координат: {item.cordinaty}
                  </div>
                </div>
                <div className="profile__flowers-block_btn">
                  <button>ПОДРОБНЕЕ</button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default SelectTree;
