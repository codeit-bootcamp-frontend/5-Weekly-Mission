import styles from "./LinkForm.module.scss";
import classNames from "classnames/bind";
import { useGetFolders } from "@/src/data-access";
import { LinkForm as UiLinkForm, AddLinkModal } from "@/src/ui";
import {
  ChangeEvent,
  KeyboardEventHandler,
  useCallback,
  useMemo,
  useState,
} from "react";
import { useIntersectionObserver } from "@/src/util";
import { SelectedFolderId } from "@/src/type";
import { useAddLink } from "@/src/data-access";

const cx = classNames.bind(styles);

type LinkFormProps = {
  currentFolderId?: SelectedFolderId;
  hideFixedLinkForm?: boolean;
};

export const LinkForm = ({
  hideFixedLinkForm = false,
  currentFolderId,
}: LinkFormProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: folders } = useGetFolders();
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const { mutate: addLink } = useAddLink(currentFolderId);
  const [linkUrl, setLinkUrl] = useState<string>("");
  const { ref, isIntersecting } = useIntersectionObserver<HTMLFormElement>();
  const showFixedLinkForm = !hideFixedLinkForm && !isIntersecting;

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setLinkUrl(event.target.value);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedFolderId(null);
    setIsModalOpen(false);
  }, []);

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  const handleAddClick = () => {
    if (typeof selectedFolderId === "number") {
      addLink(
        { url: linkUrl, folderId: selectedFolderId },
        {
          onSuccess: () => {
            closeModal();
            setLinkUrl("");
          },
        }
      );
    }
  };

  return (
    <div className={cx("container")}>
      <UiLinkForm
        ref={ref}
        onSubmit={() => setIsModalOpen(true)}
        value={linkUrl}
        onChange={handleChange}
      />
      <AddLinkModal
        isOpen={isModalOpen}
        folders={folders}
        description={linkUrl}
        selectedFolderId={selectedFolderId}
        setSelectedFolderId={setSelectedFolderId}
        onAddClick={handleAddClick}
        onCloseClick={closeModal}
        onKeyDown={handleKeyDown}
      />

      {showFixedLinkForm && (
        <div className={cx("container", "fixed")}>
          <UiLinkForm
            onSubmit={() => setIsModalOpen(true)}
            value={linkUrl}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
};
