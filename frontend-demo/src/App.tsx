import { useState } from "react"
import { PartyProvider, useParty } from "./auth/PartyContext"
import Layout from "./components/Layout"
import ProductCard from "./components/ProductCard"
import HoldingCard from "./components/HoldingCard"
import SecondaryPanel from "./components/SecondaryPanel"
import SummaryCard from "./components/SummaryCard"
import { ledger } from "./ledger/mockLedger"

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div style={{ marginBottom: 50 }}>
      <h2
        style={{
          marginBottom: 20,
          fontWeight: 600,
          borderBottom: "1px solid #E2E8F0",
          paddingBottom: 10,
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  )
}

function CardGrid({ children }: any) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 24,
      }}
    >
      {children}
    </div>
  )
}

function Dashboard() {
  const { party } = useParty()
  const [state, setState] = useState(ledger.getState())

  const refresh = () => setState({ ...ledger.getState() })

  const aliceHoldings = state.holdings.filter(
    h => h.holder === "Alice"
  )

  const insurerHoldings = state.holdings.filter(
    h => h.holder === "Insurer"
  )

  const totalExposure = aliceHoldings.reduce((acc, h) => {
    const product = state.products.find(p => p.id === h.productId)
    return acc + (product?.faceValue || 0) * h.units
  }, 0)

  const weightedYield =
    aliceHoldings.length === 0
      ? 0
      : aliceHoldings.reduce((acc, h) => {
          const product = state.products.find(
            p => p.id === h.productId
          )!
          return acc + product.couponRate
        }, 0) / aliceHoldings.length

  return (
    <Layout>

      {/* ================= ISSUER ================= */}
      {party === "Issuer" && (
        <>
          <Section title="Product Issuance">
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => { ledger.createProduct(1); refresh() }}>1M</button>
              <button onClick={() => { ledger.createProduct(3); refresh() }}>3M</button>
              <button onClick={() => { ledger.createProduct(6); refresh() }}>6M</button>
              <button onClick={() => { ledger.createProduct(12); refresh() }}>12M</button>
            </div>
          </Section>

          <Section title="Live Products">
            <CardGrid>
              {state.products.map(p => (
                <ProductCard
                  key={p.id}
                  product={p}
                  isIssuer
                  onUpdateNav={() => {
                    ledger.updateNav(p.id)
                    refresh()
                  }}
                  onBuy={() => {}}
                />
              ))}
            </CardGrid>
          </Section>
        </>
      )}

      {/* ================= ALICE ================= */}
      {party === "Alice" && (
        <>
          <Section title="Market Products">
            <CardGrid>
              {state.products.map(p => (
                <ProductCard
                  key={p.id}
                  product={p}
                  isIssuer={false}
                  onUpdateNav={() => {}}
                  onBuy={() => {
                    ledger.buyProduct(p.id)
                    refresh()
                  }}
                />
              ))}
            </CardGrid>
          </Section>

          <Section title="My Portfolio">
            <SummaryCard
              total={totalExposure}
              yieldRate={weightedYield}
            />

            <CardGrid>
              {aliceHoldings.map(h => {
                const product = state.products.find(
                  p => p.id === h.productId
                )!
                return (
                  <HoldingCard
                    key={h.id}
                    holding={h}
                    product={product}
                    isHolder
                    onRedeem={() => {
                      ledger.redeem(h.id)
                      refresh()
                    }}
                    onSell={() => {
                      ledger.proposeSecondary(h.id)
                      refresh()
                    }}
                  />
                )
              })}
            </CardGrid>
          </Section>
        </>
      )}

      {/* ================= INSURER ================= */}
      {party === "Insurer" && (
        <>
          <Section title="Active Secondary Requests">
            <SecondaryPanel
              requests={state.secondaryRequests}
              products={state.products}
              isInsurer
              onAccept={(id) => {
                ledger.acceptSecondary(id)
                refresh()
              }}
              onReject={(id) => {
                ledger.rejectSecondary(id)
                refresh()
              }}
            />
          </Section>

          <Section title="Insurer Holdings">
            <CardGrid>
              {insurerHoldings.map(h => {
                const product = state.products.find(
                  p => p.id === h.productId
                )!
                return (
                  <HoldingCard
                    key={h.id}
                    holding={h}
                    product={product}
                    isHolder={false}
                    onRedeem={() => {}}
                    onSell={() => {}}
                  />
                )
              })}
            </CardGrid>
          </Section>
        </>
      )}
    </Layout>
  )
}

export default function App() {
  return (
    <PartyProvider>
      <Dashboard />
    </PartyProvider>
  )
}