import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Diverse in-game currency,<br className="sm:block hidden" /> extensive gift card selection.
      
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Unlock diverse in-game currency for various games,
Explore an extensive selection of versatile gift cards,
Experience seamless transactions with our easy payment,
Swiftly receive your products within minutes,
Elevate your gaming with convenience and variety.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
