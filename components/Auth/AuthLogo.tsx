import { JoinTitle } from '@/styles/loginStyle';
import LinkButton from '../common/atoms/LinkButton';
import Image from 'next/image';
import { LINKBRARY_LOGO } from '@/src/constant/image.constant';

export default function AuthLogo() {
  return (
    <JoinTitle>
      <LinkButton href={`/`}>
        <Image
          src={LINKBRARY_LOGO}
          alt='linkbrary'
          width={202}
          height={38}
        />
      </LinkButton>
    </JoinTitle>
  );
}
