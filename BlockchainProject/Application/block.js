async function Connect() {
    if (typeof window.ethereum !== 'undefined' || typeof window.web3 !== 'undefined') {
        try {
            await ethereum.request({ method: 'eth_requestAccounts' });

            if (window.ethereum) {
                window.web3 = new Web3(ethereum);
            } else if (window.web3) {
                window.web3 = new Web3(web3.currentProvider);
            }

            const accounts = await web3.eth.getAccounts();
            const abi =[
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "interfaceId",
                            "type": "bytes4"
                        }
                    ],
                    "name": "supportsInterface",
                    "outputs": [
                        {
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "name",
                    "outputs": [
                        {
                            "name": "",
                            "type": "string"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "getApproved",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "approve",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_landId",
                            "type": "uint256"
                        },
                        {
                            "name": "_buyerId",
                            "type": "uint256"
                        },
                        {
                            "name": "_ownershipPercentage",
                            "type": "uint256"
                        }
                    ],
                    "name": "buyLand",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "totalSupply",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "transferFrom",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "name": "index",
                            "type": "uint256"
                        }
                    ],
                    "name": "tokenOfOwnerByIndex",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_landId",
                            "type": "uint256"
                        }
                    ],
                    "name": "displayRequestedDetails",
                    "outputs": [
                        {
                            "components": [
                                {
                                    "name": "landId",
                                    "type": "uint256"
                                },
                                {
                                    "name": "landLocation",
                                    "type": "string"
                                },
                                {
                                    "name": "district",
                                    "type": "string"
                                },
                                {
                                    "name": "landPrice",
                                    "type": "uint256"
                                },
                                {
                                    "name": "landSize",
                                    "type": "uint256"
                                },
                                {
                                    "name": "plotNo",
                                    "type": "string"
                                },
                                {
                                    "name": "ownerNames",
                                    "type": "string[]"
                                },
                                {
                                    "name": "buyerIds",
                                    "type": "uint256[]"
                                },
                                {
                                    "name": "buyerNames",
                                    "type": "string[]"
                                }
                            ],
                            "name": "",
                            "type": "tuple"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "safeTransferFrom",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "index",
                            "type": "uint256"
                        }
                    ],
                    "name": "tokenByIndex",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "getLand",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256[]"
                        },
                        {
                            "name": "",
                            "type": "string[]"
                        },
                        {
                            "name": "",
                            "type": "string[]"
                        },
                        {
                            "name": "",
                            "type": "uint256[]"
                        },
                        {
                            "name": "",
                            "type": "uint256[]"
                        },
                        {
                            "name": "",
                            "type": "string[]"
                        },
                        {
                            "name": "",
                            "type": "string[][]"
                        },
                        {
                            "name": "",
                            "type": "uint256[][]"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_landLocation",
                            "type": "string"
                        },
                        {
                            "name": "_district",
                            "type": "string"
                        },
                        {
                            "name": "_landPrice",
                            "type": "uint256"
                        },
                        {
                            "name": "_landSize",
                            "type": "uint256"
                        },
                        {
                            "name": "_plotNo",
                            "type": "string"
                        },
                        {
                            "name": "_ownerName",
                            "type": "string"
                        }
                    ],
                    "name": "registerLand",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_name",
                            "type": "string"
                        },
                        {
                            "name": "_district",
                            "type": "string"
                        },
                        {
                            "name": "_email",
                            "type": "string"
                        },
                        {
                            "name": "_age",
                            "type": "uint256"
                        },
                        {
                            "name": "_addressInfo",
                            "type": "address"
                        }
                    ],
                    "name": "addBuyerDetails",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "ownerOf",
                    "outputs": [
                        {
                            "name": "",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "name": "landRequests",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "owner",
                            "type": "address"
                        }
                    ],
                    "name": "balanceOf",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_landId",
                            "type": "uint256"
                        },
                        {
                            "name": "_buyerId",
                            "type": "uint256"
                        }
                    ],
                    "name": "requestDetails",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "getAllBuyers",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256[]"
                        },
                        {
                            "name": "",
                            "type": "string[]"
                        },
                        {
                            "name": "",
                            "type": "string[]"
                        },
                        {
                            "name": "",
                            "type": "string[]"
                        },
                        {
                            "name": "",
                            "type": "uint256[]"
                        },
                        {
                            "name": "",
                            "type": "address[]"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "symbol",
                    "outputs": [
                        {
                            "name": "",
                            "type": "string"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "buyerCount",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "name": "approved",
                            "type": "bool"
                        }
                    ],
                    "name": "setApprovalForAll",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "displayAllRequestedDetails",
                    "outputs": [
                        {
                            "components": [
                                {
                                    "name": "landId",
                                    "type": "uint256"
                                },
                                {
                                    "name": "landLocation",
                                    "type": "string"
                                },
                                {
                                    "name": "district",
                                    "type": "string"
                                },
                                {
                                    "name": "landPrice",
                                    "type": "uint256"
                                },
                                {
                                    "name": "landSize",
                                    "type": "uint256"
                                },
                                {
                                    "name": "plotNo",
                                    "type": "string"
                                },
                                {
                                    "name": "ownerNames",
                                    "type": "string[]"
                                },
                                {
                                    "name": "buyerIds",
                                    "type": "uint256[]"
                                },
                                {
                                    "name": "buyerNames",
                                    "type": "string[]"
                                }
                            ],
                            "name": "",
                            "type": "tuple[]"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "name": "tokenId",
                            "type": "uint256"
                        },
                        {
                            "name": "_data",
                            "type": "bytes"
                        }
                    ],
                    "name": "safeTransferFrom",
                    "outputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "getTransferredLandIds",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256[]"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "tokenURI",
                    "outputs": [
                        {
                            "name": "",
                            "type": "string"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "name": "transferedLandIds",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "landCount",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "name": "requestedLands",
                    "outputs": [
                        {
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "name": "lands",
                    "outputs": [
                        {
                            "name": "landLocation",
                            "type": "string"
                        },
                        {
                            "name": "district",
                            "type": "string"
                        },
                        {
                            "name": "landPrice",
                            "type": "uint256"
                        },
                        {
                            "name": "landSize",
                            "type": "uint256"
                        },
                        {
                            "name": "plotNo",
                            "type": "string"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "name": "operator",
                            "type": "address"
                        }
                    ],
                    "name": "isApprovedForAll",
                    "outputs": [
                        {
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "name": "buyers",
                    "outputs": [
                        {
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "name": "district",
                            "type": "string"
                        },
                        {
                            "name": "email",
                            "type": "string"
                        },
                        {
                            "name": "age",
                            "type": "uint256"
                        },
                        {
                            "name": "addressInfo",
                            "type": "address"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "name": "landOwnerships",
                    "outputs": [
                        {
                            "name": "landId",
                            "type": "uint256"
                        },
                        {
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "name": "ownershipPercentage",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_email",
                            "type": "string"
                        }
                    ],
                    "name": "getBuyerByEmail",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "name": "",
                            "type": "string"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_landId",
                            "type": "uint256"
                        }
                    ],
                    "name": "getLandDetails",
                    "outputs": [
                        {
                            "name": "",
                            "type": "string"
                        },
                        {
                            "name": "",
                            "type": "string"
                        },
                        {
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "name": "",
                            "type": "uint256"
                        },
                        {
                            "name": "",
                            "type": "string"
                        },
                        {
                            "name": "",
                            "type": "string[]"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "inputs": [],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "landId",
                            "type": "uint256"
                        },
                        {
                            "indexed": true,
                            "name": "buyerId",
                            "type": "uint256"
                        }
                    ],
                    "name": "DetailsRequested",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "landId",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "landLocation",
                            "type": "string"
                        },
                        {
                            "indexed": false,
                            "name": "district",
                            "type": "string"
                        },
                        {
                            "indexed": false,
                            "name": "landPrice",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "landSize",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "plotNo",
                            "type": "string"
                        },
                        {
                            "indexed": false,
                            "name": "ownerName",
                            "type": "string"
                        }
                    ],
                    "name": "LandRegistered",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "buyerId",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "indexed": false,
                            "name": "district",
                            "type": "string"
                        },
                        {
                            "indexed": false,
                            "name": "email",
                            "type": "string"
                        },
                        {
                            "indexed": false,
                            "name": "age",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "addressInfo",
                            "type": "address"
                        }
                    ],
                    "name": "BuyerDetailsAdded",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": false,
                            "name": "landId",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "buyerId",
                            "type": "uint256"
                        },
                        {
                            "indexed": false,
                            "name": "previousOwner",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "newOwner",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "ownershipPercentage",
                            "type": "uint256"
                        }
                    ],
                    "name": "LandSold",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "buyerId",
                            "type": "uint256"
                        },
                        {
                            "indexed": true,
                            "name": "addressInfo",
                            "type": "address"
                        }
                    ],
                    "name": "BuyerAddressAdded",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "Transfer",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "approved",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "tokenId",
                            "type": "uint256"
                        }
                    ],
                    "name": "Approval",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "operator",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "approved",
                            "type": "bool"
                        }
                    ],
                    "name": "ApprovalForAll",
                    "type": "event"
                }
            ];

    const address = '0xc6625Ff1F49691768c4798c504192181B23c6fa9';
    window.contract = new web3.eth.Contract(abi, address);

           
        } catch (error) {
            console.error(error);
            alert("Please connect to MetaMask.");
        }
    } else {
        alert("Please install MetaMask to connect.");
    }
}

