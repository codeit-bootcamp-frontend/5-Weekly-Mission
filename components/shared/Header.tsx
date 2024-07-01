import Image from 'next/image';
import noImage from '@/public/images/noImage.jpg';
import { User } from '@/api/user';

interface HeaderProps {
  userData?: User;
  folderName?: string;
}

function Header({ userData, folderName }: HeaderProps) {
  return (
    <header className='w-full bg-[#f0f6ff] flex justify-center mobile:h-[161px] tablet:h-[244px]'>
      <div className='flex flex-col justify-center items-center'>
        {userData && (
          <>
            <Image
              src={userData.image_source || noImage}
              width={60}
              height={60}
              alt='프로필'
              className='rounded-full mb-[15px] mobile:w-10 mobile:h-10 tablet:w-[60px] tablet:h-[60px]'
            />
            <span className='mb-5 mobile:text-sm tablet:text-base'>{userData.name}</span>
            <span className='mobile:text-[38px] tablet:text-[48px]'>{folderName}</span>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
