import { colors } from "../theme"

export default function SummaryCard({
  total,
  yieldRate,
}: {
  total: number
  yieldRate: number
}) {
  return (
    <div style={card}>
      <div style={metric}>
        <p style={label}>Total Exposure</p>
        <h2 style={value}>${total.toFixed(0)}</h2>
      </div>

      <div style={metric}>
        <p style={label}>Weighted Yield</p>
        <h2 style={value}>
          {(yieldRate * 100).toFixed(2)}%
        </h2>
      </div>
    </div>
  )
}

const card = {
  display: "flex",
  justifyContent: "space-between",
  background: "white",
  padding: 25,
  borderRadius: 14,
  marginBottom: 30,
  boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
}

const metric = {
  display: "flex",
  flexDirection: "column" as const,
}

const label = {
  fontSize: 13,
  color: "#64748B",
  marginBottom: 6,
}

const value = {
  fontSize: 26,
  fontWeight: 600,
  color: colors.text,
}