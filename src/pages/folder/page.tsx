import { HeroWrapper } from '@/components/hero-warpper'
import { LinkSearchBar } from './_components/link-search-bar'
import { FeedWrapper } from '@/components/feed-wrapper'
import { SearchBar } from '@/components/search-bar'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { Loader, PlusIcon } from 'lucide-react'
import LinkCategoryButton from './_components/link-category-button'
import {
  Categories,
  UserLinks,
  getUserCategories,
  getUserLinks,
} from '@/data/users'
import { Skeleton } from '@/components/ui/skeleton'
import ActionButtonGroup from './_components/action-button-group'
import { CardWrapper } from '@/components/card-wrapper'
import { FolderCard } from '@/pages/folder/_components/folder-card'
import { SkeletonCard } from '@/pages/shared/_components/shard-card'
import { toast } from 'sonner'

const FolderPage = () => {
  const allCategories = '전체'
  const [selectedCategory, setSelectedCategory] = useState(allCategories)
  const [isLoading, setIsLoading] = useState(true)
  const [categories, setCategories] = useState<Categories>()
  const [links, setLinks] = useState<UserLinks>()

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const categories = await getUserCategories()
        const links = await getUserLinks()
        setCategories(categories)
        setLinks(links)
      } catch (error) {
        console.error('error:', error)
        toast.error('데이터를 불러오지 못했습니다.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <main className='py-20'>
      <HeroWrapper>
        <LinkSearchBar />
      </HeroWrapper>
      <FeedWrapper>
        <SearchBar />
        <div className='my-5 flex justify-between'>
          {isLoading ? (
            <div className='my-5 flex justify-between'>
              {Array.from({ length: 8 }, (_, index) => (
                <Skeleton key={index} className='h-9 w-14 mr-2' />
              ))}
            </div>
          ) : (
            categories && (
              <div className='space-y-3'>
                <LinkCategoryButton
                  category={allCategories}
                  selectedCategory={selectedCategory}
                  onClick={() => handleCategoryClick(allCategories)}
                />
                {categories.data.map((category) => (
                  <LinkCategoryButton
                    key={category.id}
                    category={category.name}
                    selectedCategory={selectedCategory}
                    onClick={() => handleCategoryClick(category.name)}
                  />
                ))}
              </div>
            )
          )}

          <Button
            variant='ghost'
            className='mt-3 text-sm text-violet-500'
            size='sm'
          >
            폴더 추가
            <PlusIcon className='h-5 w-5' />
          </Button>
        </div>
        <div className='flex justify-between'>
          {isLoading ? (
            <Loader className='animate-spin' />
          ) : (
            categories && (
              <>
                <h2 className='font-bold text-2xl'>{selectedCategory}</h2>
                {selectedCategory !== allCategories && <ActionButtonGroup />}
              </>
            )
          )}
        </div>
        <CardWrapper>
          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          ) : links && selectedCategory === allCategories ? (
            links.data.map((link) => (
              <FolderCard
                key={link.id}
                id={link.id}
                content={link.description}
                url={link.image_source}
                createdAt={link.created_at}
              />
            ))
          ) : (
            <div className='col-span-3 flex justify-center mb-56'>
              저장된 링크가 없습니다.
            </div>
          )}
        </CardWrapper>
      </FeedWrapper>
    </main>
  )
}

export default FolderPage
