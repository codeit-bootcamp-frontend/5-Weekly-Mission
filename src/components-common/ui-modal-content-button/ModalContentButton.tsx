import styles from "./ModalContentButton.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type ModalContentButtonProps = React.PropsWithChildren<{
  onClick?: () => void; // TODO: 버튼 기능 구현 시 명확히 지정할 것
  themeColor?: string;
}>;

export const ModalContentButton: React.FC<ModalContentButtonProps> = ({
  children,
  onClick,
  themeColor = "blue",
}) => {
  return (
    <button className={cx("button", themeColor)} onClick={onClick}>
      {children}
    </button>
  );
};
