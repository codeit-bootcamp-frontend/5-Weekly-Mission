import {
  LinkFormTemplate,
  Form,
  InputBox,
  LinkIcon,
  InputField,
} from "./design";
import { Button, ButtonLabel } from "components/button";
import IconImg from "./imgSrc/link.svg";
import { useState } from "react";
import { useGetFolders } from "Folder_and_Shared/data-access";
import { useIntersectionObserver } from "Folder_and_Shared/util/useIntersectionObserver.ts";
import { AddLinkModal } from "Folder_and_Shared/feature";
import {
  ChangeEvent,
  ChangeEventHandler,
  FormEventHandler,
  KeyboardEventHandler,
} from "react";

type LinkFormProps = {
  hideFixedLinkForm?: boolean;
};

export const LinkForm = function ({
  hideFixedLinkForm = false,
}: LinkFormProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: folders } = useGetFolders();
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const [linkUrl, setLinkUrl] = useState<string>("");
  const { ref, isIntersecting } = useIntersectionObserver<HTMLFormElement>();
  const showFixedLinkForm = !hideFixedLinkForm && !isIntersecting;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLinkUrl(event.target.value);
  };

  const closeModal = () => {
    setSelectedFolderId(null);
    setIsModalOpen(false);
  };
  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <LinkFormTemplate>
      <Form
        ref={ref}
        onSubmit={handleSubmit}
      >
        <InputBox>
          <LinkIcon src={IconImg} alt="링크 아이콘" />
          <InputField
            type="text"
            placeholder={"링크를 추가해 보세요"}
            value={linkUrl}
            onChange={handleChange}
          />
        </InputBox>
        <Button type="submit">
          <ButtonLabel>추가하기</ButtonLabel>
        </Button>
      </Form>

	  <AddLinkModal
        isOpen={isModalOpen}
        folders={folders}
        description={linkUrl}
        selectedFolderId={selectedFolderId}
        setSelectedFolderId={setSelectedFolderId}
        onAddClick={() => {}}
        onCloseClick={closeModal}
        onKeyDown={handleKeyDown}
      />
    </LinkFormTemplate>
  );
};
