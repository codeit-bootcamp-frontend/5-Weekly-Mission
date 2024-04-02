import { cva } from 'class-variance-authority'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

type Props = {
  url: string
  size?: 'sm' | 'lg' | 'xl'
}

const avatarVariants = cva('cursor-pointer', {
  variants: {
    size: {
      sm: 'h-6 w-6',
      lg: 'h-12 w-12',
      xl: 'h-16 w-16',
      default: 'h-8 w-8',
    },
  },
  defaultVariants: {
    size: 'default',
  },
})

export const UserIcon = ({ url, size }: Props) => {
  return (
    <Avatar className={avatarVariants({ size })}>
      <AvatarImage src={url} />
      <AvatarFallback>U</AvatarFallback>
    </Avatar>
  )
}
