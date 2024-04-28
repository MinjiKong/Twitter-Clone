import { SubmitHandler, useForm } from "react-hook-form";
import useMutation from "../../lib/client/userMutation";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from "next/link";

interface SignInForm {
  email: string;
  password: string;
}

export default () => {
  const [signin, { loading, data, error }] = useMutation(
    "../api/users/sign-in"
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>();
  const router = useRouter();
  const onSubmit: SubmitHandler<SignInForm> = async (data: SignInForm) => {
    signin(data);
  };
  useEffect(() => {
    if (data !== undefined) {
      router.push("/");
    }
  }, [data, router]);
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="text-3xl font-extrabold mb-5">
        Welcome Back To Twitter Clone!
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
          Are you a new user? <Link href="/create-account">Create Account</Link>
        </div>
        <button className="bg-[ie90ff] outline outline-white outline-2 rounded-md">
          {loading ? "Loading..." : "Log In"}
        </button>
      </form>
    </div>
  );
};
