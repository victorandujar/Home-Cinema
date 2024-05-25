import { useState } from "react";
import ImageCustom from "../ImageCustom/ImageCustom";
import styles from "./Header.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu";
import menuOptions from "../DropdownMenu/utils/menuOptions/menuOptions";

const Header = (): React.ReactElement => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <section className={styles.container}>
      <div className={styles.logo}>
        <h2 className={styles.title}>Home cinema</h2>
        <ImageCustom
          image="/favicon.ico"
          alt=""
          className=""
          height={40}
          width={40}
        />
      </div>
      <button
        onClick={(event) => handleClick(event)}
        className={styles.menuButton}
      >
        <GiHamburgerMenu color="white" size={30} />
      </button>
      <DropdownMenu
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        options={menuOptions}
      />
    </section>
  );
};

export default Header;
