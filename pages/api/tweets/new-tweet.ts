import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../lib/server/client";
import { withApiSession } from "../../../lib/server/withSession";
import withHandler from "../../../lib/server/withHandler";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { tweet } = req.body;

    const userId = req.session.user!.id;

    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const newTweet = await client.tweet.create({
      data: {
        text: tweet,
        userId,
      },
    });

    res.status(201).json({ tweet: newTweet });
  } catch (error) {
    console.error("Error creating tweet:", error);
    res.status(500).json({ error: "Error creating tweet" });
  }
}

export default withApiSession(withHandler({ method: "POST", handler }));
