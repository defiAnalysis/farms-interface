import { getAddress } from 'utils/addressHelpers'

describe('getAddress', () => {
  const address = {
    65: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
  }

  it(`get address for mainnet (chainId 65)`, () => {
    process.env.REACT_APP_CHAIN_ID = '65'
    const expected = address[65]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for testnet (chainId 97)`, () => {
    process.env.REACT_APP_CHAIN_ID = '97'
    const expected = address[97]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for any other network (chainId 31337)`, () => {
    process.env.REACT_APP_CHAIN_ID = '31337'
    const expected = address[65]
    expect(getAddress(address)).toEqual(expected)
  })
})
