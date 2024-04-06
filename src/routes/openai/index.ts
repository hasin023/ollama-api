import { Elysia } from "elysia"

import { sendChat, getChat } from "./handlers"

interface chatSchema {
  message: string
}

const openaiRoutes = new Elysia({
  prefix: "/openai",
})
  .get("/", async () => getChat())
  .post("/", async ({ body }) => {
    const { message } = body as chatSchema
    return sendChat({ message })
  })

export default openaiRoutes
