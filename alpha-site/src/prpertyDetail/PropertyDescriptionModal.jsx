import { useState } from "react";

const PropertyDescriptionModal = ({ description, onClose }) => {
  return (
    <>
      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog modal-dialog-bottom">
          <div className="modal-content border border-warning"> {/* Golden border */}
            <div className="modal-header border-bottom"> {/* Golden bottom border */}
              <h5 className="modal-title text-warning">Description</h5> {/* Golden title */}
              
              <button
                type="button"
                className="btn-close text-danger"
                onClick={onClose} // Close modal when clicking the button
              ></button>
            </div>
            <div className="modal-body">
              <p>{description}</p>
            </div>
            <div className="modal-footer">
              <button 
                className="btn btn-warning text-white"  // Golden button
                onClick={onClose} // Close modal
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div> {/* Backdrop for dimming */}
    </>
  );
};

export default PropertyDescriptionModal;
