import nc from "next-connect"
import type { NextApiRequest, NextApiResponse } from "next"
import BuyRequest from "../../../models/BuyRequest"
import db from "../../../utils/db"
import { getToken } from "next-auth/jwt"
const handler = nc()

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await getToken({ req })
  await db.connect()
  const existBuyRequest = await BuyRequest.findOne({
    user: user?.sub,
    realEstate: req.query.id,
  })
  console.log(existBuyRequest)
  if (!existBuyRequest) {
    const buyRequest = new BuyRequest({
      user: user?.sub,
      realEstate: req.query.id,
    })
    buyRequest.save()
    await db.disconnect()
    res.status(200).json(buyRequest)
  } else res.status(404).json({ message: "Exist Buy Request" })
})

export default handler
