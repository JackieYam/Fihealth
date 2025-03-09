import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-12">
        <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">會員登入</h1>
          <form className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">電子郵件</label>
              <input
                type="email"
                placeholder="請輸入電子郵件"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">密碼</label>
              <input
                type="password"
                placeholder="請輸入密碼"
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
              登入
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
