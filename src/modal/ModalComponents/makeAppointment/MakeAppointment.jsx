import React, { useContext } from "react";
import { CustomContext } from "../../../context/Context";
import ModalPortal from "../../../portals/ModalPortal";
import Modal from "../../Modal";
import CreateAppointment from "../../ModalElement/CreateNewAppointment/CreateAppointment";

const MakeAppointment = () => {
  const { isOpenMaker, onOpenMakerHeandler } = useContext(CustomContext);

  return isOpenMaker ? (
    <ModalPortal>
      <Modal onClose={onOpenMakerHeandler}>
        <CreateAppointment />
      </Modal>
    </ModalPortal>
  ) : null;
};

export default MakeAppointment;
