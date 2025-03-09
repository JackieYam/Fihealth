import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const WalletConnect = () => {
  const [address, setAddress] = useState('');

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAddress(accounts[0]);
      } catch (error) {
        console.error('使用者拒絕連接錢包:', error);
      }
    } else {
      alert('請安裝 MetaMask 錢包！');
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts) => {
        setAddress(accounts[0] || '');
      });
    }
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-xl shadow text-center">
      {address ? (
        <p className="text-green-600 font-semibold">連結成功：{address}</p>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
        >
          連接 MetaMask 錢包
        </button>
      )}
    </div>
  );
};

export default WalletConnect;
