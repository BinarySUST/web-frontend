import SignUp from '@/modules/Auth/SignUp/SignUp';

export default function RegisterPage() {
  return (
    <div>
      <h1 className="p-2 text-center text-lg">Register BinarySUST account</h1>
      <div className="mx-auto w-full max-w-md">
        <SignUp />
      </div>
    </div>
  );
}
