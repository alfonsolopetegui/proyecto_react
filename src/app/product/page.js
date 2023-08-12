
import styles from "../../styles/productPage.module.css";
import ButtonSmall from "../components/atoms/atoms/atoms/ButtonSmall";
const productPage = () => {
  
  return (
    <div className={styles.productWrapper}>
      <div className={styles.productContainer}>
        <div className={styles.imageContainer}></div>
        <div className={styles.dataContainer}>
          <div className={styles.dataTop}>
            <h1 className={styles.dataTitle}>
            Fender Stratocaster American Special Sunb Electric Guitar
            </h1>
            <div className={styles.priceContainer}>
              <h3>U$s 1,699</h3>
              <p>save up to 20%</p>
            </div>
          </div>
          <div className={styles.dataBottom}>
            <div className={styles.dataFragment}>
              <h4>Six month special financing</h4>
              <p>
                El diseño propuesto es flexible y está sujeto a cambios y
                mejoras. No obstante, hay ciertos requerimientos
              </p>
            </div>
            <div className={styles.dataFragment}>
              <h4>Free devolution Policy</h4>
              <p>
                El diseño propuesto es flexible y está sujeto a cambios y
                mejoras. No obstante, hay ciertos requerimientos
              </p>
            </div>
            <div className={styles.dataFragment}>
              <h4>Free delivery in Argentina</h4>
              <p>
                El diseño propuesto es flexible y está sujeto a cambios y
                mejoras. No obstante, hay ciertos requerimientos
              </p>
            </div>
          </div>
            <ButtonSmall text='Add to Cart'/>
        </div>
      </div>
    </div>
  );
};

export default productPage;
