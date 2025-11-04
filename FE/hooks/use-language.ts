"use client"

import { useState, useEffect } from "react"

export function useLanguage() {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem("ReFarm-language")
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage)
    localStorage.setItem("ReFarm-language", newLanguage)
  }

  return {
    language,
    changeLanguage,
  }
}
