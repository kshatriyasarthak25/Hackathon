"use client"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useChat } from "ai/react"

interface ChatbotDialogProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export default function ChatbotDialog({ isOpen, setIsOpen }: ChatbotDialogProps) {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Chat with AI Support</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[300px] pr-4">
          {messages.map((m) => (
            <div key={m.id} className={`mb-4 ${m.role === "user" ? "text-right" : "text-left"}`}>
              <span
                className={`inline-block p-2 rounded-lg ${m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
              >
                {m.content}
              </span>
            </div>
          ))}
        </ScrollArea>
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
          <Input value={input} onChange={handleInputChange} placeholder="Type your message..." />
          <Button type="submit">Send</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

