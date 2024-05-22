import ImageCustom from "../ImageCustom/ImageCustom";
import styles from "./Header.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = (): React.ReactElement => {
  return (
    <section className={styles.container}>
      <div className={styles.logo}>
        <h2 className={styles.title}>Home cinema</h2>
        <ImageCustom
          image="favicon.ico"
          alt=""
          className=""
          height={40}
          width={40}
        />
      </div>
      <GiHamburgerMenu color="white" size={30} />
    </section>
  );
};

export default Header;
