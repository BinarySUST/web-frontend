import {z} from 'zod';

export const signUpFormSchema = z.object({
  email: z.string().min(1, {
    message: 'Email must not be empty',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
  registration: z
    .string()
    .min(10, {
      message: 'Registration number cannot be less than 10 digits',
    })
    .max(10, {
      message: 'Registration number cannot be more than 10 digits',
    }),
});

export type SignUpSchemaType = z.infer<typeof signUpFormSchema>;
