import { useState } from "react";
import PartySelector from "./components/PartySelector";
import Portfolio from "./components/Portfolio";
import Transfer from "./components/Transfer";
import IssuerDashboard from "./components/IssuerDashboard";
import Marketplace from "./components/Marketplace";
import type { Product } from "./types";


function App() {
  const [party, setParty] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [portfolio, setPortfolio] = useState<Product[]>([]);

  if (!party) {
    return <PartySelector onSelect={setParty} />;
  }

  return (
    <div>
      <h1>CIP-56 Fixed Income Demo</h1>
      <p>Logged in as: {party}</p>

      {party === "Issuer" ? (
        <IssuerDashboard
          onCreate={(product: Product) =>
            setProducts((prev) => [...prev, product])
          }
        />
      ) : (
        <>
          <Marketplace
            products={products}
            onSubscribe={(product: Product) =>
              setPortfolio((prev) => [...prev, product])
            }
          />
          <Portfolio holdings={portfolio} />
          <Transfer />
        </>
      )}
    </div>
  );
}

export default App;
