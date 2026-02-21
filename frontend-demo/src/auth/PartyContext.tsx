import { createContext, useContext, useState } from "react"
import type { Party } from "../types"

type ContextType = {
  party: Party | null
  setParty: (p: Party) => void
}

const PartyContext = createContext<ContextType | null>(null)

export const PartyProvider = ({ children }: { children: React.ReactNode }) => {
  const [party, setParty] = useState<Party | null>(null)

  return (
    <PartyContext.Provider value={{ party, setParty }}>
      {children}
    </PartyContext.Provider>
  )
}

export const useParty = () => {
  const ctx = useContext(PartyContext)
  if (!ctx) throw new Error("PartyContext not found")
  return ctx
}