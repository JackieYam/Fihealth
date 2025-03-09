import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Records = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-16 px-4 md:px-16">
        <h1 className="text-3xl font-bold text-center mb-8">個人健檢記錄</h1>

        <div className="max-w-4xl mx-auto shadow-lg rounded-xl overflow-hidden">
          <table className="w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">日期</th>
                <th className="px-4 py-2">健檢項目</th>
                <th className="px-4 py-2">結果</th>
                <th className="px-4 py-2">狀態</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="border px-4 py-2">2025-03-01</td>
                <td className="border px-4 py-2">一般健康檢查</td>
                <td className="border px-4 py-2">正常</td>
                <td className="border px-4 py-2 text-green-600">已上鏈</td>
              </tr>
              <tr className="text-center bg-gray-100">
                <td className="border px-4 py-2">2025-02-15</td>
                <td className="border px-4 py-2">心肺功能檢查</td>
                <td className="border px-4 py-2">正常</td>
                <td className="border px-4 py-2 text-green-600">已上鏈</td>
              </tr>
              <tr className="text-center">
                <td className="border px-4 py-2">2025-01-25</td>
                <td className="border px-4 py-2">血液檢驗</td>
                <td className="border px-4 py-2">輕微異常</td>
                <td className="border px-4 py-2 text-yellow-600">待確認</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Records;
