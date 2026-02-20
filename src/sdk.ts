// 暂时 mock，之后再接真实 ledger

export const login = async (party: string) => {
  console.log("Logged in as:", party);
};

export const getHoldings = async () => {
  return [
    {
      id: "1",
      principal: 100000,
      accruedYield: 2300,
      nav: 1.023,
      term: "3M-2026Q2"
    }
  ];
};

export const initiateTransfer = async (to: string, amount: number) => {
  console.log(`Transfer ${amount} to ${to}`);
};
