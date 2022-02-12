import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useModal } from "@/hooks";
import qs from 'qs'

import "react-tabs/style/react-tabs.css";
import "swiper/css";
import { MapBlock } from "../components/Map";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {

  const {search} = useLocation()

const {admin} = qs.parse(search, {
  ignoreQueryPrefix: true
}) 

useEffect(() => {
  if(admin)
    setAdmin(true)
}, [admin])

const [isAdmin, setAdmin] = useState(false)

const [, toggleModal] = useModal() 

  const trees = [
    {
      title: "Пушкин", 
      type: "дуб",
      date: "10.02.2022",
      cordinaty: "58.5 58.5",
      img: "images/flowers/item-1.png",
    },
    {
      title: "Моё дерево",
      type: "дуб",
      date: "10.02.2022",
      cordinaty: "58.5 58.5",
      img: "images/flowers/item-1.png",
    },
    {
      title: "Моё дерево",
      type: "дуб",
      date: "10.02.2022",
      cordinaty: "58.5 58.5",
      img: "images/flowers/item-1.png",
    },
    {
      title: "Моё дерево",
      type: "дуб",
      date: "10.02.2022",
      cordinaty: "58.5 58.5",
      img: "images/flowers/item-1.png",
    },
    {
      title: "Моё дерево",
      type: "дуб",
      date: "10.02.2022",
      cordinaty: "58.5 58.5",
      img: "images/flowers/item-1.png",
    },
    {
      title: "Моё дерево",
      type: "дуб",
      date: "10.02.2022",
      cordinaty: "58.5 58.5",
      img: "images/flowers/item-1.png",
    },
  ];

  const shrubs = [
    {
      title: "МОЙ КУСТАРНИК",
      type: "можжвельник",
      date: "10.02.2022",
      cordinaty: "58.5 58.5",
      img: "images/flowers/schubs-1.png",
    },
    {
      title: "МОЙ КУСТАРНИК",
      type: "можжвельник",
      date: "10.02.2022",
      cordinaty: "58.5 58.5",
      img: "images/flowers/schubs-1.png",
    },
    {
      title: "МОЙ КУСТАРНИК",
      type: "можжвельник",
      date: "10.02.2022",
      cordinaty: "58.5 58.5",
      img: "images/flowers/schubs-1.png",
    },
    {
      title: "МОЙ КУСТАРНИК",
      type: "можжвельник",
      date: "10.02.2022",
      cordinaty: "58.5 58.5",
      img: "images/flowers/schubs-1.png",
    },
    {
      title: "МОЙ КУСТАРНИК",
      type: "можжвельник",
      date: "10.02.2022", 
      cordinaty: "58.5 58.5",
      img: "images/flowers/schubs-1.png",
    },
    {
      title: "МОЙ КУСТАРНИК",
      type: "можжвельник",
      date: "10.02.2022",
      cordinaty: "58.5 58.5",
      img: "images/flowers/schubs-1.png",
    },
    {
      title: "МОЙ КУСТАРНИК",
      type: "можжвельник",
      date: "10.02.2022",
      cordinaty: "58.5 58.5",
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
                <div className="profile__tabs-btn_text">{ isAdmin ? 'редактирование карты' : 'посадить дерево' }</div>
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
                    Павлов Сергей Евгеньевич
                  </div>
                  <div className="profile__wrapper-block_aflaid">
                    { isAdmin ? 'Администратор' : 'Гражданин'}
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
                      Небольшая информация о себе
                    </div>
                  </div>
                  <a href="#orders" className="profile__wrapper-button_order">
                    перейти к заявкам
                  </a>
                  <div className="profile__wrapper-button_arrow">
                    <img src="images/arrow-order-btn.svg" alt="" />
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
                  <MapBlock isAdmin={isAdmin} />
                </div>
              </TabPanel>

              <TabPanel className="profile__flowers">
                <h2 className="profile__flowers-title">МОИ ДЕРЕВЬЯ</h2>
                <div className="profile__flowers-block">
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
                              Координаты: {item.cordinaty}
                            </div> 
                          </div> 
                          <div className="profile__flowers-block_btn">
                            <button onClick={() => toggleModal('specifical-tree')}>ПОДРОБНЕЕ</button>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>

                <h2 className="profile__flowers-title">Мои кустарники</h2>
                <div className="profile__flowers-block">
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
                              Координаты: {item.cordinaty} 
                            </div>
                          </div>
                          <div className="profile__flowers-block_btn">
                            <button onClick={() => toggleModal('specifical-tree')}>ПОДРОБНЕЕ</button>
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

      <div className="profile__orders" id="orders">
        <div className="container">
          <h1 className="profile__orders-title">список заявок</h1>
          <table className="profile__orders-table">
            <thead>
              <tr>
                <th>№ заявки</th>
                <th>фио</th>
                <th>координаты</th>
                <th>ДЕРЕВО/КУСТ</th>
                <th>действия </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1056</td>
                <td>Павлов сергей евгеньевич</td>
                <td>°31.2786′ с.ш. Долгота: 31°16.2624′ в.д.</td>
                <td>кустарник</td>
                <td className="profile__orders-buttons">
                  <button className="profile__orders-success">
                    <img src="images/table-success.svg" alt="" />
                  </button>

                  <button className="profile__orders-close">
                    <img src="images/close-table.svg" alt="" />
                  </button>
                </td>
              </tr>

              <tr>
                <td>1056</td>
                <td>Павлов сергей евгеньевич</td>
                <td>°31.2786′ с.ш. Долгота: 31°16.2624′ в.д.</td>
                <td>кустарник</td>
                <td className="profile__orders-buttons">
                  <button className="profile__orders-success">
                    <img src="images/table-success.svg" alt="" />
                  </button>

                  <button className="profile__orders-close">
                    <img src="images/close-table.svg" alt="" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default Home;
