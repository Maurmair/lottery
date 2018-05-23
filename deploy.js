const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'dream pioneer wing powder gesture raccoon word junk hedgehog physical ball middle',
    'https://rinkeby.infura.io/oF9IVMjLtlJ4EaGh1omg' 
);

const web3 = new Web3(provider);

const deploy = async () => {
    accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: '0x'+bytecode })
    .send({ gas: '1000000',gasPrice: web3.utils.toWei('2', 'gwei'), from: accounts[0] });

    console.log('Contract deployed to: ', result.options.address);

};

deploy();