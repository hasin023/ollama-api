import { Elysia } from "elysia"
import { swagger } from "@elysiajs/swagger"

// Initialize Apps
const app = new Elysia()

// Routes
import openaiRoutes from "./routes/openai"
import ollamaRoutes from "./routes/ollama"

app
  .use(swagger())
  .group("/api", (app) => {
    app.use(openaiRoutes)
    app.use(ollamaRoutes)
    return app
  })
  .listen(process.env.SERVER_PORT || 3049)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
