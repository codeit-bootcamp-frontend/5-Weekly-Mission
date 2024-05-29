'use client'

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Pencil, Share, Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const ControlButtons = () => {
  return (
    <div className='flex'>
      <AlertDialog>
        <Button asChild className='text-indigo-400' variant='ghost' size='sm'>
          <AlertDialogTrigger>
            <Share className='h-4 w-4' />
            <span className='ml-1'>공유</span>
          </AlertDialogTrigger>
        </Button>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>폴더 공유</AlertDialogTitle>
            <AlertDialogDescription>
              폴더를 SNS에 공유해 보세요!
            </AlertDialogDescription>
            <div className='pt-5 grid grid-cols-3 gap-4 px-20'>
              <div className='flex flex-col items-center justify-center'>
                <img
                  src='/kakao1.png'
                  alt='kakao'
                  className='w-14 h-14 object-contain'
                />
                <div className='mt-2 text-center'>카카오톡</div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <img
                  src='/facebook1.png'
                  alt='facebook'
                  className='w-14 h-14 object-contain'
                />
                <div className='mt-2 text-center'>페이스북</div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <img
                  src='/link1.png'
                  alt='link'
                  className='w-14 h-14 object-contain'
                />
                <div className='mt-2 text-center'>링크 복사</div>
              </div>
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter className='grid grid-cols-1'>
            <AlertDialogCancel>취소</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog>
        <Button asChild className='text-indigo-400' variant='ghost' size='sm'>
          <AlertDialogTrigger>
            <Pencil className='h-4 w-4' />
            <span className='ml-1'>이름 변경</span>
          </AlertDialogTrigger>
        </Button>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>폴더 이름 변경</AlertDialogTitle>
            <AlertDialogDescription>
              폴더의 이름을 변경해 보세요!
            </AlertDialogDescription>
            <Input placeholder='내용 입력' />
          </AlertDialogHeader>
          <AlertDialogFooter className='grid grid-cols-2'>
            <AlertDialogCancel>취소</AlertDialogCancel>
            <Button variant='primary'>변경하기</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Button className='text-indigo-400' variant='ghost' size='sm'>
        <Trash2 className='h-4 w-4' />
        <span className='ml-1'>삭제</span>
      </Button>
    </div>
  )
}
