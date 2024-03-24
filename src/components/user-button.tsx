import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

type Props = {
  url: string
  size?: 'sm' | 'lg' | 'xl'
}

export const UserButton = ({ url, size }: Props) => {
  return (
    <Avatar
      className={cn(
        'h-8 w-8 cursor-pointer',
        size === 'sm' && 'h-6 w-6',
        size === 'lg' && 'h-12 w-12',
        size === 'xl' && 'h-16 w-16',
      )}
    >
      <AvatarImage src={url} />
      <AvatarFallback>U</AvatarFallback>
    </Avatar>
  )
}
