type Props = {
  children: React.ReactNode
}

export const HeroWrapper = ({ children }: Props) => {
  return (
    <section className='bg-slate-100 flex flex-col items-center py-10'>
      {children}
    </section>
  )
}
