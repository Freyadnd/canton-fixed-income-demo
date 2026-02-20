import { useState } from "react";

export default function IssuerDashboard({ onCreate }: any) {
  const [term, setTerm] = useState("3M");
  const [coupon, setCoupon] = useState(5);
  const [maturity, setMaturity] = useState("");

  const handleCreate = () => {
    const newProduct = {
        id: Date.now().toString(),
        term,
        coupon,
        maturity,
        nav: 1.0,
    };

    onCreate(newProduct);
    };

    // alert("Product created!");




  return (
    <div style={{ marginTop: 30 }}>
      <h2>Issuer Dashboard</h2>

      <div>
        <label>Term</label>
        <select onChange={(e) => setTerm(e.target.value)}>
          <option>3M</option>
          <option>6M</option>
          <option>12M</option>
        </select>
      </div>

      <div>
        <label>Coupon (%)</label>
        <input
          type="number"
          value={coupon}
          onChange={(e) => setCoupon(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Maturity Date</label>
        <input
          type="date"
          value={maturity}
          onChange={(e) => setMaturity(e.target.value)}
        />
      </div>

      <button onClick={handleCreate}>Create Product</button>
    </div>
  );
}
