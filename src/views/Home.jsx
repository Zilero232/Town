import Header from "@/components/Header";
import Footer from '@/components/Footer';
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div
        className="home__banner"
        style={{ backgroundImage: `url("images/banner.jpg")` }}
      >
        <div className="container">
          <Header />

          <div className="home__wrapper">
            <h1 className="home__wrapper-title">
              вырастим зеленый город вместе
            </h1>
            <Link to={{ pathname: "/auth" }} className="home__wrapper-btn">
              <img src="images/play-icon.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>

      <div className="home__project">
        <div className="container">
          <h2 className="home__project-title">о проекте</h2>
          <p className="home__project-text">
            Это открытая платформа, с помощью которой вы можете принять участие
            в жизни района, в части озеленения и улучшения качества жизни. В
            платформу включена возможность загружать данные об элементе
            озеленения/элементе благоустройства, для того чтобы отслеживать его
            дальнейшую судьбу после посадки.
          </p>
          <div className="home__project-images">
            <img src="images/project.png" alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default Home;
