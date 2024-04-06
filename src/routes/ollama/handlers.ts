import ollama from "ollama"

export async function getChat() {
  try {
    return { message: "GET ollama!" }
  } catch (error: unknown) {
    console.error(error)
  }
}

export async function sendChat(data: { message: string; model: string }) {
  try {
    const response = await ollama.chat({
      model: data.model,
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant who will help the user understand complex software engineering concepts based on the concept the user provides.",
        },
        { role: "user", content: data.message },
      ],
    })

    return response.message.content
  } catch (error: unknown) {
    console.error(error)
  }
}
