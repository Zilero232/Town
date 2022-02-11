import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Modals from '@/components/modals/MainModals'

import { Swiper, SwiperSlide } from "swiper/react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";
import "swiper/css";

function Home() {
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

  const shrubs = [
    {
      title: "МОЙ КУСТАРНИК",
      type: "можжвельник",
      date: "10.02.2022",
      cordinaty: 20,
      img: "images/flowers/schubs-1.png",
    },
    {
      title: "МОЙ КУСТАРНИК",
      type: "можжвельник",
      date: "10.02.2022",
      cordinaty: 20,
      img: "images/flowers/schubs-1.png",
    },
    {
      title: "МОЙ КУСТАРНИК",
      type: "можжвельник",
      date: "10.02.2022",
      cordinaty: 20,
      img: "images/flowers/schubs-1.png",
    },
    {
      title: "МОЙ КУСТАРНИК",
      type: "можжвельник",
      date: "10.02.2022",
      cordinaty: 20,
      img: "images/flowers/schubs-1.png",
    },
    {
      title: "МОЙ КУСТАРНИК",
      type: "можжвельник",
      date: "10.02.2022",
      cordinaty: 20,
      img: "images/flowers/schubs-1.png",
    },
    {
      title: "МОЙ КУСТАРНИК",
      type: "можжвельник",
      date: "10.02.2022",
      cordinaty: 20,
      img: "images/flowers/schubs-1.png",
    },
    {
      title: "МОЙ КУСТАРНИК",
      type: "можжвельник",
      date: "10.02.2022",
      cordinaty: 20,
      img: "images/flowers/schubs-1.png",
    },
  ];

  return (
    <section className="profile">
      <div className="container">
        <Header />
      </div>

      <div
        className="profile__date"
        style={{ backgroundImage: `url("images/banner.jpg")` }}
      >
        <div className="container">
          <Tabs>
            <TabList className="profile__tabs">
              <Tab className="profile__tabs-btn">
                <div className="profile__tabs-btn_icon">
                  <img src="images/user-icon.svg" alt="" />
                </div>
                <div className="profile__tabs-btn_text">личный кабинет</div>
              </Tab>

              <Tab className="profile__tabs-btn">
                <div className="profile__tabs-btn_icon">
                  <img src="images/gd-icon.svg" alt="" />
                </div>
                <div className="profile__tabs-btn_text">поcадить дерево</div>
              </Tab>

              <Tab className="profile__tabs-btn">
                <div className="profile__tabs-btn_icon">
                  <img src="images/tree-icon.svg" alt="" />
                </div>
                <div className="profile__tabs-btn_text">мои деревья</div>
              </Tab>
            </TabList>

            <div className="profile__content">
              <TabPanel className="profile__wrapper">
                <div className="profile__wrapper-block">
                  <div className="profile__wrapper-block_name">
                    Артемьев Александр Царевич
                  </div>
                  <div className="profile__wrapper-block_aflaid">
                    Грандженин Работяга
                  </div>

                  <div className="profile__wrapper-info">
                    <div className="profile__wrapper-info_block">
                      <div className="profile__wrapper-info_title">e-mail</div>
                      <div className="profile__wrapper-info_value">
                        houston.inc@yandex.ru
                      </div>
                    </div>

                    <div className="profile__wrapper-info_block">
                      <div className="profile__wrapper-info_title">
                        количество деревьев
                      </div>
                      <div className="profile__wrapper-info_value">25</div>
                    </div>

                    <div className="profile__wrapper-info_block">
                      <div className="profile__wrapper-info_title">
                        место работы
                      </div>
                      <div className="profile__wrapper-info_value">
                        оОО «комплексные системы»
                      </div>
                    </div>
                  </div>

                  <div className="profile__wrapper-about">
                    <div className="profile__wrapper-about_title">о себе</div>
                    <div className="profile__wrapper-about_text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rerum consequuntur, dicta, corrupti mollitia blanditiis
                      consectetur ea corporis autem vero impedit sed culpa?
                      Optio repellat corrupti magni id cum laborum non
                      asperiores deserunt, temporibus cumque recusandae quo in
                      dignissimos, quisquam quis
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel className="profile__map">
                <h2 className="profile__map-title">Карта посадки</h2>
                <p className="profile__map-text">
                  Выберите желаемое место для посадки вашего растения и
                  заполните заявку.
                </p>
                <div className="profile__map-img">
                  <img src="images/map.jpg" alt="" />
                </div>
              </TabPanel>

              <TabPanel className="profile__flowers">
                <h2 className="profile__flowers-title">МОИ ДЕРЕВЬЯ</h2>
                <div className="profile__flowers-block">
                  <Swiper spaceBetween={25} slidesPerView={3.4}>
                    {trees.map((item, idx) => {
                      return (
                        <SwiperSlide
                          className="profile__flowers-block_item"
                          key={idx}
                        >
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

                <h2 className="profile__flowers-title">Мои кустраники</h2>
                <div className="profile__flowers-block">
                  <Swiper spaceBetween={25} slidesPerView={3.4}>
                    {shrubs.map((item, idx) => {
                      return (
                        <SwiperSlide
                          className="profile__flowers-block_item"
                          key={idx}
                        >
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
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>

      <Footer />

      <Modals />
    </section>
  );
}

export default Home;
