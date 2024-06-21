// SPDX-License-Identifier: MIT
pragma solidity ^0.5.1;
pragma experimental ABIEncoderV2;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/blob/v2.3.0/contracts/token/ERC721/ERC721Full.sol";

contract LandRegistry is ERC721Full {
    struct Land {
        string landLocation;
        string district;
        uint256 landPrice;
        uint256 landSize;
        string plotNo;
        string[] ownerNames;
        mapping(uint256 => bool) requestedFunctions; 
    }
    struct Buyer {
        string name;
        string district;
        string email;
        uint256 age;
        address addressInfo;
        mapping(uint256 => bool) requestedFunctions; 
    }
    struct FractionalOwnership {
        uint256 landId;
        address owner;
        uint256 ownershipPercentage; 
    }
    struct LandDetails {
        uint256 landId;
        string landLocation;
        string district;
        uint256 landPrice;
        uint256 landSize;
        string plotNo;
        string[] ownerNames;
        uint256[] buyerIds;
        string[] buyerNames;
    }

    mapping(uint256 => Land) public lands;
    mapping(uint256 => Buyer) public buyers;
    mapping(uint256 => FractionalOwnership[]) public landOwnerships; 
    mapping(string => uint256[]) private landsByDistrict; 
    mapping(string => uint256) private emailToBuyerId; 
    uint256 public landCount;
    uint256 public buyerCount;
    uint256[] public transferedLandIds; // New array to store transferred landIds

    event DetailsRequested(uint256 indexed landId, uint256 indexed buyerId);
    event LandRegistered(uint256 landId, string landLocation, string district, uint256 landPrice, uint256 landSize, string plotNo, string ownerName);
    event BuyerDetailsAdded(uint256 buyerId, string name, string district, string email, uint256 age, address addressInfo);
    event LandSold(uint256 landId, uint256 buyerId, address previousOwner, address newOwner, uint256 ownershipPercentage);
    event BuyerAddressAdded(uint256 indexed buyerId, address indexed addressInfo);

    constructor() ERC721Full("LandToken", "LAND") public {}

    function registerLand(string memory _landLocation, string memory _district, uint256 _landPrice, uint256 _landSize, string memory _plotNo, string memory _ownerName) public {
        landCount++;
        string[] memory initialOwnerNames = new string[](1);
        initialOwnerNames[0] = _ownerName;
        lands[landCount] = Land(_landLocation, _district, _landPrice, _landSize, _plotNo, initialOwnerNames);
        _mint(msg.sender, landCount);
        landOwnerships[landCount].push(FractionalOwnership(landCount, msg.sender, 10000));

        emit LandRegistered(landCount, _landLocation, _district, _landPrice, _landSize, _plotNo, _ownerName);
    }

    function getLand() public view returns (uint256[] memory, string[] memory, string[] memory, uint256[] memory, uint256[] memory, string[] memory, string[][] memory, uint256[][] memory) {
        uint256[] memory landIds = new uint256[](landCount);
        string[] memory landLocation = new string[](landCount);
        string[] memory district = new string[](landCount);
        uint256[] memory landPrice = new uint256[](landCount);
        uint256[] memory landSize = new uint256[](landCount);
        string[] memory plotNo = new string[](landCount);
        string[][] memory ownerNames = new string[][](landCount);
        uint256[][] memory ownershipAmounts = new uint256[][](landCount);

        for (uint256 i = 1; i <= landCount; i++) {
            Land memory land = lands[i];
            landIds[i - 1] = i; // Store the land ID
            landLocation[i - 1] = land.landLocation;
            district[i - 1] = land.district;
            landPrice[i - 1] = land.landPrice;
            landSize[i - 1] = land.landSize;
            plotNo[i - 1] = land.plotNo;
            ownerNames[i - 1] = land.ownerNames;

            FractionalOwnership[] memory ownerships = landOwnerships[i];
            uint256[] memory amounts = new uint256[](ownerships.length);
            for (uint256 j = 0; j < ownerships.length; j++) {
                amounts[j] = (ownerships[j].ownershipPercentage * land.landSize) / 10000;
            }
            ownershipAmounts[i - 1] = amounts;
        }

        return (landIds, landLocation, district, landPrice, landSize, plotNo, ownerNames, ownershipAmounts);
    }

    function addBuyerDetails(string memory _name, string memory _district, string memory _email, uint256 _age, address _addressInfo) public {
        buyerCount++;
        buyers[buyerCount] = Buyer(_name, _district, _email, _age, _addressInfo);
        emailToBuyerId[_email] = buyerCount;
        emit BuyerDetailsAdded(buyerCount, _name, _district, _email, _age, _addressInfo);
        emit BuyerAddressAdded(buyerCount, _addressInfo);
    }

    function buyLand(uint256 _landId, uint256 _buyerId, uint256 _ownershipPercentage) public {
        require(_buyerId > 0 && _buyerId <= buyerCount, "Invalid buyer ID");
        require(_landId > 0 && _landId <= landCount, "Invalid land ID");
        require(_ownershipPercentage > 0 && _ownershipPercentage <= 10000, "Invalid ownership percentage");

        address newOwner = buyers[_buyerId].addressInfo;
        string memory newOwnerName = buyers[_buyerId].name;
        uint256 sellerIndex = findFractionalOwnershipIndex(_landId, msg.sender);
        require(sellerIndex != uint256(-1), "Seller does not own any part of this land");

        FractionalOwnership storage sellerOwnership = landOwnerships[_landId][sellerIndex];
        require(sellerOwnership.ownershipPercentage >= _ownershipPercentage, "Seller does not have enough ownership to sell");
        sellerOwnership.ownershipPercentage -= _ownershipPercentage;
        landOwnerships[_landId].push(FractionalOwnership(_landId, newOwner, _ownershipPercentage));

        lands[_landId].ownerNames.push(newOwnerName);

        emit LandSold(_landId, _buyerId, msg.sender, newOwner, _ownershipPercentage);
        transferedLandIds.push(_landId); // Store the transferred landId
    }

    function findFractionalOwnershipIndex(uint256 _landId, address _owner) internal view returns (uint256) {
        for (uint256 i = 0; i < landOwnerships[_landId].length; i++) {
            if (landOwnerships[_landId][i].owner == _owner) {
                return i;
            }
        }
        return uint256(-1);
    }

    function getAllBuyers() public view returns (uint256[] memory, string[] memory, string[] memory, string[] memory, uint256[] memory, address[] memory) {
        uint256[] memory ids = new uint256[](buyerCount);
        string[] memory names = new string[](buyerCount);
        string[] memory districts = new string[](buyerCount);
        string[] memory emails = new string[](buyerCount);
        uint256[] memory ages = new uint256[](buyerCount);
        address[] memory addresses = new address[](buyerCount);

        for (uint256 i = 1; i <= buyerCount; i++) {
            Buyer memory buyer = buyers[i];
            ids[i - 1] = i;
            names[i - 1] = buyer.name;
            districts[i - 1] = buyer.district;
            emails[i - 1] = buyer.email;
            ages[i - 1] = buyer.age;
            addresses[i - 1] = buyer.addressInfo;
        }

        return (ids, names, districts, emails, ages, addresses);
    }

    function getBuyerByEmail(string memory _email) public view returns (uint256, string memory) {
        uint256 buyerId = emailToBuyerId[_email];
        require(buyerId > 0 && buyerId <= buyerCount, "Buyer not found");

        Buyer memory buyer = buyers[buyerId];
        return (buyerId, buyer.name);
    }

    mapping(uint256 => bool) public requestedLands; 
    mapping(uint256 => uint256[]) public landRequests; 

    function requestDetails(uint256 _landId, uint256 _buyerId) public {
        require(_landId > 0 && _landId <= landCount, "Invalid land ID");
        require(_buyerId > 0 && _buyerId <= buyerCount, "Invalid buyer ID");

        requestedLands[_landId] = true;
        landRequests[_landId].push(_buyerId); 

        emit DetailsRequested(_landId, _buyerId);
    }

    function displayRequestedDetails(uint256 _landId) public view returns (LandDetails memory) {
        require(requestedLands[_landId], "Land has not been requested");

        Land memory land = lands[_landId];
        uint256[] memory buyerIds = landRequests[_landId];
        string[] memory buyerNames = getBuyerNames(buyerIds);

        return LandDetails({
            landId: _landId,
            landLocation: land.landLocation,
            district: land.district,
            landPrice: land.landPrice,
            landSize: land.landSize,
            plotNo: land.plotNo,
            ownerNames: land.ownerNames,
            buyerIds: buyerIds,
            buyerNames: buyerNames
        });
    }

    function getBuyerNames(uint256[] memory _buyerIds) internal view returns (string[] memory) {
        string[] memory names = new string[](_buyerIds.length);
        for (uint256 i = 0; i < _buyerIds.length; i++) {
            names[i] = buyers[_buyerIds[i]].name;
        }
        return names;
    }

    function displayAllRequestedDetails() public view returns (LandDetails[] memory) {
        uint256 totalRequests = countRequestedLands();
        LandDetails[] memory landDetails = new LandDetails[](totalRequests);

        uint256 index = 0;
        for (uint256 i = 1; i <= landCount; i++) {
            if (requestedLands[i]) {
                landDetails[index] = displayRequestedDetails(i);
                index++;
            }
        }

        return landDetails;
    }

    function countRequestedLands() internal view returns (uint256) {
        uint256 count = 0;
        for (uint256 i = 1; i <= landCount; i++) {
            if (requestedLands[i]) {
                count++;
            }
        }
        return count;
    }

    function getLandDetails(uint256 _landId) public view returns (string memory, string memory, uint256, uint256, string memory, string[] memory) {
        Land memory land = lands[_landId];
        return (land.landLocation, land.district, land.landPrice, land.landSize, land.plotNo, land.ownerNames);
    }

    function getTransferredLandIds() public view returns (uint256[] memory) {
        return transferedLandIds;
    }
}