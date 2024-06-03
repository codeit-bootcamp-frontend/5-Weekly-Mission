import { EditableCard } from "@/src/components-shared/ui-editable-card";
import { NoLink } from "@/src/components-shared/ui-no-link";
import React, { useCallback, useRef, useState } from "react";
import { forwardedCardList as UiCardList } from "@/src/components-shared/ui-card-list/CardList";
import { modalsId } from "./constant";
import { AlertModal } from "@/src/components-shared/ui-alert-modal";
import { AddLinkModal } from "@/src/components-shared/ui-addlink-modal";
import { useGetFolders } from "@/src/components-folder/data-access-folder";
import type { EditedSampleLink } from "../../../types/data-access-types";

type CardListProps = React.PropsWithChildren<{
  links: EditedSampleLink[] | undefined;
}>;

export interface getPopoverPositionType {
  (cardIndex: number): Record<string, number | undefined>;
}

export const CardList: React.FC<CardListProps> = ({ links }) => {
  const { folders } = useGetFolders();
  const cardListRef = useRef<HTMLDivElement | null>(null);
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const [currentModal, setCurrentModal] = useState<string | null>(null);
  const [selectedLinkUrl, setSelectedLinkUrl] = useState<string | null>(null);

  const closeModal = () => {
    setCurrentModal(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "escape") {
      closeModal();
    }
  };

  // NOTE: 팝오버 창이 케밥 버튼의 왼쪽, 오른쪽에 뜰지 화면 상에서 카드 위치를 기준으로 판단해주는 기능

  const getPopoverPosition: getPopoverPositionType = useCallback(
    (cardIndex) => {
      const count =
        cardListRef?.current !== null
          ? window
              .getComputedStyle(cardListRef?.current)
              .getPropertyValue("grid-template-columns")
              .split(" ").length
          : 1;
      if ((cardIndex + 1) % count === 0) {
        return { right: 0 };
      }
      return { left: 0 };
    },
    [cardListRef]
  );

  if (links?.length === 0) return <NoLink />;
  return (
    <UiCardList ref={cardListRef}>
      {links?.map((link, index) => (
        <EditableCard
          key={link?.id}
          {...link}
          popoverPosition={getPopoverPosition(index)}
          onDeleteClick={() => {
            setSelectedLinkUrl(link?.url);
            setCurrentModal(modalsId.deleteLink);
          }}
          onAddToFolderClick={() => {
            setSelectedLinkUrl(link?.url);
            setCurrentModal(modalsId.addToFolder);
          }}
        />
      ))}
      <AlertModal
        isOpen={currentModal === modalsId.deleteLink}
        title="링크 삭제"
        buttonText="삭제하기"
        selectedLinkUrl={selectedLinkUrl}
        onCloseClick={closeModal}
        onKeyDown={handleKeyDown}
      />
      <AddLinkModal
        isOpen={currentModal === modalsId.addToFolder}
        title="폴더에 추가"
        buttonText="추가하기"
        selectedLinkUrl={selectedLinkUrl}
        onCloseClick={closeModal}
        onKeyDown={handleKeyDown}
        selectedFolderId={selectedFolderId}
        setSelectedFolderId={setSelectedFolderId}
        folders={folders}
        onAddClick={() => {}} //TODO: 링크추가 기능 구현 시 완성할 것
      />
    </UiCardList>
  );
};
