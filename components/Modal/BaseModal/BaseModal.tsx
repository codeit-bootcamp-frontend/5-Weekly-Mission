import React, { useEffect, useRef } from "react";
import * as S from "./BaseModal.styled";
import { useModal } from "@/contexts/ModalContext";

function BaseModal({
  children,
  state,
}: {
  children: React.ReactNode;
  state: string;
}) {
  const { closeModal } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal(`${state}`);
      }
    };
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal(`${state}`);
    });
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal(`${state}`);
      });
    };
  }, [closeModal, state]);

  return (
    <S.Background>
      <S.Body ref={modalRef}>
        {children}
        <S.CloseIcon
          src="/close.svg"
          alt="닫기버튼"
          onClick={() => closeModal(`${state}`)}
        />
      </S.Body>
    </S.Background>
  );
}

export default BaseModal;
