import React, { useContext } from "react";
import { CustomContext } from "../../../context/Context";
import ModalPortal from "../../../portals/ModalPortal";
import Modal from "../../Modal";
import CreateCall from "../../ModalElement/CreateCallBack/CreateCall";
const CallBack = () => {
  const { isCallBack, onOpenCallBackHeandler } = useContext(CustomContext);

  return isCallBack ? (
    <ModalPortal>
      <Modal onClose={onOpenCallBackHeandler}>
        <CreateCall />
      </Modal>
    </ModalPortal>
  ) : null;
};

export default CallBack;
