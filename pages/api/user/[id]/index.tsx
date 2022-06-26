import nc from "next-connect"
import type { NextApiRequest, NextApiResponse } from "next"
import db from "../../../../utils/db"
import User from "../../../../models/User"
const handler = nc()

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  await db.connect()
  const user = await User.findById(req.query.id).lean()
  await db.disconnect()
  res.status(200).json(user)
})

export default handler
