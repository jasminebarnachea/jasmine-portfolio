import { NextResponse } from "next/server";

type ChatMessage = { role: "assistant" | "user"; content: string };

const systemPrompt = "You are Jas Chat Lang, the friendly portfolio assistant for Jasmine Barnachea, an Information Technology graduate based in La Union, Philippines. Answer concise questions about her skills, projects, certificates, and contact details using only the portfolio context. If information is unavailable, say so and suggest contacting Jasmine directly.";

export async function POST(request: Request) {
  const apiUrl = "https://api.groq.com/openai/v1/chat/completions";
  const apiKey = process.env.GROQ_API_KEY;
  const model = process.env.GROQ_MODEL || "llama-3.3-70b-versatile";

  if (!apiKey) {
    return NextResponse.json({ error: "Jas Chat Lang is not configured yet." }, { status: 503 });
  }

  try {
    const body = await request.json() as { messages?: ChatMessage[] };
    const messages = body.messages?.filter((message) =>
      (message.role === "assistant" || message.role === "user") && typeof message.content === "string" && message.content.length <= 500,
    ).slice(-20);
    if (!messages?.length) return NextResponse.json({ error: "Please enter a message." }, { status: 400 });

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        model,
        messages: [{ role: "system", content: systemPrompt }, ...messages],
        max_tokens: 350,
        temperature: 0.4,
      }),
    });
    const result = await response.json() as { choices?: Array<{ message?: { content?: string } }>; error?: { message?: string } };
    const content = result.choices?.[0]?.message?.content?.trim();
    if (!response.ok || !content) throw new Error(result.error?.message || "The chat service could not respond.");
    return NextResponse.json({ message: content });
  } catch (error) {
    console.error("Groq chat request failed", error);
    return NextResponse.json({ error: "The chat service is temporarily unavailable. Please try again shortly." }, { status: 502 });
  }
}
