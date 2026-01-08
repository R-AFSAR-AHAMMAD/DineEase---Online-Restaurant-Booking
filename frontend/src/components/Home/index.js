import Navbar from "../Navbar";
import "./index.css";

const Home = () => (
  <>
    <Navbar />
    <section className="home-intro">
      <article className="intro-head-wrapper">
        <span className="intro-head">Delicious</span>
        <img
          className="intro-image"
          alt="intro-image"
          src="https://dineeasebyafsar.netlify.app/hero1.png"
        />
      </article>
      <article>
        <span className="intro-head">Food</span>
      </article>
      <article className="intro-head-wrapper">
        <img
          className="intro-image"
          alt="intro-image"
          src="https://dineeasebyafsar.netlify.app/hero2.png"
        />
        <span className="intro-head">Dishes</span>
      </article>
    </section>
  </>
);

export default Home;
