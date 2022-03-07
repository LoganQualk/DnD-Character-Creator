import { useContext } from 'react';
import { GlobalContext } from './Context/GlobalContext';
import ModalSpells from './ModalSpells';
import ModalRaces from './ModalRaces';
import ModalItems from './ModalItems';

const Modal = () => {

  const state = useContext(GlobalContext);
  const closeModal = () => {
    state.setModalVisible(false);
    state.setModalData(null);
    state.setIsLoaded(false);
  }

  const modalStyle = {
    display: state.modalVisible ? "block" : "none",
  }

  return (
    <div>
      {/* <button id="myBtn" onClick={() => setModalVisible(true)}>Open Modal</button>  */}
      <div className="modal" style={modalStyle} onClick={(event) => {
        if (!event.target.closest(".modal-content")) {
          closeModal();
        }
      }}>
        <div className="modal-content">
          <span className="close" onClick={() => closeModal()}>&times;</span>
          {
            (state.modalPage === "spells" &&
              <ModalSpells></ModalSpells>) ||
            (state.modalPage === "races" &&
              <ModalRaces></ModalRaces>) ||
            (state.modalPage === "items" && 
              <ModalItems></ModalItems>) ||
            <h1>ERROR: Page Not Found</h1>
          }
        </div>
      </div>
    </div>
  );
};

export default Modal;