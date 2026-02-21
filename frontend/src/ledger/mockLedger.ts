import type {
  FixedIncomeProduct,
  Holding,
  SecondaryRequest,
} from "../types"

let products: FixedIncomeProduct[] = []
let holdings: Holding[] = []
let secondaryRequests: SecondaryRequest[] = []

function generateMaturity(months: number) {
  const d = new Date()
  d.setMonth(d.getMonth() + months)
  return d.toISOString().split("T")[0]
}

function daysToMaturity(dateStr: string) {
  const today = new Date()
  const maturity = new Date(dateStr)
  return Math.ceil(
    (maturity.getTime() - today.getTime()) /
      (1000 * 60 * 60 * 24)
  )
}

export const ledger = {
  createProduct(tenor: number) {
    products.push({
      id: Date.now().toString(),
      name: `${tenor}M Fixed Note`,
      tenorMonths: tenor,
      faceValue: 100,
      couponRate: 0.05,
      maturityDate: generateMaturity(tenor),
      currentNav: 1,
    })
  },

  updateNav(productId: string) {
    const p = products.find(p => p.id === productId)
    if (p) p.currentNav += 0.05
  },

  buyProduct(productId: string) {
    holdings.push({
      id: Date.now().toString(),
      holder: "Alice",
      productId,
      units: 10,
    })
  },

  redeem(holdingId: string) {
    const h = holdings.find(h => h.id === holdingId)
    if (!h) return

    const product = products.find(p => p.id === h.productId)
    if (!product) return

    const daysLeft = daysToMaturity(product.maturityDate)

    if (daysLeft > 0) {
      alert(`Early redemption: ${daysLeft} days remaining`)
    }

    holdings = holdings.filter(hh => hh.id !== holdingId)
  },

  proposeSecondary(holdingId: string) {
    const h = holdings.find(h => h.id === holdingId)
    if (!h) return

    const product = products.find(p => p.id === h.productId)
    if (!product) return

    const daysLeft = daysToMaturity(product.maturityDate)

    const insurerBid =
      product.faceValue *
      (1 + product.couponRate * (daysLeft / 365))

    secondaryRequests.push({
      id: Date.now().toString(),
      seller: h.holder,
      productId: h.productId,
      units: h.units,
      insurerBid: parseFloat(insurerBid.toFixed(2)),
    })

    holdings = holdings.filter(hh => hh.id !== holdingId)
  },

  acceptSecondary(id: string) {
    const req = secondaryRequests.find(r => r.id === id)
    if (!req) return

    holdings.push({
      id: Date.now().toString(),
      holder: "Insurer",
      productId: req.productId,
      units: req.units,
    })

    secondaryRequests = secondaryRequests.filter(r => r.id !== id)
  },

  rejectSecondary(id: string) {
    const req = secondaryRequests.find(r => r.id === id)
    if (!req) return

    holdings.push({
      id: Date.now().toString(),
      holder: req.seller,
      productId: req.productId,
      units: req.units,
    })

    secondaryRequests = secondaryRequests.filter(r => r.id !== id)
  },

  getState() {
    return {
      products,
      holdings,
      secondaryRequests,
    }
  },
}