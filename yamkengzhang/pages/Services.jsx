import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-16 px-4 md:px-16">
        <h1 className="text-3xl font-bold text-center mb-8">醫療健檢服務方案</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="shadow-xl rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">基本健檢方案</h2>
            <ul className="list-disc ml-4">
              <li>基礎健康檢查</li>
              <li>區塊鏈上資料安全存儲</li>
              <li>專業諮詢服務</li>
            </ul>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              選擇方案
            </button>
          </div>

          <div className="shadow-xl rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">進階健檢服務</h2>
            <ul className="list-disc ml-4">
              <li>全方位進階健檢</li>
              <li>個人化健康分析報告</li>
              <li>即時專家健康追蹤與建議</li>
            </ul>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              選擇方案
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
