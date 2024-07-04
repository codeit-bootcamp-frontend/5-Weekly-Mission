import { useGetFolders } from "@/src/data-access";
import { KeyboardEventHandler, useCallback, useRef, useState } from "react";
import {
  AlertModal,
  AddLinkModal,
  CardList as UiCardList,
  EditableCard,
  NoLink,
} from "@/src/ui";
import { MODALS_ID, DEFAULT_LINK } from "./constant";
import { Link } from "@/src/type";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames/bind";
import styles from "./modal-animation.module.scss";
import { SelectedFolderId } from "@/src/type";
import { useAddLink, useDeleteLink } from "@/src/data-access";

const cx = classNames.bind(styles);

type CardListProps = {
  links: Link[];
  currentFolderId?: SelectedFolderId;
};

export const CardList = ({ links, currentFolderId }: CardListProps) => {
  const { data: folders } = useGetFolders();
  const cardListRef = useRef<HTMLDivElement>(null);
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const [currentModal, setCurrentModal] = useState<string | null>(null);
  const [selectedLink, setSelectedLink] = useState<{
    linkId: number;
    url: string;
  }>(DEFAULT_LINK);
  const { mutate: addLink } = useAddLink(currentFolderId);
  const { mutate: deleteLink } = useDeleteLink(currentFolderId);

  const closeModal = () => setCurrentModal(null);
  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  const getPopoverPosition = useCallback(
    (cardIndex: number) => {
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

  const handleDeleteClick = () => {
    deleteLink(
      { linkId: selectedLink.linkId },
      {
        onSuccess: () => {
          closeModal();
          setSelectedLink(DEFAULT_LINK);
        },
      }
    );
  };
  const handleAddClick = () => {
    if (typeof selectedFolderId === "number") {
      addLink(
        { url: selectedLink.url, folderId: selectedFolderId },
        {
          onSuccess: () => {
            closeModal();
            setSelectedLink(DEFAULT_LINK);
          },
        }
      );
    }
  };

  if (links.length === 0) return <NoLink />;

  return (
    <UiCardList ref={cardListRef}>
      {links.map((link, index) => (
        <EditableCard
          key={link?.id}
          {...link}
          popoverPosition={getPopoverPosition(index)}
          onDeleteClick={() => {
            setSelectedLink({ url: link?.url ?? "", linkId: link?.id ?? 0 });
            setCurrentModal(MODALS_ID.deleteLink);
          }}
          onAddToFolderClick={() => {
            setSelectedLink({ url: link?.url ?? "", linkId: link?.id ?? 0 });
            setCurrentModal(MODALS_ID.addToFolder);
          }}
        />
      ))}
      <CSSTransition
        in={currentModal === MODALS_ID.deleteLink}
        timeout={300}
        classNames={{
          enter: cx("modal-enter"),
          enterActive: cx("modal-enter-active"),
          exit: cx("modal-exit"),
          exitActive: cx("modal-exit-active"),
        }}
        unmountOnExit
      >
        <AlertModal
          isOpen={currentModal === MODALS_ID.deleteLink}
          title="링크 삭제"
          description={selectedLink.url}
          buttonText="삭제하기"
          onClick={handleDeleteClick}
          onCloseClick={closeModal}
          onKeyDown={handleKeyDown}
        />
      </CSSTransition>
      <CSSTransition
        in={currentModal === MODALS_ID.addToFolder}
        timeout={300}
        classNames={{
          enter: cx("modal-enter"),
          enterActive: cx("modal-enter-active"),
          exit: cx("modal-exit"),
          exitActive: cx("modal-exit-active"),
        }}
        unmountOnExit
      >
        <AddLinkModal
          isOpen={currentModal === MODALS_ID.addToFolder}
          folders={folders}
          description={selectedLink.url}
          selectedFolderId={selectedFolderId}
          setSelectedFolderId={setSelectedFolderId}
          onAddClick={handleAddClick}
          onCloseClick={() => {
            setSelectedFolderId(null);
            closeModal();
          }}
          onKeyDown={handleKeyDown}
        />
      </CSSTransition>
    </UiCardList>
  );
};
