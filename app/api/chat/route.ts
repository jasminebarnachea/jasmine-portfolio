import { NextResponse } from "next/server";
import { certifications, focusAreas, projects, stackGroups } from "../../../data/portfolio";

type ChatMessage = { role: "assistant" | "user"; content: string };

export const runtime = "nodejs";

const portfolioContext = [
  "Contact: Email: barnacheajassy@gmail.com. Location: La Union, Philippines. Languages: English, Filipino, and Ilocano. GitHub: https://github.com/binibaby. Facebook: https://www.facebook.com/jaseeehhh.",
  "Education: Bachelor of Science in Information Technology at Universidad de Dagupan (2023–2026). Previously studied BSIT at Polytechnic College of La Union (2022–2023).",
  `Projects: ${projects.map((project) => `${project.title} — ${project.description} Technologies: ${project.languages.join(", ")}.${project.website ? ` Live site: ${project.website}.` : ""}`).join(" ")}`,
  `Skills and focus areas: ${focusAreas.map((area) => `${area.title}: ${area.text} (${area.tags.join(", ")})`).join("; ")}.`,
  `Technology stack: ${stackGroups.map((group) => `${group.name}: ${group.tools.join(", ")}`).join("; ")}.`,
  `Certifications: ${certifications.map((certification) => certification.title).join("; ")}.`,
].join("\n");

const systemPrompt = `You are Jas Chat Lang, the friendly portfolio assistant for Jasmine Paneda Barnachea. Answer concise, professional questions about her skills, projects, certificates, background, and contact details using only the portfolio context below. For contact questions, provide the relevant public contact details exactly as listed. Do not invent links, experience, credentials, or contact information. Keep every answer warm, confident, and positive. Never say that you do not have details or use negative phrasing such as "Unfortunately". When a visitor asks for something beyond the listed information, briefly highlight the closest relevant strengths or projects, then warmly invite them to contact Jasmine for more details.

Background: Jasmine is an Information Technology graduate from Universidad de Dagupan in Pangasinan, Philippines, and lives in Agoo, La Union, Philippines. She is seeking an IT-related job opportunity. She enjoys table tennis, exploring new things, and developing applications. She is the youngest of four sisters and was born on October 28, 2004. Share the personal details, such as her birthday and family, only when a visitor specifically asks about them.

Portfolio context:
${portfolioContext}`;

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
    if (!response.ok || !content) {
      console.error("Groq API error", { status: response.status, message: result.error?.message });
      return NextResponse.json({
        error: "The chat service could not respond. Please try again shortly.",
      }, { status: 502 });
    }
    return NextResponse.json({ message: content });
  } catch (error) {
    console.error("Groq chat request failed", error);
    return NextResponse.json({ error: "The chat service is temporarily unavailable. Please try again shortly." }, { status: 502 });
  }
}
