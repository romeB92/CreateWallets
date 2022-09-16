const { ethers } = require("ethers");

//By : 0xdaebak
//https://github.com/0xdaebak

//Generate Wallet
let createWallet = () => {
    let createWallet = ethers.Wallet.createRandom();

    console.log('address:', createWallet.address)
    console.log('mnemonic:', createWallet.mnemonic.phrase)
    console.log('privateKey:', createWallet.privateKey)

}
createWallet();
