import Ledger from "@daml/ledger"
import { ContractId } from "@daml/types"
import { FixedIncomeProduct } from "../daml/fixed-income-daml-0.0.1/lib/FixedIncome"

const httpBaseUrl = "http://localhost:7575"
const wsBaseUrl = "ws://localhost:7575"

function getLedger(party: string) {
  return new Ledger({
    token: party,
    httpBaseUrl,
    wsBaseUrl,
  })
}

/* ===============================
   Query
================================ */

export async function queryProducts(party: string) {
  const ledger = getLedger(party)
  return ledger.query(FixedIncomeProduct)
}

/* ===============================
   Create
================================ */

export async function createProduct(party: string, payload: any) {
  const ledger = getLedger(party)
  return ledger.create(FixedIncomeProduct, payload)
}

/* ===============================
   Exercise
================================ */

export async function updateNav(
  party: string,
  contractId: string,
  newNav: string
) {
  const ledger = getLedger(party)

  return ledger.exercise(
    FixedIncomeProduct.UpdateNav,
    contractId as ContractId<FixedIncomeProduct>,
    { newNav }
  )
}