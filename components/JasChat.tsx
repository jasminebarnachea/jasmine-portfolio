"use client";

import { FormEvent, useRef, useState } from "react";

type Message = { role: "assistant" | "user"; content: string };

const welcomeMessage: Message = {
  role: "assistant",
  content: "Hi! I’m Jas Chat Lang. Ask me about Jasmine’s skills, projects, certificates, or how to get in touch.",
};

export default function JasChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [isSending, setIsSending] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const openChat = () => {
    setOpen(true);
    window.setTimeout(() => inputRef.current?.focus(), 0);
  };

  const sendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const content = input.trim();
    if (!content || isSending) return;

    const nextMessages = [...messages, { role: "user" as const, content }];
    setMessages(nextMessages);
    setInput("");
    setIsSending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const data = await response.json() as { message?: string; error?: string };
      if (!response.ok || !data.message) throw new Error(data.error || "Unable to send your message.");
      setMessages((current) => [...current, { role: "assistant", content: data.message as string }]);
    } catch (error) {
      setMessages((current) => [...current, {
        role: "assistant",
        content: error instanceof Error ? error.message : "Sorry, Jas Chat Lang is unavailable right now.",
      }]);
    } finally {
      setIsSending(false);
    }
  };

  return <aside className="jas-chat" aria-label="Jas Chat Lang">
    {open && <section className="jas-chat-panel" aria-labelledby="jas-chat-title">
      <header className="jas-chat-header">
        <div><span className="jas-chat-kicker">Portfolio assistant</span><h2 id="jas-chat-title">Jas Chat Lang</h2></div>
        <button className="jas-chat-close" type="button" onClick={() => setOpen(false)} aria-label="Close chat">×</button>
      </header>
      <div className="jas-chat-messages" aria-live="polite">
        {messages.map((message, index) => <p className={`jas-chat-message jas-chat-message--${message.role}`} key={`${message.role}-${index}`}>{message.content}</p>)}
        {isSending && <p className="jas-chat-message jas-chat-message--assistant">Thinking…</p>}
      </div>
      <form className="jas-chat-form" onSubmit={sendMessage}>
        <label className="sr-only" htmlFor="jas-chat-input">Your message</label>
        <input ref={inputRef} id="jas-chat-input" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about Jasmine…" maxLength={500} />
        <button type="submit" disabled={isSending || !input.trim()}>Send</button>
      </form>
    </section>}
    <button className="jas-chat-launcher" type="button" onClick={open ? () => setOpen(false) : openChat} aria-expanded={open} aria-controls="jas-chat-title">
      <span aria-hidden="true">✦</span> Jas Chat Lang
    </button>
  </aside>;
}
