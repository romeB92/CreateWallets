const { ethers } = require("ethers");

//By : 0xdaebak
//https://github.com/0xdaebak

//Generate Single Wallet
// let singleWallet = () => {
//     let createWallet = ethers.Wallet.createRandom();

//     console.log('address:', createWallet.address)
//     console.log('mnemonic:', createWallet.mnemonic.phrase)
//     console.log('privateKey:', createWallet.privateKey)

// }

//Generate Multi Wallet
const fs = require('fs');

let multiWallet = () => {
    let walletCount = 100;
    let wallets = [];

    for (let i = 0; i < walletCount; i++) {
        let createWallet = ethers.Wallet.createRandom();
        wallets.push(`Wallet ${i + 1}:\nAddress: ${createWallet.address}\nPrivateKey: ${createWallet.privateKey}\nMnemonic: ${createWallet.mnemonic.phrase}\n\n`);
    }

    fs.writeFile('wallets.txt', wallets.join(''), (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        console.log('Wallets successfully saved to wallets.txt');
    });
}

multiWallet();


