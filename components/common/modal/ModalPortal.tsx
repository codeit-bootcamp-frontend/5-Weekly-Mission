import { useContext } from "react";
import { createPortal } from "react-dom";
import { ModalStateContext } from "@/context/Modal";
import ModalLayOut from "./ModalLayout";
import { TModalParam } from "@/types/Modal";

function MoadlPortal() {
  const modalParam: TModalParam = useContext(ModalStateContext);
  if (!modalParam) {
    return null;
  }

  const { props, component } = modalParam;

  return createPortal(
    <>
      <ModalLayOut title={props.title} subTitle={props.subTitle}>
        {component}
      </ModalLayOut>
    </>,
    document.getElementById("modal") as HTMLElement
  );
}

export default MoadlPortal;
