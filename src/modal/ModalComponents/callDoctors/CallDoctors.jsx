import React, { useContext } from "react";
import { CustomContext } from "../../../context/Context";
import ModalPortal from "../../../portals/ModalPortal";
import Modal from "../../Modal";
import CreateCallDoctor from "../../ModalElement/CreateNewCallDoctor/CreateCallDoctor";

const CallDoctorsModal = () => {
  const { isOpenModal, onOpenHeandler } = useContext(CustomContext);

  return isOpenModal ? (
    <ModalPortal>
      <Modal onClose={onOpenHeandler}>
        <CreateCallDoctor />
      </Modal>
    </ModalPortal>
  ) : null;
};

export default CallDoctorsModal;
