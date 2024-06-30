import { deleteFolder } from "@/api/folder";
import Button from "@/components/common/Button";
import { UserInfoContext } from "@/context/User";
import useModal from "@/hooks/useModal";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useContext } from "react";

interface IFolderDeleteContentProps {
  pageNavId: string | string[];
}

const FolderDeleteContent = ({ pageNavId }: IFolderDeleteContentProps) => {
  const userInfo = useContext(UserInfoContext);
  const router = useRouter();
  const { closeModal } = useModal();

  const handleFolderDeleteBtnClick = () => {
    handleFolderDelete.mutate();
  };

  const handleFolderDelete = useMutation({
    mutationFn: () => {
      if (!userInfo || !userInfo.token) {
        return Promise.reject(new Error("UserToken Error!"));
      }
      return deleteFolder(pageNavId, userInfo.token);
    },
    onSuccess: () => {
      alert("삭제 성공");
      closeModal();
      router.replace("/folder");
    },
  });

  return (
    <Button
      btnType="button"
      type="folderDelete_modal"
      handleButtonClick={handleFolderDeleteBtnClick}
    >
      삭제하기
    </Button>
  );
};

export default FolderDeleteContent;
