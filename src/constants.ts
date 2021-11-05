import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  MATIC = 137,
  MATIC_TESTNET = 80001,
  FANTOM = 250,
  FANTOM_TESTNET = 4002,
  XDAI = 100,
  BSC = 56,
  BSC_TESTNET = 97,
  ARBITRUM = 79377087078960,
  MOONBASE = 1287,
  AVALANCHE = 43114,
  FUJI = 43113,
  HECO = 128,
  HECO_TESTNET = 256,
  HARMONY = 1666600000,
  HARMONY_TESTNET = 1666700000,
  OKEX = 66,
  OKEX_TESTNET = 65,
  DUSTY = 80,
  SHIBUYA = 81,
  SHIDEN = 336
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const INIT_CODE_HASH: string = '0x0de568581816d9ba7b1f7a4ffc56998ff6c30a76d3665a052258f5bf8f876783'

export const FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x0Af64bDA476628251dd9F88c9b0CA0b5DB17BFc1',
  [ChainId.ROPSTEN]: '0x4f8Dcb4fd9eA4F96e09F45a26ab4dF314ca6ada1',
  [ChainId.RINKEBY]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.GÖRLI]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.KOVAN]: '0x7Bf0D84E793089d04A9578E4A62A9194AeF44903',
  [ChainId.FANTOM]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.MATIC_TESTNET]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.XDAI]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.BSC]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.BSC_TESTNET]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '0x2Ce3F07dD4c62b56a502E223A7cBE38b1d77A1b5',
  [ChainId.AVALANCHE]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.FUJI]: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
  [ChainId.HECO]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.HECO_TESTNET]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.HARMONY]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.HARMONY_TESTNET]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.OKEX]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.OKEX_TESTNET]: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4',
  [ChainId.DUSTY]: '0xc1AdcEF12dFc1B1C097ABa8302DCeeedAa3048CF',
  [ChainId.SHIBUYA]: '0x43C525Ed73f474685650f1C18132Ec172293E2b4',
  [ChainId.SHIDEN]: '0x20c05B9D6546e60556dE510D58ac100783ad46B1',
}

export const ROUTER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x11cf19Fd46B16cda960D0eA9149Bd2c9F2AE0e21',
  [ChainId.RINKEBY]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.ROPSTEN]: '0x7D9a8baD34226a5834ED5aC1355dD981b13A08A3',
  [ChainId.GÖRLI]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.KOVAN]: '0x30939CD2fFC35748318D397D9103713c540c0aBF',
  [ChainId.FANTOM]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.MATIC_TESTNET]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.XDAI]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.BSC]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.BSC_TESTNET]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '0xeB5c2BB5E83B51d83F3534Ae21E84336B8B376ef',
  [ChainId.AVALANCHE]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.FUJI]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.HECO]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.HECO_TESTNET]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.HARMONY]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.HARMONY_TESTNET]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.OKEX]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.OKEX_TESTNET]: '0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506',
  [ChainId.DUSTY]: '0xA4F42578c723A5B6781A9F49d586B8645ba85C31',
  [ChainId.SHIBUYA]: '0xd75729d2A56132FEdCEb2A67c406A05a62dA8132',
  [ChainId.SHIDEN]: '0xeB5ef73D8AdC049BEE0f87403B1c46c44CD8CF59',
}

export const SUSHI_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
  [ChainId.ROPSTEN]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  [ChainId.RINKEBY]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  [ChainId.GÖRLI]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  [ChainId.KOVAN]: '0x0769fd68dFb93167989C6f7254cd0D766Fb2841F',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: '',
  [ChainId.DUSTY]: '',
  [ChainId.SHIBUYA]: '',
  [ChainId.SHIDEN]: '',
}

export const MASTERCHEF_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd',
  [ChainId.ROPSTEN]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  [ChainId.RINKEBY]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  [ChainId.GÖRLI]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  [ChainId.KOVAN]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: '',
  [ChainId.DUSTY]: '0x80C7DD17B01855a6D2347444a0FCC36136a314de',
  [ChainId.SHIBUYA]: '',
  [ChainId.SHIDEN]: '',
}

export const BAR_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272',
  [ChainId.ROPSTEN]: '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c',
  [ChainId.RINKEBY]: '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c',
  [ChainId.GÖRLI]: '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c',
  [ChainId.KOVAN]: '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: '',
  [ChainId.DUSTY]: '0x1be211D8DA40BC0ae8719c6663307Bfc987b1d6c',
  [ChainId.SHIBUYA]: '',
  [ChainId.SHIDEN]: '',
}

export const MAKER_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xE11fc0B43ab98Eb91e9836129d1ee7c3Bc95df50',
  [ChainId.ROPSTEN]: '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa',
  [ChainId.RINKEBY]: '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa',
  [ChainId.GÖRLI]: '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa',
  [ChainId.KOVAN]: '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: '',
  [ChainId.DUSTY]: '0x1b9d177CcdeA3c79B6c8F40761fc8Dc9d0500EAa',
  [ChainId.SHIBUYA]: '',
  [ChainId.SHIDEN]: '',
}

export const TIMELOCK_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x9a8541Ddf3a932a9A922B607e9CF7301f1d47bD1',
  [ChainId.ROPSTEN]: '',
  [ChainId.RINKEBY]: '',
  [ChainId.GÖRLI]: '',
  [ChainId.KOVAN]: '',
  [ChainId.FANTOM]: '',
  [ChainId.FANTOM_TESTNET]: '',
  [ChainId.MATIC]: '',
  [ChainId.MATIC_TESTNET]: '',
  [ChainId.XDAI]: '',
  [ChainId.BSC]: '',
  [ChainId.BSC_TESTNET]: '',
  [ChainId.ARBITRUM]: '',
  [ChainId.MOONBASE]: '',
  [ChainId.AVALANCHE]: '',
  [ChainId.FUJI]: '',
  [ChainId.HECO]: '',
  [ChainId.HECO_TESTNET]: '',
  [ChainId.HARMONY]: '',
  [ChainId.HARMONY_TESTNET]: '',
  [ChainId.OKEX]: '',
  [ChainId.OKEX_TESTNET]: '',
  [ChainId.DUSTY]: '',
  [ChainId.SHIBUYA]: '',
  [ChainId.SHIDEN]: '',
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
