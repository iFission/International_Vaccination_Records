export const CONTRACT_ADDRESS = "0xe1F3e1c16f27E5938707D88694EACEd5bD9fC236";

export const CONTRACT_ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "passportNumberEncrypted",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "passportNumber",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "vaccineManufacturer",
        type: "string",
      },
      {
        internalType: "string",
        name: "country",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "clinicKeyCert",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "clinicModulusCert",
        type: "uint256",
      },
    ],
    name: "add",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "passportNumber",
        type: "uint256",
      },
    ],
    name: "get",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "countryName",
        type: "string",
      },
    ],
    name: "getCountryAnalaytics",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCountryNames",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
