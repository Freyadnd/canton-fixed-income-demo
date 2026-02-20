import { useState } from "react";
import { login } from "../sdk";

export default function PartySelector({ onSelect }: any) {
  const [party, setParty] = useState("Alice");

  const handleLogin = async () => {
    await login(party);
    onSelect(party);
  };

  return (
    <div>
      <h2>Select Party</h2>
      <select onChange={(e) => setParty(e.target.value)}>
        <option>Alice</option>
        <option>Bob</option>
        <option>Issuer</option>
      </select>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
