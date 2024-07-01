import shareIcon from '@/public/images/icons/shareIcon.png';
import facebookIcon from '@/public/images/icons/facebookIcon.png';
import kakaoIcon from '@/public/images/icons/kakaoIcon.png';
import Image from 'next/image';

interface ShareModalProps {
  subtitle?: string;
  shareKakao?: () => void;
  shareFacebook?: () => void;
  folderId?: number;
}

export default function ShareModal({ subtitle, shareKakao, shareFacebook, folderId }: ShareModalProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(location.href.replace(location.pathname, '') + '/shared/' + folderId).then(() => {
      alert('주소가 복사되었습니다.');
    });
  };

  return (
    <>
      <div className='flex justify-center w-full h-5 mt-2 text-sm leading-6 text-gray-500 break-all overflow-hidden'>
        {subtitle}
      </div>
      <div className='flex justify-center'>
        <div className='grid grid-cols-3 gap-8 mt-6'>
          <div className='flex flex-col justify-center items-center gap-2.5'>
            <Image src={kakaoIcon} alt='kakao share' onClick={shareKakao} className='w-10 h-10 cursor-pointer' />
            <span className='w-full text-center text-sm leading-4 tracking-tight'>카카오톡</span>
          </div>
          <div className='flex flex-col justify-center items-center gap-2.5'>
            <Image
              src={facebookIcon}
              alt='facebook share'
              onClick={shareFacebook}
              className='w-10 h-10 cursor-pointer'
            />
            <span className='w-full text-center text-sm leading-4 tracking-tight'>페이스북</span>
          </div>
          <div className='flex flex-col justify-center items-center gap-2.5'>
            <Image src={shareIcon} alt='link copy' onClick={handleCopy} className='w-10 h-10 cursor-pointer' />
            <span className='w-full text-center text-sm leading-4 tracking-tight'>링크 복사</span>
          </div>
        </div>
      </div>
    </>
  );
}
