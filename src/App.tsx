import { useState } from "react";
import PartySelector from "./components/PartySelector";
import Portfolio from "./components/Portfolio";
import Transfer from "./components/Transfer";

function App() {
  const [party, setParty] = useState<string | null>(null);

  if (!party) {
    return <PartySelector onSelect={setParty} />;
  }

  return (
    <div>
      <h1>CIP-56 Fixed Income Demo</h1>
      <p>Logged in as: {party}</p>
      <Portfolio />
      <Transfer />
    </div>
  );
}

export default App;
