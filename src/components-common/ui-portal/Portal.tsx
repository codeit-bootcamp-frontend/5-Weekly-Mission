import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";

type PortalProps = React.PropsWithChildren<{
  container?: HTMLElement | null;
}>;

export const Portal: React.FC<PortalProps> = ({ children, container }) => {
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    setMountNode(container || document.body);
  }, [container]);

  return mountNode ? createPortal(children, mountNode) : mountNode;
};

// NOTE: container 는 케밥 버튼을 참조하는 useRef 객체.
// createPortal 의 두 번째 인수는 POPOVER 을 추가할 DOM 요소의 위치이다.
// 이렇게 하면 케밥 버튼 근처에 POPOVER 를 렌더링할 수 있음. 즉, useRef 객체가 anchor 역할을 함.
