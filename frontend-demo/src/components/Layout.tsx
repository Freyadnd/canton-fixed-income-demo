import { useParty } from "../auth/PartyContext"
import { colors } from "../theme"
import type { Party } from "../types"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const { party, setParty } = useParty()

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <div
        style={{
          width: 220,
          background: colors.sidebar,
          color: "white",
          padding: 20,
        }}
      >
        <h2 style={{ marginBottom: 30 }}>Fixed Note</h2>

        {(["Issuer", "Alice", "Insurer"] as Party[]).map((p) => (
          <div
            key={p}
            onClick={() => setParty(p)}
            style={{
              padding: 10,
              cursor: "pointer",
              borderRadius: 6,
              marginBottom: 10,
              background: party === p ? colors.primary : "transparent",
            }}
          >
            {p}
          </div>
        ))}
      </div>

      <div style={{ flex: 1, background: colors.bg, padding: 40 }}>
        {children}
      </div>
    </div>
  )
}