export type Party = "Issuer" | "Alice" | "Insurer"

export type FixedIncomeProduct = {
  id: string
  name: string
  tenorMonths: number
  faceValue: number
  couponRate: number
  maturityDate: string
  currentNav: number
}

export type Holding = {
  id: string
  holder: string
  productId: string
  units: number
}

export type SecondaryRequest = {
  id: string
  seller: string
  productId: string
  units: number
  insurerBid: number
}