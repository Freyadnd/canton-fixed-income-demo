import Ledger from "@daml/ledger"
import { Holding } from "./daml/fixed-income-daml-0.0.1/lib/FixedIncome/module"

const ledger = new Ledger({
  token: "sandbox",
  httpBaseUrl: "http://localhost:8080"
})

export const login = async (party: string) => {
  console.log("Connected as:", party)
}

export const getHoldings = async () => {
  const holdings = await ledger.query(Holding)
  return holdings
}