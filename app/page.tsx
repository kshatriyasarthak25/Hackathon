import { Suspense } from "react"
import TicketBooking from "@/components/ticket-booking"
import ChatbotButton from "@/components/chatbot-button"
import LanguageSwitcher from "@/components/language-switcher"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Museum Ticketing System</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <TicketBooking />
        </Suspense>
        <ChatbotButton />
        <LanguageSwitcher />
      </div>
    </main>
  )
}