function registerLand() {
    var ownerName = document.getElementById("ownerName").value;
    var landLocation = document.getElementById("landLocation").value;
    var district = document.getElementById("District").value;
    var landPrice = document.getElementById("landPrice").value;
    var landSize = document.getElementById("landsize").value;
    var plotNo = document.getElementById("Plot_no").value;

    web3.eth.getAccounts().then(function (accounts) {
        return window.contract.methods.registerLand( landLocation, district, landPrice, landSize, plotNo,ownerName)
            .send({ from: accounts[0], gas: 3000000 });
    }).then(function (receipt) {
        console.log("Transaction receipt:", receipt);
        $("#ownerName").val("");
        $("#landLocation").val("");
        $("#District").val("");
        $("#landPrice").val("");
        $("#landsize").val("");
        $("#Plot_no").val("");
    }).catch(function (error) {
        console.error(error);
        alert("Error: " + error.message);
    });
}


async function getBuyerIdByEmail(email) {
    try {
        const buyer= await contract.methods.getBuyerByEmail(email).call();
        const buyerId = buyer[0];
        const buyerName = buyer[1];
        // alert(buyerName);
        return buyerId;

        
    } catch (error) {
        console.error(error);
        alert("Error: " + error.message);
    }
}

// async function getLandDetails() {
//     try {
//         var district1 = document.getElementById("districtInput").value;
//         const land = await contract.methods.getLand().call();
//         const landIds = land[0]; // Array of land IDs
//         const landLocation = land[1];
//         const District = land[2];
//         const landPrice = land[3];
//         const landsize = land[4];
//         const Plot_no = land[5];
//         const ownerName = land[6];

