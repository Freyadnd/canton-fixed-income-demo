# YieldNote - Fixed-Term Structured Product on Canton 

### Programmable Fixed-Income Layer for Value-Accruing Assets on Canton

---

## Overview

This project explores how **value-accruing DeFi assets** (e.g. floating-yield tokens like sUSDe) can be transformed into **fixed-term, structured products** using Canton Network and DAML.

Instead of exposing users to floating PnL volatility, this system:

* Locks yield-bearing assets into fixed-term deposits
* Prices floating risk through a third party
* Supports structured risk tranching
* Enables institutional-style visibility and control

This is a programmable fixed-income abstraction layer built on Canton.

---

## Problem

Many DeFi yield-bearing tokens:

* Accrue value over time
* Have floating returns
* Expose users to NAV volatility

Example:

* Floating yield tokens (e.g. sUSDe-style products)
* Perp funding-based yield assets
* Strategy vault tokens

However, users often prefer:

* Fixed-term deposits
* Predictable returns
* Insured or risk-priced exposure

This mirrors TradFi instruments such as:

* Time deposits
* Insurance-backed fixed products
* Structured notes
* Tranche-based yield products

---

## Core Idea

Wrap floating yield assets into a **Fixed-Term Structured Product** that:

1. Tokenizes the underlying yield asset
2. Locks capital for a predefined term (3M, 6M, 12M)
3. Defines NAV update logic
4. Allows third-party pricing of volatility risk
5. Supports risk tranching for differentiated yield profiles

Longer term → improved capital efficiency
Higher risk tranche → higher yield

---

## Architecture

### Built with:

* DAML Smart Contracts
* Canton Ledger API v2
* Local JSON API integration
* React + Vite frontend (demo)

---

## Leveraging Canton Features

This design intentionally uses Canton-native capabilities:

### 1️⃣ Fine-Grained Party Visibility

* Issuer sees issuance + NAV updates
* Investor sees only their Holding
* Insurer sees only secondary market offers
* Observer roles can be selectively attached

Unlike public-chain global state, Canton allows:

* Confidential contract state
* Multi-party controlled visibility
* Private lifecycle transitions

This makes it suitable for institutional structured finance.

---

### 2️⃣ Deterministic Contract Lifecycle

Product → Purchase Offer → Holding → NAV Updates → Redemption

DAML’s archive-and-recreate pattern allows:

* Explicit NAV updates
* Controlled contract mutation
* Clear state transitions

---

### 3️⃣ Institutional-Grade Workflow

Supports:

* Issuer dashboard
* Investor interaction
* Insurer secondary market offers
* Controlled redemption logic

Designed as infrastructure, not just token issuance.

---

## Inspiration

* Reservoir fixed-term NFT vault model (ERC-6551)
* Ethena-style floating yield tokens
* Hyperliquid-style tranching mechanics
* TradFi structured term deposits
* ERC-7540 vault receipt tokenization standards

---

## Demo

⚠️ Due to contract visibility feature and to enable a smoother experience, the deployed Vercel frontend uses pseudo interactions.

Full on-chain interaction is demonstrated in video via:
* Local Canton Sandbox
* JSON API calls
* Live contract creation

Demo video: [https://drive.google.com/file/d/1BI_FvoY37zGy01m7gbkmQj40gTwMSqZy/view?usp=sharing]
Frontend demo: [https://frontend-demo-phi-blue.vercel.app/]

---

## Smart Contracts

Core Contract for demo is located in:

```
fixed-income-daml/daml/FixedIncome.daml
```

Some templates are also included exploring:

* FixedIncomeProduct
* PurchaseOffer
* Holding
* NAV update logic
* Redemption receipt
* Secondary insurer offers

See folder README for template breakdown.

```
fixed-income-daml/daml/Templates/README.md
```

---

## Testing

### Local DAML

Run:

```
daml run
```

Or build package:

```
daml build
```

Upload DAR to participant if needed.

---

### Ledger Interaction

* gRPC UI (Ledger API v2)
* JSON API (localhost:7575)
* Frontend integration via @daml/ledger

Frontend can connect to:

```
http://localhost:7575
```

---

## Reflections & Limitations

### DevNet Constraints

* DevNet test environment showed validator/participant role coupling
* Limited ability to independently deploy participant
* Reduced ability to demonstrate full observability separation

A true multi-participant validator environment would better highlight:

* Visibility isolation
* Observer control
* Confidential workflows

---

### DAML Version Inconsistencies

* Signal handling varies across versions
* Contract subscription latency after local deployment
* Some integration friction during frontend synchronization

---

### Tranching & Insurance Pricing

The most interesting future direction:

* Formal risk tranche structuring
* Pricing volatility insurance
* Dynamic risk curves

Currently conceptual — future expansion planned.

---

## Future Improvements

### 1️⃣ Standardization

Goal: create a generalized structured product interface.

Inspired by:

* ERC-7540 vault receipt tokenization
* Multi-maturity vault batching

This system could serve as:

* A programmable maturity abstraction layer
* A mapping layer between floating yield and fixed-term products
* An institutional receipt token framework

---

### 2️⃣ True DevNet Deployment

Deploy in full validator environment to:

* Demonstrate real multi-party privacy
* Showcase observability controls
* Simulate institutional environment

---

### 3️⃣ Risk Engine Module

Add:

* Tranche pricing model
* Insurance premium curves
* Dynamic NAV adjustment logic
* Risk-tier tokenization

---

## Why This Matters

DeFi has yield.
TradFi has structure.
Canton has confidentiality.

This project explores how to combine all three.