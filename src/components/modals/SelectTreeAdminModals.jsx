import { Swiper, SwiperSlide } from "swiper/react";

function SelectTree({show, toggle}) {
  const trees = [
    {
      title: "Пушкин",
      type: "дуб",
      date: "10.02.2022",
      cordinaty: 20,
      img: "images/flowers/item-1.png",
      active: true,
    },
    {
      title: "Пушкин",
      type: "дуб",
      date: "10.02.2022",
      cordinaty: 20,
      img: "images/flowers/item-1.png",
      active: false,
    },
    {
      title: "Пушкин",
      type: "дуб",
      date: "10.02.2022",
      cordinaty: 20,
      img: "images/flowers/item-1.png",
      active: false,
    },
    {
      title: "Пушкин",
      type: "дуб",
      date: "10.02.2022",
      cordinaty: 20,
      img: "images/flowers/item-1.png",
      active: true,
    },
    {
      title: "Пушкин",
      type: "дуб",
      date: "10.02.2022",
      cordinaty: 20,
      img: "images/flowers/item-1.png",
      active: true,
    },
    {
      title: "Пушкин",
      type: "дуб",
      date: "10.02.2022",
      cordinaty: 20,
      img: "images/flowers/item-1.png",
      active: true,
    },
  ];

  return (
    <div className="select-tree-admin" style={{display: show ? 'block' : 'none'}}>
      <div className="select-tree-admin__wrapper">
        <h2 className="modals__title">
          вЫБЕРИТЕ растения,которые будут доступны для посадки
        </h2>

        <Swiper
          breakpoints={{
            1200: {
              spaceBetween: 25,
              slidesPerView: 3.4,
            },
            768: {
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
                className={`${"profile__flowers-block_item"} ${
                  item.active ? "active" : ""
                }`}
                key={idx}
              >
                <div className="profile__flowers-block_active">
                  <img src="images/select-tree.svg" alt="" />
                </div>
                <div className="profile__flowers-block_close">
                  <img src="images/close-tree.svg" alt="" />
                </div>

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
                  <button
                    className={`${
                      item.active ? "btn-active" : "btn-close-active"
                    }`}
                  >
                    <span>выбрать</span>
                    <span>отменить</span>
                  </button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="select-tree-admin__point">
          <button onClick={toggle}>Создать точку</button>
        </div>
        <div className="select-tree-admin__selected">
          <button className="select-tree-admin__selected-btn active">
            ДЕРЕВЬЯ
          </button>
          <button className="select-tree-admin__selected-btn">КУСТЫ</button>
        </div>
      </div>
    </div>
  );
}

export default SelectTree;
