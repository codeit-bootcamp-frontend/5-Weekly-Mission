import { ShardCard } from '@/pages/shared/_components/shard-card'
import { Link } from '@/data/folders'

type Props = {
  links: Link[]
}

export const LinkCardList = ({ links }: Props) => {
  if (links) {
    return links.map((link) => (
      <ShardCard
        key={link.id}
        id={link.id}
        content={link.description}
        url={link.imageSource!}
        createdAt={link.createdAt}
      />
    ))
  }
  return (
    <p className='col-span-3 flex justify-center my-10'>
      저장된 링크가 없습니다.
    </p>
  )
}
