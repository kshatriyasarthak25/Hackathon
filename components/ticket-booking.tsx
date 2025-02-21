"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TicketBooking() {
  const [date, setDate] = useState("")
  const [ticketType, setTicketType] = useState("")
  const [quantity, setQuantity] = useState("1")

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically call your backend API
    console.log("Booking:", { date, ticketType, quantity })
    alert("Booking submitted!")
  }

  return (
    <form onSubmit={handleBooking} className="space-y-4">
      <div>
        <Label htmlFor="date">Date</Label>
        <Input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="ticketType">Ticket Type</Label>
        <Select value={ticketType} onValueChange={setTicketType}>
          <SelectTrigger>
            <SelectValue placeholder="Select ticket type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="adult">Adult</SelectItem>
            <SelectItem value="child">Child</SelectItem>
            <SelectItem value="senior">Senior</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="quantity">Quantity</Label>
        <Input
          id="quantity"
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </div>
      <Button type="submit">Book Tickets</Button>
    </form>
  )
}

