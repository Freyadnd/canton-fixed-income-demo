import type { Holding, FixedIncomeProduct } from "../types"
import { colors } from "../theme"

function daysToMaturity(dateStr: string) {
  const today = new Date()
  const maturity = new Date(dateStr)
  return Math.ceil(
    (maturity.getTime() - today.getTime()) /
      (1000 * 60 * 60 * 24)
  )
}

export default function HoldingCard({
  holding,
  product,
  isHolder,
  onRedeem,
  onSell,
}: {
  holding: Holding
  product: FixedIncomeProduct
  isHolder: boolean
  onRedeem: () => void
  onSell: () => void
}) {
  const remainingDays = daysToMaturity(product.maturityDate)

  const impliedYield =
    product.couponRate * (remainingDays / 365)

  const isMatured = remainingDays <= 0

  return (
    <div style={card}>
      {/* Header */}
      <div style={header}>
        <div>
          <h3 style={{ margin: 0 }}>{product.name}</h3>
          <p style={subText}>
            Tenor: {product.tenorMonths}M
          </p>
        </div>

        <div style={navBox}>
          NAV {product.currentNav.toFixed(2)}
        </div>
      </div>

      {/* Body */}
      <div style={bodyGrid}>
        <Metric
          label="Units"
          value={holding.units.toString()}
        />

        <Metric
          label="Face Value"
          value={`$${product.faceValue}`}
        />

        <Metric
          label="Remaining Days"
          value={
            isMatured
              ? "Matured"
              : remainingDays.toString()
          }
        />

        <Metric
          label="Implied Yield"
          value={
            isMatured
              ? `${(product.couponRate * 100).toFixed(2)}%`
              : `${(impliedYield * 100).toFixed(2)}%`
          }
        />
      </div>

      {/* Early redemption warning */}
      {!isMatured && isHolder && (
        <div style={warningBox}>
          Early redemption will occur before maturity.
        </div>
      )}

      {/* Actions */}
      {isHolder && (
        <div style={buttonRow}>
          <button style={primaryBtn} onClick={onSell}>
            Sell to Insurer
          </button>

          <button
            style={dangerBtn}
            onClick={onRedeem}
          >
            Redeem
          </button>
        </div>
      )}
    </div>
  )
}

/* ============================= */
/* Components                    */
/* ============================= */

function Metric({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div>
      <p style={metricLabel}>{label}</p>
      <p style={metricValue}>{value}</p>
    </div>
  )
}

/* ============================= */
/* Styles                        */
/* ============================= */

const card = {
  background: "white",
  padding: 25,
  borderRadius: 14,
  marginBottom: 25,
  boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
}

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 20,
}

const subText = {
  color: "#64748B",
  marginTop: 4,
  fontSize: 14,
}

const navBox = {
  background: colors.primary,
  color: "white",
  padding: "6px 14px",
  borderRadius: 8,
  fontWeight: 600,
}

const bodyGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 20,
  marginBottom: 20,
}

const metricLabel = {
  color: "#64748B",
  fontSize: 13,
  marginBottom: 4,
}

const metricValue = {
  fontWeight: 600,
  fontSize: 18,
}

const warningBox = {
  background: "#FEF3C7",
  padding: 12,
  borderRadius: 8,
  fontSize: 13,
  marginBottom: 15,
}

const buttonRow = {
  display: "flex",
  gap: 12,
}

const primaryBtn = {
  background: colors.primary,
  color: "white",
  padding: "8px 16px",
  border: "none",
  borderRadius: 8,
  cursor: "pointer",
}

const dangerBtn = {
  background: colors.danger,
  color: "white",
  padding: "8px 16px",
  border: "none",
  borderRadius: 8,
  cursor: "pointer",
}