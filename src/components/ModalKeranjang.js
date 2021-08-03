//rafce
import React from "react";
import { Modal, Button } from "react-bootstrap";
import { numberWithCommas } from './../utils/utils';

const ModalKeranjang = ({ showModal, handleClose, keranjangDetail }) => {
  if (keranjangDetail) {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>
              {keranjangDetail.product.nama}{" "}
              <strong>
                  (Rp. {numberWithCommas(keranjangDetail.product.harga)})
              </strong>
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Woohoo, you're reading this text in a modal!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  } else {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Kosong</Modal.Title>
        </Modal.Header>
        <Modal.Body>Kosong</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
};

export default ModalKeranjang;
