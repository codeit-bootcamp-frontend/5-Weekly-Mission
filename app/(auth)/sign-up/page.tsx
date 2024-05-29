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
import { useState } from 'react'
import { Eye, EyeOff, TriangleAlert } from 'lucide-react'
import { useRouter } from 'next/navigation'

const formSchema = z
  .object({
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
    confirmPassword: z.string().min(1, {
      message: '비밀번호가 일치하지 않습니다.',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  })

const SignUpPage = () => {
  const router = useRouter()

  const [emailError, setEmailError] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { email, password, confirmPassword } = values
    try {
      await instance.post('/check-email', { email })
      router.push('/folder')
    } catch (error) {
      setEmailError(true)
      console.log(error)
    }
  }

  return (
    <div className='flex flex-col max-w-[350px] w-full'>
      <div className='flex flex-col items-center'>
        <Logo className='w-[200px]' />
        <p className='mt-3 text-sm'>
          이미 회원이신가요?
          <Link href='/sign-in'>
            <span className='ml-2 text-base underline text-indigo-500'>
              로그인하기
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
          <FormField
            control={form.control}
            name='confirmPassword'
            render={({ field }) => (
              <FormItem className='relative'>
                <FormLabel>비밀번호</FormLabel>
                <FormControl>
                  <Input
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder='******'
                    {...field}
                  />
                </FormControl>
                <button
                  onClick={() => setShowConfirmPassword((value) => !value)}
                  className='absolute top-9 right-3 transform cursor-pointer'
                >
                  {showConfirmPassword ? <EyeOff /> : <Eye />}
                </button>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className='mt-10' />
          {emailError && (
            <div className='bg-rose-200 rounded-lg flex items-center py-2 px-5'>
              <TriangleAlert className='text-rose-500' />
              <span className='ml-2 text-gray-500 text-sm'>
                이미 사용중인 이메일입니다.
              </span>
            </div>
          )}
          <Button type='submit' variant={'primary'} className='w-full py-6'>
            회원가입
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default SignUpPage
