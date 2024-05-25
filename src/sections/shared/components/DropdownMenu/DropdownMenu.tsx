import { Menu, MenuItem } from "@mui/material";
import React from "react";
import menuOptions from "./utils/menuOptions/menuOptions";
import Link from "next/link";
import styles from "./DropdownMenu.module.scss";
import { HeaderDropdownMenuOptions } from "../../interfaces/menuInterfaces";

interface Props {
  anchorEl: null | HTMLElement;
  setAnchorEl: (value: null | HTMLElement) => void;
  options: HeaderDropdownMenuOptions[];
}

export const DropdownMenu = ({ anchorEl, setAnchorEl, options }: Props) => {
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
      {options.map((option) => (
        <Link key={option.id} href={option.link} className={styles.menuLink}>
          <MenuItem onClick={handleClose} className={styles.menuContainer}>
            {option.icon}
            {option.name}
          </MenuItem>
        </Link>
      ))}
    </Menu>
  );
};
