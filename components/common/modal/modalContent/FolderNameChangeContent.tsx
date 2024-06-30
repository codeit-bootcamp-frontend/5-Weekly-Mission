import { UserInfoContext } from "@/context/User";
import { useState, useContext } from "react";
import * as S from "./FolderNameChangeContent.styled";
import Button from "@/components/common/Button";
import { useMutation } from "@tanstack/react-query";
import { changeFolderName } from "@/api/folder";

interface FolderNameChangeContentProps {
  navName: string;
  pageNavId: string | string[];
}

const FolderNameChangeContent = ({
  navName,
  pageNavId,
}: FolderNameChangeContentProps) => {
  const [folderName, setFolderName] = useState(navName);
  const userInfo = useContext(UserInfoContext);

  const changeInputFolderName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFolderName(e.target.value);
  };

  const handleFolderChange = useMutation({
    mutationFn: () => {
      if (!userInfo || !userInfo.token) {
        return Promise.reject(new Error("UserToken Error!"));
      }
      return changeFolderName(pageNavId, folderName, userInfo.token);
    },
    onSuccess: () => {
      alert("이름 변경 성공");
      window.location.reload();
    },
  });

  const handleFolderChangeBtnClick = () => {
    if (folderName.trim() === "") {
      alert("폴더 이름 입력");
      return;
    }
    handleFolderChange.mutate();
  };

  return (
    <S.FolderNameChangeContent>
      <input
        type="text"
        value={folderName}
        placeholder="내용 입력"
        onChange={changeInputFolderName}
      />
      <Button
        type="folderNameChange_modal"
        handleButtonClick={handleFolderChangeBtnClick}
      >
        변경하기
      </Button>
    </S.FolderNameChangeContent>
  );
};

export default FolderNameChangeContent;
