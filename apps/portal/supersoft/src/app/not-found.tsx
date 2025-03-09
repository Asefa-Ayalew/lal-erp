import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-gray-900">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-white">404</h1>
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">Page not found</p>
      <Link href="/" passHref>
        <button className="mt-6 px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700">
          Go back to Home
        </button>
      </Link>
    </div>
  );
}
