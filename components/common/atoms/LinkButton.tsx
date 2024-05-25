import { LinkModule } from './LinkButtonStyle';
interface IButtonModule {
  children: React.ReactNode;
  href: string;
  linkClass?: string;
  target?: string;
}

export default function LinkButton({ children, href, linkClass, target = '_self' }: IButtonModule) {
  return (
    <LinkModule
      href={href}
      className={linkClass}
      target={target}>
      {children}
    </LinkModule>
  );
}
