import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../lib/server/client";
import { withApiSession } from "../../../lib/server/withSession";
import withHandler from "../../../lib/server/withHandler";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Fetch all tweets
    const tweets = await client.tweet.findMany();
    res.status(200).json({ tweets });
  } catch (error) {
    console.error("Error fetching tweets:", error);
    res.status(500).json({ error: "Error fetching tweets" });
  }
}

export default withApiSession(withHandler({ method: "GET", handler }));
