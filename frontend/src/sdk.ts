import { Ledger } from "@daml/ledger";
import * as FixedIncome from "@daml.js/fixed-income-daml-0.0.1";

/**
 * 当前登录的 Party
 */
let currentParty: string | null = null;

/**
 * 登录（前端模拟）
 */
export const login = async (party: string) => {
  currentParty = party;
  console.log("Logged in as:", party);
};

/**
 * 获取 Holding 合约
 */
export const getHoldings = async () => {
  if (!currentParty) {
    throw new Error("Not logged in");
  }

  // 关键：Ledger 必须绑定 party
  const ledger = new Ledger({
    token: "",
    httpBaseUrl: "http://localhost:8080",
  });

  const contracts = await ledger.query(
    FixedIncome.Templates.Holding as any
  );

  return contracts.map((c: any) => ({
    id: c.contractId,
    issuer: c.payload.issuer,
    insurer: c.payload.insurer,
    holder: c.payload.holder,
    units: c.payload.units,
    productName: c.payload.productInfo.name,
    faceValue: c.payload.productInfo.faceValue,
    couponRate: c.payload.productInfo.couponRate,
    maturityDate: c.payload.productInfo.maturityDate,
  }));
};

/**
 * 示例 Transfer（目前只是 placeholder）
 */
export const initiateTransfer = async (to: string, amount: number) => {
  console.log(`Transfer ${amount} units to ${to}`);
};