import { getLinksData } from '@/app/api/links'
import { FolderCard } from './folder-card'

export const FolderCards = async ({ folderId }: { folderId: string }) => {
  const folders = await getLinksData(folderId)

  if (!folders || folders.length === 0) {
    return (
      <div className='flex justify-center font-bold my-20'>
        <h2 className='text-2xl'>아직 글이 업로드 되지않았습니다.</h2>
      </div>
    )
  }

  return (
    <ul className='mt-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-8'>
      {folders.map((folder) => (
        <FolderCard
          key={folder.id}
          id={folder.id}
          title={folder.title || ''}
          imgUrl={folder.image_source}
          createdAt={folder.created_at}
          content={folder.description || ''}
        />
      ))}
    </ul>
  )
}
