require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help future spot toy note oval coconut install climb olympic truth'; 
let testAccounts = [
"0x1f41ab64698d2638a068c2e48fcb2f7652e1ade0a7ccd6554e4cbec1d35afba5",
"0xb54bff6c1dc3d4ddb2f7273a5cf82a2d83d7f51ac7cfebb881f67a1d4b0fc59b",
"0xe8e835ab3a556daee3033070b157cb18de414d23e1e6cff7e589dcd1a43399a0",
"0x8544fe15a8fd122089f19ae83706e1480a2126b3742d82cc13091baa5f2cc469",
"0xf9a2f682c762fa1c604f8ba9a17b9e743b784724beef3a5985c3caeea36a0a12",
"0x5cd89372ad8e2371071db86c39a11c9e3ccf26f7bde65af099de2073369ea24d",
"0x708e61d3752d96f43391efe215d4e8408380965dec2a2ef7078fb9e58c41f9e8",
"0xecec7b0997b93d50a71ae63e82cb6cd1aba706f75611951849a460f37814ddd8",
"0x8baeb3894074ba177ee6d0c6ff1ff9ca422ab8a68c412f4c19350884131837f6",
"0x5445db2275faff86409d9d14571db00c6dec26dfaeff038ef8b29a4d3f54244d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


