import SelectTreeModals from "./SelectTreeModals";
import SelectTreeAdminModals from "./SelectTreeAdminModals";
import SpecificalTreeModals from "./SpecificalTreeModals";
import PhotoModals from "./PhotoModals";
import AddPhotoModals from "./AddPhotoModals";
import { useModal } from "@/hooks";
  
function Modal() {
  const [modalName, toggleModal, isActiveModal] = useModal()
 
  return (
    <div className="modals" style={{display: isActiveModal ? 'flex' : 'none'}}>
      <div className="modals__content">
        <button className="modals__close" onClick={() => toggleModal('none')}> 
          <img src="images/button-close.svg" alt="" />
        </button> 

        <SelectTreeModals show={modalName === 'select-tree'} toggle={() => toggleModal('select-tree')} />
        <SelectTreeAdminModals show={modalName === 'select-tree-admin'} toggle={() => toggleModal('select-tree-admin')} />
        <SpecificalTreeModals show={modalName === 'specifical-tree'} toggle={() => toggleModal('specifical-tree')} togglePhoto={() => toggleModal('photo')} />
        <PhotoModals show={modalName === 'photo'} toggle={() => toggleModal('photo')}  />
        <AddPhotoModals />
      </div> 
    </div>
  );
}

export default Modal;
