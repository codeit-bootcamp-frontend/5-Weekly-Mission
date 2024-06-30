import { useContext } from "react";
import { ModalSetterContext } from "@/context/Modal";
import { ModalParam } from "@/types/Modal";

export default function useModal() {
  const setModalState = useContext(ModalSetterContext);

  const openModal = ({ props, component }: ModalParam) => {
    setModalState({ props, component });
  };

  const closeModal = () => {
    setModalState(null);
  };

  return { openModal, closeModal };
}
