"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface ChartContextType {
  duration: string
  clienttype: string
  setDuration: (duration: string) => void
  setClienttype: (clienttype: string) => void
}

const ChartContext = createContext<ChartContextType | undefined>(undefined)

export function ChartProvider({ children }: { children: ReactNode }) {
  const [duration, setDuration] = useState("6months")
  const [clienttype, setClienttype] = useState("all")

  return (
    <ChartContext.Provider value={{ duration, clienttype, setDuration, setClienttype }}>
      {children}
    </ChartContext.Provider>
  )
}

export function useChartContext() {
  const context = useContext(ChartContext)
  if (context === undefined) {
    throw new Error("useChartContext must be used within a ChartProvider")
  }
  return context
}
