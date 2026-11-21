import NextLink from 'next/link';
export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-4 text-center">
      <div>
        <h1 className="text-7xl font-bold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Sahifa topilmadi</h2>
        <NextLink href="/" className="mt-6 inline-flex h-9 items-center rounded-md bg-hero-button px-4 text-sm font-medium text-hero-button-ink">Bosh sahifaga qaytish</NextLink>
      </div>
    </main>
  );
}
