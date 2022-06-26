import type { NextApiRequest, NextApiResponse } from "next"
import nc from "next-connect"
// import bcrypt from "bcryptjs"
import { getToken } from "next-auth/jwt"

import User from "../../../../models/User"
import db from "../../../../utils/db"

const handler = nc()

handler.put(async (req: NextApiRequest, res: NextApiResponse) => {
  const userUpdate = req.body
  await db.connect()
  const user = await User.findById(req.query.id)
  if (user) {
    user.name = userUpdate!.username
    user.subName = userUpdate!.subName
    user.birthday = userUpdate!.birthday
    user.gender = userUpdate!.gender
    user.address = userUpdate!.address
    user.phoneNumber = userUpdate!.tel
    user.cccd = userUpdate!.cccd
    console.log(user)
    await user.save()
    await db.disconnect()
    res.send({ message: "User Update Successfully" })
  } else {
    await db.disconnect()
    res.status(404).send({ messess: "User Not Found" })
  }
})

export default handler
