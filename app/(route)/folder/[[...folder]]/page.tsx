import { SearchBar } from '@/components/search-bar'
import { Hero } from './_components/hero'
import { CategoryButtons } from './_components/category-buttons'
import { AddFolderButton } from './_components/add-folder-button'
import { ControlButtons } from './_components/control-buttons'
import { FolderCards } from './_components/folder-cards'
import { getLinksData } from '@/app/api/links'

const FolderPage = async ({ params }: { params: { folder: string } }) => {
  // console.log(params.folder)

  return (
    <main className='pt-20'>
      <Hero />
      <section className='py-10 xl:w-[1200px] xl:mx-auto mx-10'>
        <SearchBar />
        <div className='mt-10 flex justify-between'>
          <CategoryButtons folderId={params.folder} />
          <AddFolderButton />
        </div>
        <div className='mt-5 flex justify-between'>
          <h2 className='text-xl font-bold'>유용한 글</h2>
          <ControlButtons />
        </div>
        <FolderCards folderId={params.folder} />
      </section>
    </main>
  )
}

export default FolderPage
