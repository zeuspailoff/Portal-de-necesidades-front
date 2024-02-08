import './ConfirmModal.css';
import ReactDOM from 'react-dom';

const ConfirmModal = ({ showModal, onClose, onConfirm }) => {
  return (
    <>
      {showModal && (
        ReactDOM.createPortal(
          <div className="modal-background" style={{display: showModal}}>
            <div className="modal-content">
              <p>
                By submitting this proposal, you won't be able to make modifications.
                Please review the proposal before sending.
              </p>
              <div className="modal-buttons">
                <button onClick={onClose}>Cancel</button>
                <button onClick={onConfirm}>Send</button>
              </div>
            </div>
          </div>,
          document.getElementById('modal-root')
        )
      )}
    </>
  );
};

export default ConfirmModal;