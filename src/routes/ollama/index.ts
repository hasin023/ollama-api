import { Elysia } from "elysia"

import { sendChat, getChat } from "./handlers"

interface chatSchema {
  model: string
  message: string
}

const ollamaRoutes = new Elysia({
  prefix: "/ollama",
})
  .get("/", async () => getChat())
  .post("/", async ({ body }) => {
    const data = body as chatSchema
    return sendChat({ message: data.message, model: data.model })
  })

export default ollamaRoutes
