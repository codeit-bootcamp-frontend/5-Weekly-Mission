import { cookies } from 'next/headers'
import { Footer } from './_components/footer'
import { redirect } from 'next/navigation'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('accessToken')
  if (!!accessToken) return redirect('/')
  return (
    <main className='h-screen w-full flex flex-col justify-center items-center bg-slate-100'>
      {children}
      <Footer />
    </main>
  )
}

export default AuthLayout
