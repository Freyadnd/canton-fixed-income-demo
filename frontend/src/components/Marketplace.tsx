import type { Product } from "../types";


export default function Marketplace({ products, onSubscribe }: any) {
  return (
    <div style={{ marginTop: 30 }}>
      <h2>Marketplace</h2>

      {products.length === 0 && <p>No products available.</p>}

      {products.map((p: Product) => (
        <div
          key={p.id}
          style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}
        >
          <p>Term: {p.term}</p>
          <p>Coupon: {p.coupon}%</p>
          <p>Maturity: {p.maturity}</p>
          <p>NAV: {p.nav}</p>
          <button onClick={() => onSubscribe(p)}>Subscribe</button>
        </div>
      ))}
    </div>
  );
}
