type Props = {
  children: React.ReactNode
}

export const CardWrapper = ({ children }: Props) => {
  return (
    <div className='mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8'>
      {children}
    </div>
  )
}