//         let table = `<table class="land-details-table">
//             <thead>
//                 <tr>
//                     <th>Check</th>
//                     <th>Land ID</th>
//                     <th>Land Location</th>
//                     <th>District</th>
//                     <th>Land Price</th>
//                     <th>Land Size (SQFT)</th>
//                     <th>Plot No</th>
//                     <th>Owner Name</th>
//                 </tr>
//             </thead>
//             <tbody>`;
        
//         for (let i = 0; i < landIds.length; i++) {
//             if (district1 === '' || District[i] === district1) {
//                 table += `<tr class="clickable-row">
//                 <td><input type="checkbox" id="checkbox${i}" class="row-checkbox"></td> 
//                     <td>${landIds[i]}</td>
//                     <td>${landLocation[i]}</td>
//                     <td>${District[i]}</td>
//                     <td>${landPrice[i]}</td>
//                     <td>${landsize[i]}</td>
//                     <td>${Plot_no[i]}</td>
//                     <td>${ownerName[i]}</td>
//                 </tr>`;
//             }
//         }

//         table += `</tbody></table>`;
//         document.getElementById("landDetails").innerHTML = table;

//         const checkboxes = document.querySelectorAll('.row-checkbox');
//         checkboxes.forEach((checkbox, index) => {
//             checkbox.addEventListener('click', async () => {
//                 const row = checkbox.closest('.clickable-row');
//                 const landId = landIds[index];
//                 if (checkbox.checked) {
//                     row.classList.add('selected');
//                     var storedEmail = JSON.parse(localStorage.getItem("userEmail"));
//                     const buyer = await getBuyerIdByEmail(storedEmail);
//                     console.log("Selected Land ID:", landId);
//                     console.log("Selected Buyer ID:", buyer);
//                     document.getElementById("getDetailsButton1").onclick = () => requestDetails(landId, buyer);
//                 } else {
//                     row.classList.remove('selected');
//                     document.getElementById("getDetailsButton1").disabled = true;
//                 }
//             });
//         });

