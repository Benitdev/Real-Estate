import nc from "next-connect"
import type { NextApiRequest, NextApiResponse } from "next"
import RealEstate from "../../../models/RealEstate"
import db from "../../../utils/db"
const handler = nc()

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  await db.connect()
  const realEstate = await RealEstate.findById(req.query.id).lean()
  await db.disconnect()
  res.status(200).json(realEstate)
})

export default handler
