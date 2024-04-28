import { NextApiRequest, NextApiResponse } from "next";
import client from "../../../lib/server/client";
import withHandler from "../../../lib/server/withHandler";
import { withApiSession } from "../../../lib/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;
  let user;
  user = await client.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) return res.status(404).end();
  if (user.password !== password) {
    return res.status(401).json({ error: "Invalid password" });
  }
  req.session.user = {
    id: user.id,
  };
  await req.session.save();
  res.json({ ok: true });
}

export default withApiSession(withHandler({ method: "POST", handler }));
