"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

const Reset = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Reset Password Data:", data);
    // Handle reset password logic here (e.g., API call)
  };

  return (
    <div className="flex p-2 md:py-28 items-center justify-center min-h-screen bg-gradient-to-br from-cyan-100 to-cyan-300">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md flex flex-col gap-2">
        <h2 className="text-center text-lg font-semibold text-cyan-500 uppercase mb-4">
          Forgot Your Password
        </h2>
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">
          Reset Your Account Access
        </h1>
        <p className="text-center text-gray-600 text-sm mb-8">
          Enter your email to receive a link to reset your password and restore
          access to your clinic&#39;s dashboard. Secure your account and
          continue managing appointments and patient records with ease.
        </p>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className={`w-full px-4 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:outline-none focus:ring focus:ring-cyan-500`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Reset Button */}
          <button
            type="submit"
            className="w-full py-2 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition duration-300"
          >
            Forget Password
          </button>
        </form>

        {/* Links */}
        <div className="text-center text-sm mt-6 text-gray-600">
          Don&#39;t have an account?{" "}
          <Link href="/registration" className="text-cyan-600 hover:underline">
            Register here.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reset;
