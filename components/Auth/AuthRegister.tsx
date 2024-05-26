import { GOOGLE, KAKAO } from '@/src/constant/image.constant';
import Image from 'next/image';
import LinkButton from '../common/atoms/LinkButton';
import { FontSM } from '@/styles/commonStyle';
import { JoinSocial } from '@/styles/loginStyle';

const snsRegister = [GOOGLE, KAKAO];

export default function AuthRegister({ title }: { title: string }) {
  return (
    <JoinSocial>
      <FontSM as={'h6'}>{title}</FontSM>
      <div className='login__sns'>
        {snsRegister.map((sns) => (
          <LinkButton
            key={sns.NAME}
            href={sns.LINK}
            target='_blank'>
            <Image
              src={sns.CIRCLE_LOG}
              alt={sns.NAME}
              width={40}
              height={40}
            />
          </LinkButton>
        ))}
      </div>
    </JoinSocial>
  );
}
