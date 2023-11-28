import {z} from 'zod';

export const formSchema = z.object({
  email: z.string().min(1, {
    message: 'Email must not be empty',
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.',
  }),
});

export type SignInSchemaType = z.infer<typeof formSchema>;
