import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../lib/server/client";
import { withApiSession } from "../../../lib/server/withSession";
import withHandler from "../../../lib/server/withHandler";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req;

  if (req.method === "POST") {
    try {
      // Check if the user has already liked the tweet
      const hasLiked = await client.like.findFirst({
        where: {
          tweetId: Number(id),
          userId: req.session.user!.id,
        },
      });

      if (hasLiked) {
        // User has already liked the tweet, so unlike it
        await client.like.delete({
          where: {
            id: hasLiked.id,
          },
        });

        res.status(200).json({ liked: false }); // Return liked status
      } else {
        // User has not liked the tweet, so like it
        await client.like.create({
          data: {
            userId: req.session.user!.id,
            tweetId: Number(id),
          },
        });

        res.status(200).json({ liked: true }); // Return liked status
      }
    } catch (error) {
      console.error("Error toggling like:", error);
      res.status(500).json({ error: "Error toggling like" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}

export default withApiSession(withHandler({ method: "POST", handler }));
