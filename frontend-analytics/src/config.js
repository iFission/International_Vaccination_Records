export const CONTRACT_ADDRESS = "0x34a192cD0e4AFCE6Da59d39d534A85E2DAf4957b";

export const CONTRACT_ABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "countryName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "population",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "vaccinatedNumbers",
				"type": "uint256"
			}
		],
		"name": "addCountry",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "countryName",
				"type": "string"
			}
		],
		"name": "countryAnalaytics",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllCountries",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "passportNumber",
				"type": "string"
			}
		],
		"name": "retrieve",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "passportNumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "vaccineManufacturer",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "country",
				"type": "string"
			}
		],
		"name": "store",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]