import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
} from '@/components/ui/form';
import {Input} from '@/components/ui/input';
import {SignUpSchemaType} from '@/lib/validation/SignUp';
import {Control} from 'react-hook-form';

type Props = {
  name: 'email' | 'password' | 'registration';
  label: string;
  type: string;
  placeholder: string;
  description: string;
  formControl: Control<SignUpSchemaType>;
};

export default function InputField(props: Props) {
  return (
    <FormField
      control={props.formControl}
      name={props.name}
      render={({field}) => (
        <FormItem>
          <FormLabel>{props.label}</FormLabel>
          <FormControl>
            <Input
              type={props.type}
              placeholder={props.placeholder}
              {...field}
            />
          </FormControl>
          <FormDescription>{props.description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
