'use client';
import {Button} from '@/components/ui/button';
import {Form} from '@/components/ui/form';
import {SignInSchemaType, formSchema} from '@/lib/validation/SignIn';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import InputField from '../Shared/InputField';

export default function SignIn() {
  // Form Object
  const form = useForm<SignInSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(values: SignInSchemaType) {
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