//     } catch (error) {
//         console.error(error);
//         alert("Error: " + error.message);
//     }
// }


async function getLandDetails() {
    try {
        var district1 = document.getElementById("districtInput").value;
        const land = await contract.methods.getLand().call();
        const landIds = land[0]; // Array of land IDs
        const landLocation = land[1];
        const District = land[2];
        const landPrice = land[3];
        const landsize = land[4];
        const Plot_no = land[5];
        const ownerName = land[6];

        // Retrieve transferred land IDs from the contract
        const transferredLandIds = await contract.methods.getTransferredLandIds().call();

        let table = `<table class="land-details-table">
            <thead>
                <tr>
                    <th>Check</th>
                    <th>Land ID</th>
                    <th>Land Location</th>
                    <th>District</th>
                    <th>Land Price</th>
                    <th>Land Size (SQFT)</th>
                    <th>Plot No</th>
                    <th>Owner Name</th>
                </tr>
            </thead>
            <tbody>`;
        
        for (let i = 0; i < landIds.length; i++) {
            let isActive = true; // Default status
            if (district1 === '' || District[i] === district1) {
               
                if (transferredLandIds.includes(landIds[i])) {
                    isActive = false;
                }
                // Add inactive-row class to inactive rows
                const rowClass = isActive ? '' : 'inactive-row';
                table += `<tr class="clickable-row ${rowClass}" >
                    <td><input type="checkbox" id="checkbox${i}" class="row-checkbox" ${isActive ? '' : 'disabled'}></td> 
                    <td>${landIds[i]}</td>
                    <td>${landLocation[i]}</td>
                    <td>${District[i]}</td>
                    <td>${landPrice[i]}</td>
                    <td>${landsize[i]}</td>
                    <td>${Plot_no[i]}</td>
                    <td>${ownerName[i]}</td>
                </tr>`;
            }
        }

        table += `</tbody></table>`;
        document.getElementById("landDetails").innerHTML = table;

        const checkboxes = document.querySelectorAll('.row-checkbox');
        checkboxes.forEach((checkbox, index) => {
            checkbox.addEventListener('click', async () => {
                const row = checkbox.closest('.clickable-row');
                const landId = landIds[row.rowIndex - 1]; // Adjusted to get the correct landId
                if (checkbox.checked) {
                    row.classList.add('selected');
                    var storedEmail = JSON.parse(localStorage.getItem("userEmail"));
                    const buyer = await getBuyerIdByEmail(storedEmail);
                    console.log("Selected Land ID:", landId);
                    console.log("Selected Buyer ID:", buyer);
                    document.getElementById("getDetailsButton1").onclick = () => requestDetails(landId, buyer);
                } else {
                    row.classList.remove('selected');
                    document.getElementById("getDetailsButton1").disabled = true;
                }
            });
        });

    } catch (error) {
        console.error(error);
        alert("Error: " + error.message);
    }
}



