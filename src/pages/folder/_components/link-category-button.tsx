import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Props = {
  category: string
  selectedCategory: string
  onClick: () => void
}

const LinkCategoryButton = ({ category, selectedCategory, onClick }: Props) => (
  <Button
    onClick={onClick}
    size='sm'
    variant='outline'
    className={cn(
      'mr-2',
      selectedCategory === category &&
        'bg-violet-400 text-white border-none hover:bg-violet-400/90 hover:text-white',
    )}
  >
    {category}
  </Button>
)

export default LinkCategoryButton
