'use client'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className='mt-8 max-w-[350px] w-full bg-slate-200 px-4 py-2 rounded-lg flex justify-between items-center border border-gray-300'>
      <span className='text-xs'>다른 방식으로 가입하기</span>
      <div className='flex items-center gap-x-3'>
        <a href='https://www.google.com'>
          <Image src={'/kakao.png'} alt={'kakao'} width={42} height={42} />
        </a>
        <a href='https://www.kakaocorp.com/page'>
          <Image src={'/google.png'} alt={'google'} width={42} height={42} />
        </a>
      </div>
    </footer>
  )
}
