import React from 'react';

function Modal({ isOpen, onClose, children }) {
  const modalClasses = isOpen ? 'block' : 'hidden';

  return (
    <div className={`fixed inset-0 z-50 overflow-auto ${modalClasses}`}>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="modal-container">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-4">{children}</div>
            <div className="p-4 flex justify-end">
              <button
                className="bg-gray-200 text-gray-700 hover:bg-gray-300 px-4 py-2 rounded"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
