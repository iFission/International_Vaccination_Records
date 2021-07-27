export const CONTRACT_ADDRESS = "0x0a3b19ecd225d1ED6574a786C1D3F492661C1597";

export const CONTRACT_ABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "passportNumber",
        type: "string",
      },
      {
        internalType: "string",
        name: "info",
        type: "string",
      },
    ],
    name: "store",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "passportNumber",
        type: "string",
      },
    ],
    name: "retrieve",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
