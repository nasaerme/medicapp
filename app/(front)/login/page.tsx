import LoginForm from "@/components/Auth/LoginForm";
import React from "react";

const page = () => {
  return (
    <div className="bg-blue-100 min-h-screen py-8">
      <div className="grid md:grid-cols-2 grid-cols-1 w-full max-w-5xl mx-auto bg-white border border-gray-200 rounded-lg shadow  overflow-hidden dark:bg-gray-800 dark:border-gray-700">
        <div className="hidden md:flex linear-bg "></div>
        <div className="">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default page;
