export const CONTRACT_ADDRESS = "0xBE5DAeC7aaA9556811bA3a8ECcdE4A0DDada98e4";

export const CONTRACT_ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "countryName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "population",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vaccinatedNumbers",
        type: "uint256",
      },
    ],
    name: "addCountry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "exponent",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "modulus",
        type: "uint256",
      },
    ],
    name: "computeRsa",
    outputs: [
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
    name: "countryAnalaytics",
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
    name: "getAllCountries",
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
  {
    inputs: [
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
      {
        internalType: "string",
        name: "country",
        type: "string",
      },
    ],
    name: "getClinicPublicKey",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "key",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "modulus",
            type: "uint256",
          },
        ],
        internalType: "struct Records.RsaKey",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
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
    name: "retrieve",
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
    name: "store",
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
    name: "verifyClinic",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
