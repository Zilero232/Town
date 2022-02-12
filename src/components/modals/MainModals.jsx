import SelectTreeModals from "./SelectTreeModals";
import SelectTreeAdminModals from "./SelectTreeAdminModals";
import SpecificalTreeModals from "./SpecificalTreeModals";
import PhotoModals from "./PhotoModals";
import AddPhotoModals from "./AddPhotoModals";

function Modal() {
  return (
    <div className="modals">
      <div className="modals__content">
        <button className="modals__close">
          <img src="images/button-close.svg" alt="" />
        </button>

        <SelectTreeModals />
        <SelectTreeAdminModals />
        <SpecificalTreeModals />
        <PhotoModals />
        <AddPhotoModals />
      </div>
    </div>
  );
}

export default Modal;