async function requestDetails(landId, buyerId) {
    try {
        const accounts = await web3.eth.getAccounts();
        const buyerAddress = accounts[0];

        await contract.methods.requestDetails(landId, buyerId).send({ from: accounts[0], gas: 3000000 });

        alert("Transaction successful!");
    } catch (error) {
        console.error(error);
        alert("Transaction failed: " + error.message);
    }
}


function addBuyerDetails() {
    var name = document.getElementById("name").value;
    var district = document.getElementById("district").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var addressInfo = document.getElementById("addressInfo").value;

    console.log("Adding buyer details:", { name, district, email, age, addressInfo });

    web3.eth.getAccounts().then(function (accounts) {
        console.log("Using account:", accounts[0]);

        try {
            var checksumAddress = web3.utils.toChecksumAddress(addressInfo);

            return window.contract.methods.addBuyerDetails(name, district, email, age, checksumAddress)
                .send({ from: accounts[0], gas: 3000000 });
        } catch (error) {
            console.error("Invalid address format:", error);
            alert("Error: Invalid address format. Please provide a valid Ethereum address.");
        }
    }).then(function (receipt) {
        console.log("Transaction receipt:", receipt);
        $("#name").val("");
        $("#district").val("");
        $("#email").val("");
        $("#age").val("");
        $("#addressInfo").val("");
    }).catch(function (error) {
        console.error(error);
        alert("Error: " + error.message);
    });
}



async function displayBuyerDetails() {
    try {
        const buyers = await contract.methods.getAllBuyers().call();

        const names = buyers[0];
        const districts = buyers[1];
        const emails = buyers[2];
        const ages = buyers[3];
        const addresses = buyers[4];

        let details = '<table class="land-details-table1">';
        details += '<thead>';
        details += '<tr>';
        details += '<th>Name</th>';
        details += '<th>District</th>';
        details += '<th>Email</th>';
        details += '<th>Age</th>';
        details += '<th>Address</th>';
        details += '</tr>';
        details += '</thead>';
        details += '<tbody>';

        for (let i = 0; i < names.length; i++) {
            details += '<tr>';
            details += `<td>${names[i]}</td>`;
            details += `<td>${districts[i]}</td>`;
            details += `<td>${emails[i]}</td>`;
            details += `<td>${ages[i]}</td>`;
            details += `<td>${addresses[i]}</td>`;
            details += '</tr>';
        }

        details += '</tbody>';
        details += '</table>';

        document.getElementById("buyerDetails").innerHTML = details;
    } catch (error) {
        console.error(error);
        alert("Error: " + error.message);
    }
}




function transferOwnership() {
    var landId = document.getElementById("landIdTransfer").value;
    var buyerId = document.getElementById("buyerIdTransfer").value;
    var landper= document.getElementById("landTransferpercent").value;
    web3.eth.getAccounts().then(function (accounts) {
        return window.contract.methods.buyLand(landId, buyerId,landper)
            .send({ from: accounts[0], gas: 3000000 });
    }).then(function (receipt) {
        console.log("Transaction receipt:", receipt);
        alert("Ownership transferred successfully!");
        displayTransferDetails(landId, buyerId);
    }).catch(function (error) {
        console.error(error);
        alert("Error: " + error.message);
    });
}


