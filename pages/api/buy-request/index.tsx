import nc from "next-connect"
import type { NextApiRequest, NextApiResponse } from "next"
import BuyRequest from "../../../models/BuyRequest"
import db from "../../../utils/db"
import { getToken } from "next-auth/jwt"
const handler = nc()

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query.id
  await db.connect()
  const buyRequests = await BuyRequest.find({
    user: id,
  })
  await db.disconnect()
  res.status(200).json(buyRequests)
})

export default handler
