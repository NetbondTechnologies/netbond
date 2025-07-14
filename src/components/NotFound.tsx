import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-md border-2 shadow-2xl bg-white rounded-lg px-15 py-10 mx-4">
        <div>
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">
              404 Page Not Found
            </h1>
          </div>
          <p className="mt-4 ml-10 text-sm text-gray-600">
            Check the URL and try again.
          </p>
        </div>
      </div>
    </div>
  );
}
