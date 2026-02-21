
# Canton Fixed Income Developer Toolkit

## Overview

This repository provides a modular, reusable Daml toolkit for building programmable fixed income instruments on the Canton Network.

It is designed as:

- A developer starter kit
- A financial primitive library
- A bridge for Ethereum developers transitioning to Canton
- A reference architecture for RWA debt issuance

---

## Why This Exists

On Ethereum, modeling bonds typically requires:

- ERC20/ERC721 tokens
- Balance mappings
- Manual timestamp logic
- Reentrancy guards
- Access control contracts

On Canton, financial rights can be expressed declaratively as contracts.

This toolkit demonstrates that shift.

---

## What This Toolkit Includes

### Core Templates

- `FixedIncomeBase` – Minimal debt primitive
- `TermBond` – Adds maturity logic
- `Tranche` – Implements waterfall structure
- `Insurance` – Protection overlay
- `IssuerRegistry` – Governance control

---

## Upgrade Path

### Phase 1 – Minimal Bond
Single issuer, single investor, fixed rate.

### Phase 2 – Term Bond
Add maturity enforcement.

### Phase 3 – Tranching
Senior / Mezz / Junior waterfall logic.

### Phase 4 – Insurance Overlay
Default-triggered payout logic.

---

## Architecture

Frontend → Dapp SDK → DevNet Participant → Daml Contracts

---

## Setup

### 1. Install Daml SDK
https://docs.digitalasset.com/build/

### 2. Build DAR

```

daml build

```

### 3. Upload DAR to DevNet

```

participant.upload_dar .daml/dist/fixed-income-daml-0.0.1.dar

```

---

## Example Usage

Create a TermBond:

- issuer: Alice
- investor: Bob
- principal: 1000.0
- rate: 0.05
- maturity: <timestamp>

Exercise:
- GetNAV
- Redeem

---

## Testing

Use DevNet console or Ledger API to:

1. Allocate parties
2. Create bond
3. Exercise choices

---

## Ecosystem Impact

- Demonstrates RWA modeling on Canton
- Provides reusable financial building blocks
- Reduces onboarding friction for Ethereum developers
- Serves as reference implementation
```
