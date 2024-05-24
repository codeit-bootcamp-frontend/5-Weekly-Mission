import styles from "./ModalContentDescription.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type ModalContentDescriptionProps = React.PropsWithChildren<{}>;

export const ModalContentDescription: React.FC<
  ModalContentDescriptionProps
> = ({ children }) => {
  return <span className={cx("description")}>{children}</span>;
};
