import styles from "./Layout.module.scss";
import classNames from "classnames/bind";
import { useGetUser } from "@/src/data-access";
import { Footer, Nav } from "./parts";
import { ReactNode, RefObject } from "react";
import { useGetCurrentUser } from "@/src/data-access";

const cx = classNames.bind(styles);

type LayoutProps = {
  children: ReactNode;
  isSticky?: boolean;
  footerRef?: RefObject<HTMLElement>;
};

/**
 * Layout 컴포넌트는 애플리케이션의 기본 레이아웃을 제공하며, 네비게이션 바와 푸터를 포함합니다.
 *
 * @component
 * @example
 * return (
 *   <Layout>
 *     <div>페이지 내용</div>
 *   </Layout>
 * );
 *
 * @param {Object} props - 속성 객체입니다.
 * @param {ReactNode} props.children - 레이아웃 내부에 렌더링될 자식 요소입니다.
 * @param {boolean} [props.isSticky=true] - 네비게이션 바가 고정(sticky)되는지 여부를 나타냅니다.
 * @param {RefObject<HTMLElement>} [props.footerRef] - 푸터 요소에 전달할 ref입니다.
 *
 * @returns {JSX.Element} 네비게이션 바와 푸터를 포함하는 기본 레이아웃 컴포넌트입니다.
 */
export const Layout = ({ children, isSticky = true, footerRef }: LayoutProps) => {
	const { data } = useGetCurrentUser();
	const { email, imageSource } = data;
	const profile = data ? { email, imageSource } : null;
  
	return (
	  <div>
		<Nav profile={profile} isSticky={isSticky} />
		<main className={cx("main")}>{children}</main>
		<Footer ref={footerRef} />
	  </div>
	);
  };
  