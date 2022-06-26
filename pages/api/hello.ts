import type { NextApiRequest, NextApiResponse } from "next"
import nc from "next-connect"
import { realEstate } from "../../utils/data"
import RealEstate from "../../models/RealEstate"
import db from "../../utils/db"

const handler = nc()

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  await db.connect()
  await RealEstate.deleteMany()
  await RealEstate.insertMany(realEstate)
  await db.disconnect()
  return res.send({ massage: "already seeded" })
})

export default handler
