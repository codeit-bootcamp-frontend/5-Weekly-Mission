export const Footer = () => {
  return (
    <footer className='relative bg-slate-800 lg:px-20 md:px-10 px-5 pb-20'>
      <div className='flex justify-between pt-8'>
        <div className='absolute top-20 md:static text-muted-foreground'>
          @codeit-2023
        </div>
        <div className='text-white font-semibold'>
          <span>Privacy Policy</span>
          <span className='ml-4'>FAQ</span>
        </div>
        <div className='flex items-center gap-x-2'>
          <img src='/facebook.png' />
          <img src='/twitter.png' />
          <img src='/youtube.png' />
          <img src='/insta.png' />
        </div>
      </div>
    </footer>
  )
}
