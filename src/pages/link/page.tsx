import { useParams } from 'react-router-dom'

const LinkPage = () => {
  const params = useParams<{ linkId: string }>()
  return (
    <div className='flex justify-center pt-20'>
      <h1 className='text-5xl font-bold'>
        link id: <span className='text-red-500'>{params.linkId}</span>
      </h1>
    </div>
  )
}

export default LinkPage
