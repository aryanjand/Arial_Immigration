import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Meta from '../components/meta/meta';

const Custom404 = () => {
  const router = useRouter();

  const backNavigationHandler = () => {
    router.back();
  };

  return (
    <>
      <Meta />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-5 text-center">
        <p className="text-4xl font-bold mb-4">404</p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-lg mb-8">
          Oops! We couldn't find the page you're looking for.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:space-x-4">
          <button
            onClick={backNavigationHandler}
            className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
          >
            Go Back
          </button>
          <Link
            href="/"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Custom404;
