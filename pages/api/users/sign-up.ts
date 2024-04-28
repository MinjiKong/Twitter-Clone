import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../lib/server/client";
import { withApiSession } from "../../../lib/server/withSession";
import withHandler from "../../../lib/server/withHandler";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;
  await client.user.create({
    data: {
      email,
      password,
    },
  });
  return res.status(200).end();
}

export default withApiSession(withHandler({ method: "POST", handler }));
