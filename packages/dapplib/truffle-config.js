require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth screen common hunt lonely flower general'; 
let testAccounts = [
"0x0411c443457630f1b9e68534653c91c6cf13485d18ec84ca7d0c4ac485299f04",
"0xd51ba24bfc097d48879695c8fcb33b1a65c9911364f38e1d37313318954380cd",
"0x37d5370af0994f356b7814eb537975502901f089264548c822b6341e50b668cc",
"0x79190b0c84972455a78029742e87d0120ea58820e297df41ad88498d68abac9e",
"0x75e0d8c740003cd0145b657da5671b4573db1d14d4d64e629fdfe82d8fe64706",
"0x9a466020d243289daa6e4d1ed91071cea97b17175d9afd932e54af8ced928e65",
"0xc10d2057eedf43c3306f66244e62e7cf6f08c5eee583cab273a12be1d44d71a4",
"0xb8ae07f02c474b91ed01b5175d1a5a473c2f8dbb1b163296a78bc5055ec7ec93",
"0xd01f317fa321462680e04a5eb0c65253df8e4dec2eb75e01a72ca342e95a7b37",
"0x80f6c862d4c9b1ddbaf7f75772bf526418f023eda175fe117a7e7a84bb670496"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
