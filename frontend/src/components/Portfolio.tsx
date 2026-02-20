import type { Product } from "../types";


interface PortfolioProps {
  holdings: Product[];
}

export default function Portfolio({ holdings }: PortfolioProps) {
  return (
    <div style={{ marginTop: 30 }}>
      <h2>Portfolio</h2>

      {holdings.length === 0 && <p>No holdings yet.</p>}

      {holdings.map((h) => (
        <div
          key={h.id}
          style={{
            border: "1px solid #ccc",
            padding: 12,
            marginBottom: 10,
            borderRadius: 8
          }}
        >
          <p><strong>Term:</strong> {h.term}</p>
          <p><strong>Coupon:</strong> {h.coupon}%</p>
          <p><strong>Maturity:</strong> {h.maturity}</p>
          <p><strong>NAV:</strong> {h.nav}</p>

          {/* 模拟计算市值 */}
          <p>
            <strong>Market Value:</strong> $
            {(h.nav * 1000).toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  );
}
