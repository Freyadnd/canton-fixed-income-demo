import type { FixedIncomeProduct } from "../types"
import { colors } from "../theme"

export default function ProductCard({
  product,
  isIssuer,
  onUpdateNav,
  onBuy,
}: {
  product: FixedIncomeProduct
  isIssuer: boolean
  onUpdateNav: () => void
  onBuy: () => void
}) {
  return (
    <div style={card}>
      <h2>{product.name}</h2>
      <p>NAV: {product.currentNav.toFixed(2)}</p>
      <p>Maturity: {product.maturityDate}</p>

      {isIssuer && (
        <button style={btn} onClick={onUpdateNav}>
          Update NAV
        </button>
      )}

      {!isIssuer && (
        <button style={btn} onClick={onBuy}>
          Buy
        </button>
      )}
    </div>
  )
}

const card = {
  background: "white",
  padding: 20,
  borderRadius: 12,
  marginBottom: 20,
}

const btn = {
  marginTop: 10,
  background: colors.primary,
  color: "white",
  padding: "8px 16px",
  border: "none",
  borderRadius: 6,
}