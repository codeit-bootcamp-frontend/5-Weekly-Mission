'use client'
import { Logo } from '@/components/logo'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import Link from 'next/link'
import { instance } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { createAccessToken } from '@/app/api/cookies'
import { toast } from 'sonner'

const formSchema = z.object({
  email: z.string().email({
    message: '이메일 형식으로 입력해 주세요.',
  }),
  password: z
    .string()
    .min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' })
    .regex(/[a-zA-Z]/, {
      message: '비밀번호에는 적어도 하나의 영문자가 포함되어야 합니다.',
    })
    .regex(/[0-9]/, {
      message: '비밀번호에는 적어도 하나의 숫자가 포함되어야 합니다.',
    }),
})

const SignUpPage = () => {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: 'test@codeit.com',
      password: 'sprint101',
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { email, password } = values
    try {
      const data = await instance.post('/sign-in', { email, password })
      const token = data.data.data.accessToken
      await createAccessToken(token)
      router.push('/folder')
    } catch (error) {
      console.log(error)
      toast.error('로그인에 실패하였습니다.')
    }
  }

  return (
    <div className='flex flex-col max-w-[350px] w-full'>
      <div className='flex flex-col items-center'>
        <Logo className='w-[200px]' />
        <p className='mt-3 text-sm'>
          회원이 아니신가요?
          <Link href='/sign-up'>
            <span className='ml-2 text-base underline text-indigo-500'>
              회원 가입하기
            </span>
          </Link>
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='mt-5 space-y-3'>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>이메일</FormLabel>
                <FormControl>
                  <Input placeholder='spfe0516@codeit.kr' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem className='relative'>
                <FormLabel>비밀번호</FormLabel>
                <FormControl>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='******'
                    {...field}
                  />
                </FormControl>
                <button
                  onClick={() => setShowPassword((value) => !value)}
                  className='absolute top-9 right-3 transform cursor-pointer'
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='mt-10' />
          <Button type='submit' variant={'primary'} className='w-full py-6'>
            로그인
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default SignUpPage
