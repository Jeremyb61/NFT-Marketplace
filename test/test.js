/* test/sample-test.js */
describe("NFTMarket", function () {
  let nft;
  let market;
  let listingPrice;
  let auctionPrice;
  let marketAddress;
  let nftContractAddress;

  it("Should deploy the marketplace", async function () {
    /* deploy the marketplace */
    // whenever you deploy contracts, you use getContractFactory!!

    // ??? but no contract named NFTMarket ??
    const Market = await ethers.getContractFactory("NFTMarket")
    market = await Market.deploy()
    await market.deployed()
    marketAddress = market.address
  })
  it("should deploy the NFT contract", async function () {
    /* deploy the NFT contract */
    // whenever you deploy contracts, you use getContractFactory!!
    const NFT = await ethers.getContractFactory("NFT")
    nft = await NFT.deploy(marketAddress)
    await nft.deployed()
    nftContractAddress = nft.address

    listingPrice = await market.getListingPrice();
    listingPrice = listingPrice.toString();
    auctionPrice = ethers.utils.parseUnits('1', 'ether');
  })
  it("should create two tokens", async function () {

    /* create two tokens */
    await nft.createToken("https://www.mytokenlocation.com")
    await nft.createToken("https://www.mytokenlocation2.com")
  })

  it("should put both tokens for sale", async function () {

    /* put both tokens for sale */
    await market.createMarketItem(nftContractAddress, 1, auctionPrice, { value: listingPrice })
    await market.createMarketItem(nftContractAddress, 2, auctionPrice, { value: listingPrice })

  })

  it("should execute sale of token to another user", async function () {
    /* execute sale of token to another user */
    // what is getSigners???
    const [_, buyerAddress] = await ethers.getSigners()
    await market.connect(buyerAddress).createMarketSale(nftContractAddress, 1, { value: auctionPrice })
  })
  it("should query for and return the unsold items", async function () {

    // /* query for and return the unsold items */
    let items = await market.fetchMarketItems()
    items = await Promise.all(items.map(async i => {
      const tokenUri = await nft.tokenURI(i.tokenId)
      let item = {
        price: i.price.toString(),
        tokenId: i.tokenId.toString(),
        seller: i.seller,
        owner: i.owner,
        tokenUri
      }
      return item
    }))
    console.log('items: ', items)
  })
})