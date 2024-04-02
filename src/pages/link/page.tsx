import { useParams } from 'react-router-dom'

const LinkPage = () => {
  const params = useParams<{ linkId: string }>()

  return (
    <div className='pt-20 h-[90vh]'>
      <h1 className='text-5xl font-bold flex justify-center mt-40'>
        link id: <span className='text-red-500'>{params.linkId}</span>
      </h1>
    </div>
  )
}

export default LinkPage
