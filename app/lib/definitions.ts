import z from 'zod';

export const SignInFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: '이메일을 입력해주세요' })
    .email({ message: '올바른 이메일 형식이 아닙니다' }),

  password: z
    .string()
    .min(1, { message: '비밀번호를 입력해주세요' })
    .min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' }),
});

export type SignInFormFields = z.infer<typeof SignInFormSchema>;

export const SignUpFormSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: '이메일을 입력해주세요' })
      .email({ message: '올바른 이메일 형식이 아닙니다' }),

    password: z
      .string()
      .min(1, { message: '비밀번호를 입력해주세요' })
      .min(8, {
        message: '비밀번호는 최소 8자 이상 영문, 숫자 조합이어야 합니다.',
      })
      .regex(/^(?=.*[A-Za-z])(?=.*\d).{8,}$/, {
        message: '비밀번호는 영문과 조합이어야 합니다',
      }),

    confirmPassword: z.string().min(1, { message: '비밀번호를 입력해주세요' }),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });

export type SignUpFormFields = z.infer<typeof SignUpFormSchema>;
