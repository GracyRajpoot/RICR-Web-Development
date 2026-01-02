import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">
        Coaching Institute Registration
      </h1>
      <p className="text-gray-600 mb-6">
        Join India’s best coaching programs
      </p>

      <Link
        to="/register"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Register Now
      </Link>
    </div>
  );
}
