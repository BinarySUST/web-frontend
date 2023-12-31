import SignIn from '@/modules/Auth/SignIn/SignIn';

export default function LoginPage() {
  return (
    <div>
      <h1 className="p-2 text-center text-lg">Login to BinarySUST</h1>
      <div className="mx-auto w-full max-w-md">
        <SignIn />
      </div>
    </div>
  );
}
