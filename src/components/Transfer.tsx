import { useState } from "react";
import { initiateTransfer } from "../sdk";

export default function Transfer() {
  const [to, setTo] = useState("Bob");
  const [amount, setAmount] = useState(1000);

  const handleTransfer = async () => {
    await initiateTransfer(to, amount);
    alert("Transfer initiated!");
  };

  return (
    <div>
      <h2>Transfer Note</h2>
      <select onChange={(e) => setTo(e.target.value)}>
        <option>Bob</option>
        <option>Alice</option>
      </select>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button onClick={handleTransfer}>Send</button>
    </div>
  );
}