async function displayTransferDetails(landId) {
    try {
       
        const events = await window.contract.getPastEvents('LandSold', {
            filter: { landId: landId },
            fromBlock: 0,
            toBlock: 'latest'
        });

        const latestEvent = events[events.length - 1];
        const previousOwner = latestEvent.returnValues.previousOwner;
        const newOwner = latestEvent.returnValues.newOwner;

        const land = await window.contract.methods.getLandDetails(landId).call();

        $("#transferDetails").html(`
            Land with ID ${landId} transferred:
            <br> <br>From Previous Owner Address: ${previousOwner}
            <br><br>To New Owner Address: ${newOwner}
            <br> <br>Land Details:
            <table border="1" style="margin-left:2%";>
            <tr>
                <th>Location</th>
                <th>District</th>
                <th>Price</th>
                <th>Size</th>
                <th>Plot Number</th>
                <th>Owner Name</th>
            </tr>
            <tr>
                <td>${land[0]}</td>
                <td>${land[1]}</td>
                <td>${land[2]}</td>
                <td>${land[3]} SQFT</td>
                <td>${land[4]}</td>
                <td>${land[5]}</td>
            </tr>
        </table>
        
        `);
    } catch (error) {
        console.error(error);
        alert("Error: " + error.message);
    }
}

$(document).ready(function() {
    Connect();
});






// async function getLandDetails1() {
//     try {
//         var district1 = document.getElementById("districtInput").value;

//         const land = await contract.methods.getLand().call();
        
//         const landIds = land[0]; // Array of land IDs
//         // Array of owner names
//         const landLocation = land[1];
//         const District = land[2];
//         const landPrice = land[3];
//         const landsize = land[4];
//         const Plot_no = land[5];
//         const ownerName = land[6];
//         const landownership=land[7];

//         let table = `<table class="land-details-table">
//             <thead>
//                 <tr>
//                 <th>S.No</th>
//                     <th>Land Location</th>
//                     <th>District</th>
//                     <th>Land Price</th>
//                     <th>Land Size (SQFT)</th>
//                     <th>Plot No</th>
//                     <th>Owner Name</th>
//                     <th>landownership</th>
//                 </tr>
//             </thead>
//             <tbody>`;
        
//         for (let i = 0; i < ownerName.length; i++) {
//             if (district1 === '' || District[i] === district1) {
//                 table += `<tr class="clickable-row">
//                 <td>${landIds[i]}</td>
//                     <td>${landLocation[i]}</td>
//                     <td>${District[i]}</td>
//                     <td>${landPrice[i]}</td>
//                     <td>${landsize[i]}</td>
//                     <td>${Plot_no[i]}</td>
//                     <td>${ownerName[i]}</td>
//                     <td>${landownership[i]}</td>
//                 </tr>`;
//             }
//         }

//         table += `</tbody></table>`;

//         document.getElementById("landDetails").innerHTML = table;

//     } catch (error) {
//         console.error(error);
//         alert("Error: " + error.message);
//     }
// }





// async function RequetedLandDetails() {
//     try {
//         const landDetailsArray = await contract.methods.displayAllRequestedDetails().call();
        
//         let table = `<table class="land-details-table3">
//             <thead>
//                 <tr>
//                     <th>Select</th>
//                     <th>LandId</th>
//                     <th>Location</th>
//                     <th>District</th>
//                     <th>Land Price</th>
//                     <th>Land Size (SQFT)</th>
//                     <th>Plot No</th>
//                     <th>Owner Name</th>
//                     <th>Buyer IDs</th>
//                     <th>Buyer Names</th>
//                 </tr>
//             </thead>
//             <tbody>`;
        
