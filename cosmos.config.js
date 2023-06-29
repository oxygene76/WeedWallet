export default [
 {
    chainId: 'bitcanna-1',
    name: 'BitCanna',
    desc: 'BitCanna',
    apiURL: 'https://lcd.bitcanna.io',
    rpcURL: 'https://rpc.bitcanna.io',
    coinLookup: {
      viewDenom: 'BCNA',
      chainDenom: 'ubcna',
      addressPrefix: 'bcna',
      icon: `https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg`,
    },
    feeMultiplier: 1.5,
    gasPrice: 0.025,
    coingeckoId: "bitcanna",
    maxTxSenderHome: 5,
    maxTxRecipientHome: 5,
    maxTxSender: 50,
    maxTxRecipient: 50,
    addressAllowedProp: [
      'bcna1csyzlg52g2kd8e0xd6f6elckydhr93ukc3wmqt', // R
      'bcna153hxvnx24h07aptul43fsuyeq7kgt2erequ6us', // R
      'bcna1tqywev6xmvrnagfq57c0h5susdy3l789rumufz', // R
      'bcna13jawsn574rf3f0u5rhu7e8n6sayx5gkwgusz73' // J
    ]
  },
    /*  website: "https://wallet-testnet.bitcanna.io",
    chainId: "bitcanna-dev-1",
    name: "Bitcanna-testnet-1",
    desc: "Bitcanna-testnet",
    apiURL: "https://lcd-testnet.bitcanna.io",
    rpcURL: "https://rpc-testnet.bitcanna.io",
    coinLookup: {
      viewDenom: "BCNA",
      chainDenom: "ubcna",
      addressPrefix: "bcna",
      icon: `https://raw.githubusercontent.com/cosmos/chain-registry/master/bitcanna/images/bcna.svg`,
    },
    feeMultiplier: 1.5,
    gasPrice: 0.025,
    coingeckoId: "bitcanna",
    maxTxSenderHome: 5,
    maxTxRecipientHome: 5,
    maxTxSender: 50,
    maxTxRecipient: 50,
    addressAllowedProp: [
      'bcna1csyzlg52g2kd8e0xd6f6elckydhr93ukc3wmqt', // R
      'bcna153hxvnx24h07aptul43fsuyeq7kgt2erequ6us', // R
      'bcna1tqywev6xmvrnagfq57c0h5susdy3l789rumufz', // R
      'bcna13jawsn574rf3f0u5rhu7e8n6sayx5gkwgusz73' // J
    ]
  },*/
];
