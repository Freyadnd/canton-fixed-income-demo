import type { SecondaryRequest, FixedIncomeProduct } from "../types"
import { colors } from "../theme"

export default function SecondaryPanel({
  requests,
  products,
  isInsurer,
  onAccept,
  onReject,
}: {
  requests: SecondaryRequest[]
  products: FixedIncomeProduct[]
  isInsurer: boolean
  onAccept: (id: string) => void
  onReject: (id: string) => void
}) {
  if (!requests.length) return null

  return (
    <>
      <h3>Secondary Market</h3>
      {requests.map(r => {
        const product = products.find(p => p.id === r.productId)
        return (
          <div key={r.id} style={card}>
            <p>{product?.name}</p>
            <p>Units: {r.units}</p>
            <p>Insurer Bid: {r.insurerBid}</p>

            {isInsurer && (
              <>
                <button style={btn} onClick={() => onAccept(r.id)}>
                  Accept
                </button>
                <button
                  style={{ ...btn, background: colors.danger, marginLeft: 10 }}
                  onClick={() => onReject(r.id)}
                >
                  Reject
                </button>
              </>
            )}
          </div>
        )
      })}
    </>
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