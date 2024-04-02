import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
      <div className='text-5xl font-bold flex justify-center py-10'>
        현재 페이지는 존재하지 않는 페이지 입니다.
      </div>
      <hr />
      <div className='flex justify-center pt-10'>
        <Button variant='link' asChild>
          <Link to='/' className='text-3xl font-bold flex justify-center py-10'>
            홈페이지로 돌아가기
          </Link>
        </Button>
      </div>
    </>
  )
}

export default ErrorPage
