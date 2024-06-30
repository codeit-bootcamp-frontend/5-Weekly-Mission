import { deleteLink } from "@/api/folder";
import Button from "@/components/common/Button";
import { UserInfoContext } from "@/context/User";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useContext } from "react";

interface ILinkDeleteContentProps {
  linkId: number;
}

const LinkDeleteContent = ({ linkId }: ILinkDeleteContentProps) => {
  const userInfo = useContext(UserInfoContext);
  const router = useRouter();

  const handleLinkDeleteBtnClick = () => {
    handleLinkDelete.mutate();
  };

  const handleLinkDelete = useMutation({
    mutationFn: () => {
      if (!userInfo || !userInfo.token) {
        return Promise.reject(new Error("UserToken Error!"));
      }
      return deleteLink(linkId, userInfo.token);
    },
    onSuccess: () => {
      alert("삭제 성공");
      router.reload();
    },
  });

  return (
    <Button
      type="linkDelete_modal"
      handleButtonClick={handleLinkDeleteBtnClick}
    >
      삭제하기
    </Button>
  );
};

export default LinkDeleteContent;
