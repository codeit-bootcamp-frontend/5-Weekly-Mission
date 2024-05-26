import { JoinAccessControlBox } from '@/styles/loginStyle';
import LinkButton from '../common/atoms/LinkButton';

interface IAuthLink {
  desc: string;
  href: string;
  btnText: string;
}

export default function AuthLink({ desc, href, btnText }: IAuthLink) {
  return (
    <JoinAccessControlBox className='login__sign'>
      <span>{desc}</span>
      <LinkButton href={href}>{btnText}</LinkButton>
    </JoinAccessControlBox>
  );
}
