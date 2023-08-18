import styles from "../styles/page.module.css";
import Head from "next/head";
import CardList from "./components/molecules/CardList";
import LessonCallOut from "./components/atoms/atoms/atoms/LessonCallOut";
import ArticlesGallery from "./components/molecules/ArticlesGallery";
import PopularList from "./components/molecules/PopularList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carrousel from "./components/molecules/Carrousel";
import Header from "./components/atoms/atoms/atoms/Header";
import Home from "./components/atoms/atoms/atoms/Home";

export default function Index() {
  return (
    <>
      {/* <Header /> */}
      <Home />
      <div className={styles.lessonContainer}>
        <LessonCallOut />
      </div>
      <div className={styles.cardListContainer}>
        <CardList />
      </div>
      <PopularList />
      <Carrousel />
      <ArticlesGallery />
    </>
  );
}
