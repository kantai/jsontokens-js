'use strict'

import { SECP256K1Client } from './secp256k1'

const cryptoClients = {
  ES256K: SECP256K1Client
}

export {
  SECP256K1Client,
  cryptoClients
}