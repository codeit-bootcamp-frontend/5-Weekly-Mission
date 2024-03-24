import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <>
      <div className='text-5xl font-bold flex justify-center py-10'>
        404 Not Found
      </div>
      <hr />
      <div className='flex justify-center pt-10'>
        <Button variant={'link'} asChild>
          <Link
            to={'/'}
            className='text-3xl font-bold flex justify-center py-10'
          >
            home from link
          </Link>
        </Button>
      </div>
    </>
  )
}

export default ErrorPage
