import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"],
})

export async function getChat() {
  try {
    return { message: "Goodbye AI World!" }
  } catch (error: unknown) {
    console.error(error)
  }
}

export async function sendChat(data: { message: string }) {
  try {
    const response = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: data.message,
        },
        {
          role: "system",
          content:
            "You are a helpful assistant. You will answer questions about software engineering concepts.",
        },
      ],
      model: "gpt-3.5-turbo",
    })

    return { message: response.choices[0].message.content }
  } catch (error: unknown) {
    console.error(error)
  }
}
