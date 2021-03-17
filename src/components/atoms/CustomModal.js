import React from 'react';
import { Button, Modal,Row,Col, ModalBody } from 'reactstrap';

const CustomModal = (props) => {
  const {
    toggle,
    modal,
    body,
    className,
    action
  } = props;


  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className} centered>
        <ModalBody>
            <p className='file-text-large file-text-bold'>{body}</p>
        </ModalBody>
          <Row>
              <Col>
              <Button className='modal-button file-bg-primary' onClick={action}>Yes</Button>{' '}
              </Col>
              <Col>
              <Button className='modal-button'  onClick={toggle}>No</Button>
              </Col>
          </Row>
      </Modal>
    </div>
  );
}

export default CustomModal;