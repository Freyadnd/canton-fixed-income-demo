# Canton Fixed Income Developer Toolkit

## Executive Summary

This project is a modular Daml-based toolkit for building programmable fixed income instruments on the Canton Network.

Unlike EVM-based token contracts, Canton enables financial rights to be modeled declaratively through contract lifecycle and party-based visibility.

This repository demonstrates:

- Minimal debt primitives
- Term-enforced bonds
- Structured tranching with waterfall priority
- Insurance overlays
- Governance via issuer registry

The toolkit is intentionally modular. Developers can compose these templates to bootstrap institutional-grade RWA or private credit products.

---

## Design Philosophy

Instead of modeling balances, this toolkit models financial rights.

Instead of updating storage, this toolkit models lifecycle transitions.

Instead of public global state, this toolkit models privacy-preserving contract visibility.

This reflects a fundamental paradigm shift from account-based systems to rights-based systems.
