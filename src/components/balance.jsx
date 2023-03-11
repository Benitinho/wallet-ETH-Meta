import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

function Balance() {
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    async function loadBlockchainData() {
      // Load Web3.js
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
      } else {
        console.log('No web3 provider detected');
      }

      // Get current account
      const accounts = await window.web3.eth.getAccounts();
      setAccount(accounts[0]);

      // Get account balance
      const weiBalance = await window.web3.eth.getBalance(accounts[0]);
      const etherBalance = window.web3.utils.fromWei(weiBalance, 'ether');
      setBalance(etherBalance);

      // Listen for account change
      window.ethereum.on('accountsChanged', function (newAccounts) {
        setAccount(newAccounts[0]);
        updateBalance(newAccounts[0]);
      });
    }

    loadBlockchainData();
  }, []);

  async function updateBalance(account) {
    const weiBalance = await window.web3.eth.getBalance(account);
    const etherBalance = window.web3.utils.fromWei(weiBalance, 'ether');
    setBalance(etherBalance);
  }

  async function changeAccount() {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0]);
    updateBalance(accounts[0]);
  }

  return (
    <div>
      <p><h3>Current Account:</h3></p> 
      <p>{account}</p>
      <p><h3>Balance:</h3></p> 
      <p>{balance} ETH</p>
      {/* <button onClick={changeAccount}>Change Account</button> */}
    </div>
  );
}

export default Balance;
