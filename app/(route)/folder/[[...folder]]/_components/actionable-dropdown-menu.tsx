import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Ellipsis } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'

type Props = {
  title: string
}

const ActionableDropdownMenu = ({ title }: Props) => {
  const [showAddFolderDialog, setShowAddFolderDialog] = useState(false)
  const [showDeleteFolderDialog, setShowDeleteFolderDialog] = useState(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='outline-none '>
        <Ellipsis className='h-5 w-5 text-gray-500 hover:text-gray-800' />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={(event: React.MouseEvent) => event.preventDefault()}
          className='flex justify-center cursor-pointer'
        >
          <button onClick={() => setShowAddFolderDialog(true)}>
            폴더에 추가
          </button>
        </DropdownMenuItem>

        <DropdownMenuItem
          className='flex justify-center cursor-pointer'
          onClick={(event: React.MouseEvent) => event.preventDefault()}
        >
          <button onClick={() => setShowDeleteFolderDialog(true)}>
            삭제하기
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>

      {/* 추가 폴더 다이얼로그 */}
      {showAddFolderDialog && (
        <AlertDialog>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>폴더 추가</AlertDialogTitle>
              <AlertDialogDescription>
                원하는 폴더를 추가해 보세요!
              </AlertDialogDescription>
              <Input placeholder='내용 입력' />
            </AlertDialogHeader>
            <AlertDialogFooter className='grid grid-cols-2'>
              <AlertDialogCancel onClick={() => setShowAddFolderDialog(false)}>
                취소
              </AlertDialogCancel>
              <Button variant='primary'>추가하기</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}

      {/* 삭제 폴더 다이얼로그 */}
      {showDeleteFolderDialog && (
        <AlertDialog>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>폴더 삭제</AlertDialogTitle>
              <AlertDialogDescription>
                정말로
                <span className='font-bold text-indigo-500 mx-1'>{title}</span>
                폴더를 삭제 하시겠습니까?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className='grid grid-cols-2'>
              <AlertDialogCancel
                onClick={() => setShowDeleteFolderDialog(false)}
              >
                취소
              </AlertDialogCancel>
              <Button variant='destructive'>삭제하기</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </DropdownMenu>
  )
}

export default ActionableDropdownMenu
