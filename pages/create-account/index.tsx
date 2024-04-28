import React from "react";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import useMutation from "../../lib/client/userMutation";
import Link from "next/link";

interface SignUpForm {
  email: string;
  password: string;
}

export default () => {
  const [signup, { loading, data, error }] = useMutation(
    "../api/users/sign-up"
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>();
  const router = useRouter();

  const onSubmit: SubmitHandler<SignUpForm> = async (data: SignUpForm) => {
    signup(data);
    if (!loading) {
      alert("Account created! Please log in!");
      router.push("/log-in");
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="text-3xl font-extrabold mb-5">
        Welcome To Twitter Clone!
      </div>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email</label>
        <input
          className="bg-white text-black"
          id="email"
          type="email"
          {...register("email", {
            required: "please enter your email",
          })}
        />
        <span>{errors?.email?.message}</span>
        <label htmlFor="password">Password</label>
        <input
          className="bg-white text-black"
          id="password"
          type="password"
          {...register("password", {
            required: "Please enter your password",
            minLength: {
              value: 8,
              message: "Password should be longer than 8 characters",
            },
          })}
        />
        <span>{errors?.password?.message}</span>
        <div className="mt-2 mb-5">
          Do you already have an account? <Link href="/log-in">Log-in</Link>
        </div>
        <button className="bg-[ie90ff] outline outline-white outline-2 rounded-md">
          {loading ? "Loading..." : "Create Account"}
        </button>
      </form>
    </div>
  );
};
