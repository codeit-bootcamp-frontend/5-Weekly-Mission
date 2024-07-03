import React, {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import { useModal } from "@/contexts/ModalContext";
import * as S from "./KebabMenu.styled";

function KebabMenu({
  url,
  setUrl,
  setKebabView,
  kebabView,
  kebabIconRef,
}: {
  url: string;
  id: number;
  setUrl?: Dispatch<SetStateAction<string>>;
  setKebabView: Dispatch<SetStateAction<boolean>>;
  kebabView: boolean;
  kebabIconRef: RefObject<HTMLImageElement>;
}) {
  const kebabRef = useRef<HTMLObjectElement>(null);
  const { openModal } = useModal();

  const handleAddKebab = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    openModal("add");
    setUrl && setUrl(url);
  };

  const handleDeleteKebab = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.preventDefault();
    openModal("deleteLink");
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (kebabRef.current && !kebabRef.current.contains(e.target as Node)) {
        if (kebabIconRef.current?.contains(e.target as Node)) {
          return;
        }
        setKebabView(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setKebabView, kebabView, kebabIconRef]);

  return (
    <>
      <S.ModalBody ref={kebabRef}>
        <S.ModalButton onClick={handleDeleteKebab}>삭제하기</S.ModalButton>
        <S.ModalButton onClick={handleAddKebab}>폴더에 추가</S.ModalButton>
      </S.ModalBody>
    </>
  );
}

export default KebabMenu;
