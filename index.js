const { ethers } = require("ethers");

//By : 0xdaebak
//https://github.com/0xdaebak

//Generate Single Wallet
let singleWallet = () => {
    let createWallet = ethers.Wallet.createRandom();

    console.log('address:', createWallet.address)
    console.log('mnemonic:', createWallet.mnemonic.phrase)
    console.log('privateKey:', createWallet.privateKey)

}

//Generate Multi Wallet
let multiWallet = () =>{

    //create 5 wallets
    let walletCount = 5;

    //wallet Array
    let wallets = [];

    for (let i = 0; i < walletCount; i++) {
        let createWallet = ethers.Wallet.createRandom();
        wallets.push(createWallet);
    }

    console.log(wallets[0].address);
    console.log(wallets[1].address);
    console.log(wallets[2].address);
    console.log(wallets[3].address);
    console.log(wallets[4].address);

}
singleWallet();
