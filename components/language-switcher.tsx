"use client"

import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState("en")

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage)
    // Here you would typically update your i18n configuration
    console.log("Language changed to:", newLanguage)
  }

  return (
    <div className="fixed top-4 right-4">
      <Select value={language} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="es">Español</SelectItem>
          <SelectItem value="fr">Français</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

