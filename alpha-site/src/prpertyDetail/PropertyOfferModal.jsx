import { useState } from "react";

const PropertyOfferModal = ({ propertyOffer, onCloseOffer }) => {
  return (
    <>
      <div className="modal fade show d-block" tabIndex="-1">
        <div className="modal-dialog modal-dialog-bottom">
          <div className="modal-content border border-warning"> {/* Golden border */}
            <div className="modal-header border-bottom"> {/* Golden bottom border */}
              <h5 className="modal-title text-warning">Current Week Offer</h5> {/* Golden title */}
              
              <a href="#"
                className="btn-close text-danger"
                onClick={onCloseOffer} // Close modal when clicking the button
              ></a>
            </div>
            <div className="modal-body">
              <p>{propertyOffer}</p>
            </div>
            <div className="modal-footer">
              <button 
                className="btn btn-warning text-white"  // Golden button
                onClick={onCloseOffer} // Close modal
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

export default PropertyOfferModal;