//         for (let i = 0; i < landDetailsArray.length; i++) {
//             const landDetail = landDetailsArray[i];
//             const landId = landDetail.landId;
//             const Location = landDetail.landLocation;
//             const district = landDetail.district;
//             const landPrice = landDetail.landPrice;
//             const landSize = landDetail.landSize;
//             const plotNo = landDetail.plotNo;
//             const ownerNames = landDetail.ownerNames;
//             const buyerIds = landDetail.buyerIds.join(', ');
//             const buyerNames = landDetail.buyerNames.join(', ');
            
//             table += `<tr class="clickable-row">
//                 <td><input type="checkbox" class="select-checkbox" data-land-id="${landId}" data-buyer-id="${landDetail.buyerIds[0]}" /></td>
//                 <td>${landId}</td>
//                 <td>${Location}</td>
//                 <td>${district}</td>
//                 <td>${landPrice}</td>
//                 <td>${landSize}</td>
//                 <td>${plotNo}</td>
//                 <td>${ownerNames}</td>
//                 <td>${buyerIds}</td>
//                 <td>${buyerNames}</td>
//             </tr>`;
//         }

//         table += `</tbody></table>`;

//         document.getElementById("requestedlandsdetails").innerHTML = table;
//         document.getElementById("redirectButton1").style.display = "block"; // Show the "buy" button

//         // Add event listener to checkboxes
//         document.querySelectorAll('.select-checkbox').forEach(checkbox => {
//             checkbox.addEventListener('change', function() {
//                 // Uncheck other checkboxes
//                 document.querySelectorAll('.select-checkbox').forEach(cb => {
//                     if (cb !== this) cb.checked = false;
//                 });

//                 if (this.checked) {
//                     const landId = this.getAttribute('data-land-id');
//                     const buyerId = this.getAttribute('data-buyer-id');

//                     // Store the landId and buyerId in local storage
//                     localStorage.setItem('selectedLandId', landId);
//                     localStorage.setItem('selectedBuyerId', buyerId);

//                     document.getElementById('redirectButton1').disabled = false;
//                 } else {
//                     document.getElementById('redirectButton1').disabled = true;

//                     // Clear the local storage
//                     localStorage.removeItem('selectedLandId');
//                     localStorage.removeItem('selectedBuyerId');
//                 }
//             });
//         });

//     } catch (error) {
//         console.error(error);
//         alert("Error: " + error.message);
//     }
// }


async function getLandDetails1() {
    try {
        var district1 = document.getElementById("districtInput").value;

        // Retrieve transferred land IDs from the contract
        const transferredLandIds = await contract.methods.getTransferredLandIds().call();

        const land = await contract.methods.getLand().call();
        
        const landIds = land[0]; // Array of land IDs
        const landLocation = land[1];
        const District = land[2];
        const landPrice = land[3];
        const landsize = land[4];
        const Plot_no = land[5];
        const ownerName = land[6];
        const landownership = land[7];

        let table = `<table class="land-details-table">
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>Land Location</th>
                    <th>District</th>
                    <th>Land Price</th>
                    <th>Land Size (SQFT)</th>
                    <th>Plot No</th>
                    <th>Owner Name</th>
                    <th>landownership</th>
                </tr>
            </thead>
            <tbody>`;
        
        for (let i = 0; i < ownerName.length; i++) {
            if (district1 === '' || District[i] === district1) {
                // Check if the land ID is in the transferred land IDs array
                const isTransferred = transferredLandIds.includes(landIds[i]);
                // Set row color based on whether the land is transferred or not
                const rowColor = isTransferred ? 'background-color: #f7a0a0;' : ''; // Use red background color for transferred lands

                table += `<tr class="clickable-row" style="${rowColor}">
                    <td>${landIds[i]}</td>
                    <td>${landLocation[i]}</td>
                    <td>${District[i]}</td>
                    <td>${landPrice[i]}</td>
                    <td>${landsize[i]}</td>
                    <td>${Plot_no[i]}</td>
                    <td>${ownerName[i]}</td>
                    <td>${landownership[i]}</td>
                </tr>`;
            }
        }

        table += `</tbody></table>`;

        document.getElementById("landDetails").innerHTML = table;

    } catch (error) {
        console.error(error);
        alert("Error: " + error.message);
    }
}



