import Home from '@/modules/Home/Home';

export default function HomePage() {
  return (
    <main>
      <h1 className="h1">Binary SUST</h1>
      <p>Technology for real life</p>
      <Home />
      <button className="bg-sky-500 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
        Click me
      </button>
    </main>
  );
}
