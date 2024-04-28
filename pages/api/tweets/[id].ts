import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../lib/server/client";
import { withApiSession } from "../../../lib/server/withSession";
import withHandler from "../../../lib/server/withHandler";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req;

  try {
    // Fetch the tweet by its ID
    const tweet = await client.tweet.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!tweet) {
      return res.status(404).json({ error: "Tweet not found" });
    }

    res.status(200).json(tweet);
  } catch (error) {
    console.error("Error fetching tweet:", error);
    res.status(500).json({ error: "Error fetching tweet" });
  }
}

export default withApiSession(withHandler({ method: "GET", handler }));
