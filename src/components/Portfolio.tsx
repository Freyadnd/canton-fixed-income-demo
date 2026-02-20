import { useEffect, useState } from "react";
import { getHoldings } from "../sdk";

export default function Portfolio() {
  const [holdings, setHoldings] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await getHoldings();
      setHoldings(data);
    };
    load();
  }, []);

  return (
    <div>
      <h2>Portfolio</h2>
      {holdings.map((h) => (
        <div key={h.id} style={{ border: "1px solid #ccc", padding: 10 }}>
          <p>Term: {h.term}</p>
          <p>Principal: ${h.principal}</p>
          <p>Accrued Yield: ${h.accruedYield}</p>
          <p>NAV: {h.nav}</p>
        </div>
      ))}
    </div>
  );
}
