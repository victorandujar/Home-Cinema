import { Box, Modal } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "./ReusableModal.module.scss";

interface ReusableModalProps {
  openModal: boolean;
  setIsModalOpen: (value: boolean) => void;
  children: React.ReactNode;
}

const ReusableModal = ({
  openModal,
  setIsModalOpen,
  children,
}: ReusableModalProps): React.ReactElement => {
  const handleClose = () => setIsModalOpen(false);
  const matches = useMediaQuery("(max-width:1000px)");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: matches ? "90%" : "50%",
    height: "fit-content",
    bgcolor: "#191919",
    boxShadow: 24,
    padding: "20px",
    borderRadius: "5px",
    maxHeight: "700px",
    overflowY: "auto",
  };

  return (
    <div className={styles.container}>
      <Modal
        open={openModal}
        onClose={handleClose}
        className={styles.modalContainer}
      >
        <Box className={styles.modalContent} sx={style}>
          {children}
        </Box>
      </Modal>
    </div>
  );
};

export default ReusableModal;
