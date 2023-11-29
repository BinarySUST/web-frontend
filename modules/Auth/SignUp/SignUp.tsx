'use client';
import {Button} from '@/components/ui/button';
import {Form} from '@/components/ui/form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import InputField from '../SignUp/InputField';
import {SignUpSchemaType, signUpFormSchema} from './validation/SignUp';

export default function SignUp() {
  // Form Object
  const form = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: '',
      password: '',
      registration: '',
    },
  });

  function onSubmit(values: SignUpSchemaType) {
    // Form values are accessible here.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <InputField
            formControl={form.control}
            name="email"
            type="email"
            label="Email"
            description="Email"
            placeholder="Enter your BinarySUST Email"
          />
          <InputField
            formControl={form.control}
            name="registration"
            type="text"
            label="Registration"
            description="Registration"
            placeholder="Enter your SUST registration number"
          />
          <InputField
            formControl={form.control}
            name="password"
            type="password"
            label="Password"
            description="Password"
            placeholder="Enter your password"
          />
          <Button type="submit" className="max-w-max">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
