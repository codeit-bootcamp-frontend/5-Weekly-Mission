import { forwardRef } from "react";
import styles from "./CardList.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

// QUESTION: forwardRef 란 훅을 쓰면서까지 레이아웃을 따로 컴포넌트로 떼어놓은 이유가 뭘까?
// QUESTION: ref 를 {} 밖으로 받으면 {ref: cardListRef} 란 객체가 담길텐데 문제되는 게 없을까?
// 이때 ref는 props 객체의 속성이 아니고, 함수의 두 번째 인자로 전달됩니다. 따라서 { children, ref }와 같은 구조분해 할당이 아니라, children은 props에서 추출하고, ref는 별도로 받는 것입니다.

type CardListProps = React.PropsWithChildren<{}>;

const CardList: React.ForwardRefRenderFunction<
  HTMLDivElement,
  CardListProps
> = ({ children }, ref) => {
  return (
    <div ref={ref} className={cx("container")}>
      {children}
    </div>
  );
};

const forwardedCardList = forwardRef(CardList);

export { forwardedCardList };
