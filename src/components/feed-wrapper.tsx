type Props = {
  children: React.ReactNode
}

export const FeedWrapper = ({ children }: Props) => {
  return (
    <section className='lg:w-[1024px] lg:px-0 md:px-14 px-10 w-full mt-10 mx-auto'>
      {children}
    </section>
  )
}
