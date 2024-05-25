import { snsShare } from '@/src/constant/share';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from '../common/atoms/Button';
import { ShareBox } from './shareStyle';

function ShareModal() {
  const router = useRouter();
  const { id } = router.query;

  const handlerSns = (snsId: string) => {
    if (snsId === 'sh_link') {
      navigator.clipboard.writeText(`${window.location.host}/shared/${id}`);
      alert('주소를 복사하였습니다.');
    } else if (snsId === 'sh_kakao') {
      // 추후 작업 예정..
    } else if (snsId === 'sh_face') {
      // 추후 작업 예정..
    }
  };
  return (
    <ShareBox>
      {snsShare.map((sns) => (
        <Button
          key={sns.id}
          btnClass={'button--sns-share'}
          onclick={() => handlerSns(sns.id)}>
          <Image
            src={sns.src}
            alt={sns.name}
            width={42}
            height={42}
          />
          <span className='share--text'>{sns.name}</span>
        </Button>
      ))}
    </ShareBox>
  );
}
export default ShareModal;
