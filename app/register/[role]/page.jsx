import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { SignupForm } from "../_components/signup-form";

const RegisterPage = ({ params: { role } }) => {
  return (
    <div className="w-full flex-col h-screen flex items-center justify-center">
      <div className="container">
        <Link
          href="/"
          className="absolute top-4 left-4 flex items-center text-white bg-white/20 px-4 py-2 rounded-lg backdrop-blur-md transition-all duration-300 hover:bg-white/30 hover:scale-105 shadow-lg"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back
        </Link>
        <SignupForm role={role} />
      </div>
    </div>
  );
};
export default RegisterPage;
