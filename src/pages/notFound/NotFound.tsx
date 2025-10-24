import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
      {/* Icon */}
      <div className="bg-gray-100 p-4 rounded-full mb-4">
        <AlertTriangle className="w-8 h-8 text-gray-600" />
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-semibold text-gray-900 mb-2">
        Page Not Found
      </h1>

      {/* Description */}
      <p className="text-gray-500 max-w-md mb-6">
        The page you’re looking for doesn’t exist or has been moved. Please
        check the URL or return to the homepage.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="inline-block bg-black text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 transition"
      >
        Go Back Home
      </Link>
    </main>
  );
}
