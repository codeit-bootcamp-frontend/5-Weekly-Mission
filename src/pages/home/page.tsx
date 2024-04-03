import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div className='py-20 flex flex-col gap-y-5 justify-center items-center'>
      <h1 className='text-5xl mt-20'>Home Page</h1>
      <Button asChild>
        <Link to={'/folder'}>folder page</Link>
      </Button>
      <Button asChild>
        <Link to={'/shared'}>shared page</Link>
      </Button>
    </div>
  )
}

export default HomePage
