import { useContext } from 'react';
import { GlobalContext } from './Context/GlobalContext';
import ModalSpells from './ModalSpells';

const Modal = () => {
  
  const state = useContext(GlobalContext);

  return (
    <div>
      {/* <button id="myBtn" onClick={() => setModalVisible(true)}>Open Modal</button>  */}
            <div id="myModal" className="modal" style={{display: state.modalVisible ? "block" : "none"}}>
                <div className="modal-content">
                    <span className="close" onClick={() => state.setModalVisible(false)}>&times;</span>
                    {
                      (state.modalPage === "spells" &&
                      <ModalSpells></ModalSpells>) || 
                      (state.modalPage === "races" &&
                      <ModalSpells></ModalSpells>) || 
                      <h1>ERROR: Page Not Found</h1>
                    }
                </div>
            </div>
    </div>
  );
};

export default Modal;