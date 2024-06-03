import { Cta } from "@/src/components-common/ui-cta";
import styles from "./LinkForm.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";

const cx = classNames.bind(styles);

interface LinkFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const LinkForm: React.FC<LinkFormProps> = ({ onSubmit }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <div className={cx("container")}>
      <form className={cx("form")} onSubmit={handleSubmit}>
        <div className={cx("input-box")}>
          <Image
            className={cx("icon")}
            src="/images/link.svg"
            alt="링크 아이콘"
          />
          <input
            className={cx("input")}
            type="text"
            placeholder="링크를 추가해 보세요"
          />
        </div>
        <button className={cx("button")} type="submit">
          <Cta>추가하기</Cta>
        </button>
      </form>
    </div>
  );
};
