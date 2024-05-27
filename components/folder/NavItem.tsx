import Link from "next/link";
import * as S from "./NavItem.styled";
import { useRouter } from "next/router";

interface NavItemProps {
  navName?: string;
  navId?: number;
  //onClick: (navId: number) => void;
  isCurrentNav: boolean;
}

const NavItem = ({ navName, navId, isCurrentNav }: NavItemProps) => {
  const navUrl = navId ? `/folder/${navId}` : "/folder";
  return (
    <S.NavItem
      href={navUrl}
      className={isCurrentNav ? "current-nav" : undefined}
    >
      {navName}
    </S.NavItem>
  );
};

export default NavItem;
