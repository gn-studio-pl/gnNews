import axios from 'axios';
import React, { SetStateAction, useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

type Props = {
  setContent: (value: any) => void;
  content: any;
  modal: boolean;
  setModal: (value: boolean) => void;
};
const NewsModal = ({ content, modal, setModal, setContent }: Props) => {
  const toggle = () => setModal(!modal);

  return (
    <div className="h-75">
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader
          toggle={() => {
            toggle();
            setContent('');
          }}
        >
          Tytuł modala
        </ModalHeader>
        <ModalBody style={{ height: 'auto' }}>
          <iframe src={content} width="100%" height="100%" title="Article content" />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Zamknij
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default NewsModal;
