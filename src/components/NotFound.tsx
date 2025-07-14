import { AlertCircle } from "lucide-react";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();
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
          <button className="group flex items-center justify-center px-3 py-1 bg-[#E26E02] text-white rounded-md font-medium  hover:shadow-xl shadow-[#f76b1c] hover:ring-2 hover:ring-[#f76b1c] hover:ring-offset-2 hover:scale-105 active:scale-95 hover:ring-offset-white transition-all duration-200 cursor-pointer"
          onClick={()=>{
            navigate("/services");
            window.location.reload();
          }}>
                Back to Services
               
              </button>
        </div>
      </div>
    </div>
  );
}
