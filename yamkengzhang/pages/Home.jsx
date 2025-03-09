// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WalletConnect from '../components/WalletConnect';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <header className="bg-gradient-to-r from-teal-400 to-cyan-500 py-20 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">去中心化醫療健檢平台</h1>
        <p className="text-lg mb-6">提供安全、隱私、透明的區塊鏈健康記錄服務</p>
        <WalletConnect />
      </header>

      <section className="py-16 px-6 md:px-24 flex-1 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">我們的服務特色</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-indigo-600">去中心化記錄</h3>
            <p className="text-gray-600">所有健檢資料透過區塊鏈技術儲存，永久、安全且不可篡改。</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-indigo-600">資料隱私保護</h3>
            <p className="text-gray-700">僅有經過您授權的人才能存取您的健康資料，確保個人隱私安全。</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-indigo-600">即時透明資訊</h3>
            <p className="text-gray-700">健檢記錄即時上鏈，資料即時、透明且可追溯。</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;