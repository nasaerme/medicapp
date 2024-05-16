"use client";
import Link from "next/link";
import TextInput from "../FormInputs/TextInput";
import { useForm } from "react-hook-form";
import { useState } from "react";
import SubmitButton from "../FormInputs/SubmitButton";
import { LoginInputProps } from "@/types/types";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginInputProps>();

  async function onSubmit(data: LoginInputProps) {
    console.log(data);
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="Email"
            register={register}
            name="email"
            errors={errors}
            type="email"
          />
          <TextInput
            label="Password"
            register={register}
            name="password"
            errors={errors}
            type="password"
          />

          <div>
            <SubmitButton
              title="Login"
              isLoading={isLoading}
              loadingTitle="Login into account"
            />
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don't you have an account?{" "}
          <Link
            href="/register"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
