import { createPortal } from "react-dom";
import styles from "./modalBox.module.css";
function ModalBox({ modalState, handleModalView, children }) {
  const modalRoot = document.getElementById("modal-root");
  return createPortal(
    <>
      {modalState ? (
        <div
          className={styles.modalBox}
          onMouseDown={(e) => {
            e.target === e.currentTarget ? handleModalView() : e.target;
          }}
        >
          {children}
        </div>
      ) : (
        <div className={`${styles.modalBox} ${styles.hideModalBox}`}>
          {children}
        </div>
      )}
    </>,
    modalRoot,
  );
}

export default ModalBox;
