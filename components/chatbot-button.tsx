"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import ChatbotDialog from "./chatbot-dialog"

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)} className="fixed bottom-4 right-4">
        <MessageCircle className="mr-2 h-4 w-4" /> Chat with AI
      </Button>
      <ChatbotDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

