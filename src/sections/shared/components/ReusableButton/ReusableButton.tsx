"use client";

import styles from "./ReusableButton.module.scss";

interface Props {
  text: string;
  onClick: () => void;
  icon?: React.ReactElement;
  className?: string;
}

const ReusableButton = ({
  text,
  onClick,
  icon,
  className,
}: Props): React.ReactElement => {
  return (
    <button onClick={onClick} className={className ?? styles.container}>
      {icon}
      {text}
    </button>
  );
};

export default ReusableButton;
