import styles from "./AddFolderButton.module.scss";
import classNames from "classnames/bind";
import AddIcon from "./add.svg"; // TODO: IMAGE 컴포넌트로

const cx = classNames.bind(styles);

interface AddFolderButtonProps {
  onClick: () => void;
}

export const AddFolderButton: React.FC<AddFolderButtonProps> = ({
  onClick,
}) => {
  return (
    <button className={cx("container")} onClick={onClick}>
      {" "}
      <span>폴더 추가</span>
      <AddIcon className={cx("icon")} />
    </button>
  );
};