async function RequetedLandDetails() {
    try {
        const landDetailsArray = await contract.methods.displayAllRequestedDetails().call();
        
        // Retrieve transferred land IDs from the contract
        const transferredLandIds = await contract.methods.getTransferredLandIds().call();

        let table = `<table class="land-details-table3">
            <thead>
                <tr>
                    <th>Select</th>
                    <th>LandId</th>
                    <th>Location</th>
                    <th>District</th>
                    <th>Land Price</th>
                    <th>Land Size (SQFT)</th>
                    <th>Plot No</th>
                    <th>Owner Name</th>
                    <th>Buyer IDs</th>
                    <th>Buyer Names</th>
                </tr>
            </thead>
            <tbody>`;
        
        // Filter out transferred land IDs from the land details array
        const filteredLandDetails = landDetailsArray.filter(landDetail => !transferredLandIds.includes(landDetail.landId));

        for (let i = 0; i < filteredLandDetails.length; i++) {
            const landDetail = filteredLandDetails[i];
            const landId = landDetail.landId;
            const Location = landDetail.landLocation;
            const district = landDetail.district;
            const landPrice = landDetail.landPrice;
            const landSize = landDetail.landSize;
            const plotNo = landDetail.plotNo;
            const ownerNames = landDetail.ownerNames;
            const buyerIds = landDetail.buyerIds.join(', ');
            const buyerNames = landDetail.buyerNames.join(', ');
            
            table += `<tr class="clickable-row">
                <td><input type="checkbox" class="select-checkbox" data-land-id="${landId}" data-buyer-id="${landDetail.buyerIds[0]}" /></td>
                <td>${landId}</td>
                <td>${Location}</td>
                <td>${district}</td>
                <td>${landPrice}</td>
                <td>${landSize}</td>
                <td>${plotNo}</td>
                <td>${ownerNames}</td>
                <td>${buyerIds}</td>
                <td>${buyerNames}</td>
            </tr>`;
        }

        table += `</tbody></table>`;

        document.getElementById("requestedlandsdetails").innerHTML = table;
        document.getElementById("redirectButton1").style.display = "block"; // Show the "buy" button

        // Add event listener to checkboxes
        document.querySelectorAll('.select-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                // Uncheck other checkboxes
                document.querySelectorAll('.select-checkbox').forEach(cb => {
                    if (cb !== this) cb.checked = false;
                });

                if (this.checked) {
                    const landId = this.getAttribute('data-land-id');
                    const buyerId = this.getAttribute('data-buyer-id');

                    // Store the landId and buyerId in local storage
                    localStorage.setItem('selectedLandId', landId);
                    localStorage.setItem('selectedBuyerId', buyerId);

                    document.getElementById('redirectButton1').disabled = false;
                } else {
                    document.getElementById('redirectButton1').disabled = true;

                    // Clear the local storage
                    localStorage.removeItem('selectedLandId');
                    localStorage.removeItem('selectedBuyerId');
                }
            });
        });

    } catch (error) {
        console.error(error);
        alert("Error: " + error.message);
    }
}


function redirectToIndex() {
    const selectedCheckbox = document.querySelector('.select-checkbox:checked');
    if (selectedCheckbox) {
        // Retrieve the landId and buyerId from local storage
        const selectedLandId = localStorage.getItem('selectedLandId');
        const selectedBuyerId = localStorage.getItem('selectedBuyerId');

        if (selectedLandId && selectedBuyerId) {
            console.log("Selected Land ID:", selectedLandId);
            console.log("Selected Buyer ID:", selectedBuyerId);
            showSection('transferOwnership');
        } else {
            alert("Please select a land detail first.");
        }
    } else {
        alert("Please select a land detail first.");
    }
}





