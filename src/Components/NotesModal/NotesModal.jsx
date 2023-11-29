import './NotesModal.css';

const Modal = ({ onClose, title, notes }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <span className="modal-close" onClick={onClose}>
                    &times;
                </span>
                <h2>{title}</h2>
                <p>{notes}</p>
            </div>
        </div>
    );
}

export default Modal;