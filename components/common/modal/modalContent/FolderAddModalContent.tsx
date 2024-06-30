import { useContext, useState } from "react";
import * as S from "./FolderAddModalContent.styled";
import Button from "@/components/common/Button";
import { useMutation } from "@tanstack/react-query";
import { addFolder } from "@/api/folder";
import { UserInfoContext } from "@/context/User";

const FolderAddModalContent = () => {
  const [folderName, setFolderName] = useState("");
  const userInfo = useContext(UserInfoContext);

  const changeInputFolderName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFolderName(e.target.value);
  };

  const handleFolderAdd = useMutation({
    mutationFn: () => {
      if (!userInfo || !userInfo.token) {
        return Promise.reject(new Error("UserToken Error!"));
      }
      return addFolder(folderName, userInfo.token);
    },
    onSuccess: () => {
      alert("폴더 추가 성공");
      window.location.reload();
    },
  });

  const handleFolderAddBtnClick = () => {
    if (folderName.trim() === "") {
      alert("폴더 이름 입력");
      return;
    }
    handleFolderAdd.mutate();
  };

  return (
    <S.FolderAddContent>
      <input
        type="text"
        value={folderName}
        placeholder="내용 입력"
        onChange={changeInputFolderName}
      />
      <Button
        btnType="button"
        type="folderAdd_modal"
        handleButtonClick={handleFolderAddBtnClick}
      >
        추가하기
      </Button>
    </S.FolderAddContent>
  );
};

export default FolderAddModalContent;
