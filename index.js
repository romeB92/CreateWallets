const { ethers } = require("ethers");


//Generate Wallet
let createWallet = () => {
    let createWallet = ethers.Wallet.createRandom();

    console.log('address:', createWallet.address)
    console.log('mnemonic:', createWallet.mnemonic.phrase)
    console.log('privateKey:', createWallet.privateKey)

}
createWallet();
