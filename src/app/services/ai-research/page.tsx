import Link from 'next/link';

const UnderConstruction = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold mb-4">Page Under Construction</h1>
      <p className="text-lg text-gray-600 mb-8">This page is currently being updated. Please check back later.</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default UnderConstruction;
