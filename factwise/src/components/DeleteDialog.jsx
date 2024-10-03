import React from 'react';

const DeleteDialog = ({ onCancel, onDelete }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h3>Confirm Deletion</h3>
          <button className="close-button" onClick={onCancel}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <p>Are you sure you want to delete?</p>
        </div>
        <div className="modal-footer">
          <button className="delete-button" onClick={onDelete}>
            Delete
          </button>
          <button className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;
