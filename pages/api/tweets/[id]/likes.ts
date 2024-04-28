import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../../lib/server/client";
import { withApiSession } from "../../../../lib/server/withSession";
import withHandler from "../../../../lib/server/withHandler";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
  } = req;

  try {
    // Fetch the likes for the tweet by its ID
    const likes = await client.like.findMany({
      where: {
        tweetId: Number(id),
      },
    });

    res.status(200).json({ likes });
  } catch (error) {
    console.error("Error fetching likes:", error);
    res.status(500).json({ error: "Error fetching likes" });
  }
}

export default withApiSession(withHandler({ method: "GET", handler }));
