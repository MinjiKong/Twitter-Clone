// components/Tweet.tsx

import { useRouter } from "next/router";
import useSWR, { mutate } from "swr";
import Link from "next/link";
import useMutation from "../../lib/client/userMutation";
import useUser from "../../lib/client/userUser";

const Tweet = () => {
  const router = useRouter();
  const { user } = useUser();
  const { id } = router.query;
  let shouldFetch = false;

  if (id !== undefined) {
    shouldFetch = true;
  }

  const { data: tweetData, error: tweetError } = useSWR(
    shouldFetch ? `../api/tweets/${id}` : null
  );
  const { data: likesData, error: likesError } = useSWR(
    shouldFetch ? `../api/tweets/${id}/likes` : null
  );

  const [likeTweet] = useMutation(`../api/likes/${id}`);

  if (tweetError || likesError) return <div>Error loading data</div>;
  if (!tweetData || !likesData || !likesData.likes)
    return <div>Loading...</div>;

  const handleLike = async () => {
    // Perform the like action
    await likeTweet(id);

    // Trigger revalidation of the SWR cache for tweet likes
    mutate(`../api/tweets/${id}/likes`, async (data: any) => {
      // Fetch the latest likes data from the server
      const response = await fetch(`../api/tweets/${id}/likes`);
      const newData = await response.json();

      // Update the likes count and return the updated data
      return { ...data, likes: newData.likes };
    });
  };

  const userLiked = likesData.likes.some(
    (like: any) => like.userId === user.id
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className=" bg-white m-10 rounded-xl p-5 w-80 h-auto flex flex-col">
        <p className="bg-gray-800 text-white font-bold p-1">
          UserId: {tweetData.userId}
        </p>
        <p className="bg-white mt-2 text-black mb-6">{tweetData.text}</p>
        <div className="flex bg-white justify-between">
          <p className="bg-white text-black">
            ❤️ {likesData.likes.length === 0 ? 0 : likesData.likes.length}
          </p>
          <button
            className="bg-red-600 rounded-lg w-20 hover:bg-red-700"
            onClick={handleLike}
          >
            {userLiked ? "Unlike" : "Like"}
          </button>
        </div>
      </div>
      <Link href="/">Back to Home</Link>
    </div>
  );
};

export default Tweet;
