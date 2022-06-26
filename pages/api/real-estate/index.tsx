import nc from "next-connect"
import type { NextApiRequest, NextApiResponse } from "next"
import RealEstate from "../../../models/RealEstate"
import db from "../../../utils/db"
const handler = nc()

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  await db.connect()
  const realEstates = await RealEstate.find().sort({ startDay: -1 }).lean()
  await db.disconnect()
  res.status(200).json(realEstates)
})

export default handler
