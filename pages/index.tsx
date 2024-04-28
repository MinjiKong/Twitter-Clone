import useUser from "../lib/client/userUser";
import useSWR, { mutate } from "swr";
import useMutation from "../lib/client/userMutation";
import { SubmitHandler, useForm } from "react-hook-form";
import router from "next/router";
import Link from "next/link";

interface TweetForm {
  tweet: string;
}

export default function Home() {
  const { user, isLoading } = useUser();
  const [tweet, { loading }] = useMutation("../api/tweets/new-tweet");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TweetForm>();

  const { data: tweetsData } = useSWR("../api/tweets/all-tweets");

  const onSubmit: SubmitHandler<TweetForm> = async (data: TweetForm) => {
    tweet(data);
    reset();
    if (!loading) {
      alert("You have posted a tweet!");
    }

    mutate("../api/tweets/all-tweets");
  };

  const handleLogout = async () => {
    router.replace("/log-in");
  };

  if (isLoading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center p-5">
      <div className="text-3xl mb-2">Welcome, {user.email}!!</div>
      <button
        className="mb-5 font-bold text-black border-2 bg-white border-black rounded-lg px-3"
        onClick={handleLogout}
      >
        Log Out
      </button>
      <div className="flex flex-col items-center mb-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className={`bg-white text-black text-center w-96 ring-2 ${
              errors.tweet ? "ring-red-500" : "ring-black"
            } rounded-lg outline-none focus:ring-black resize-none`}
            id="tweet"
            type="text"
            {...register("tweet", {
              required: "No empty tweet!",
              maxLength: {
                value: 100,
                message: "No more than 100 characters allowed!",
              },
            })}
            placeholder="What's on your mind?"
          />
          <button
            className="bg-black font-bold rounded-md px-2 ml-2"
            type="submit"
          >
            Tweet
          </button>
          <span>{errors?.tweet?.message}</span>
        </form>
      </div>
      <div>
        {tweetsData ? (
          tweetsData.tweets
            .slice()
            .reverse()
            .map((tweet: any) => (
              <Link href={`/tweet/${tweet.id}`} key={tweet.id}>
                <div key={tweet.id}>
                  <p className="bg-white text-black border border-black rounded-lg p-4 m-5 cursor-pointer">
                    {tweet.text}
                  </p>
                </div>
              </Link>
            ))
        ) : (
          <div>No Tweets</div>
        )}
      </div>
    </div>
  );
}
