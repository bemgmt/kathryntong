"use client"
import { useState, useRef, useEffect } from "react"
import type React from "react"

import { MessageCircle, X, Send } from "lucide-react"
import { useTranslations } from "@/lib/use-translations"

export default function Chatbot() {
  const t = useTranslations()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "",
      sender: "bot" as const,
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Update welcome message when language changes
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === 1) {
        return [{ ...prev[0], text: t.chatbotWelcome }]
      }
      return prev
    })
  }, [t.chatbotWelcome])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: "user" as const,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate bot response delay
    setTimeout(() => {
      const botResponses: { [key: string]: string } = {
        price: t.chatbotPriceResponse,
        hours: t.chatbotHoursResponse,
        document: t.chatbotDocumentResponse,
        apostille: t.chatbotApostilleResponse,
        legalization: t.chatbotLegalizationResponse,
        speed: t.chatbotSpeedResponse,
        payment: t.chatbotPaymentResponse,
        default: t.chatbotDefaultResponse,
      }

      const lowerInput = input.toLowerCase()
      const response =
        Object.entries(botResponses).find(([key]) => lowerInput.includes(key))?.[1] || botResponses.default

      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: response,
          sender: "bot",
          timestamp: new Date(),
        },
      ])
      setIsLoading(false)
    }, 500)
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-110 transition flex items-center justify-center"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] h-[600px] rounded-lg shadow-xl border border-border bg-background flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
            <h3 className="font-bold">{t.chatbotTitle}</h3>
            <button onClick={() => setIsOpen(false)} aria-label="Close chat">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-muted text-foreground rounded-bl-none"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted text-foreground px-4 py-2 rounded-lg rounded-bl-none">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-foreground rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-foreground rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-foreground rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.chatbotPlaceholder}
                className="flex-1 px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
