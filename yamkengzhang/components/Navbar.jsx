import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">去中心化醫療健檢平台</h1>
        <div className="space-x-4">
          <a href="/" className="hover:text-gray-300">首頁</a>
          <a href="/services" className="hover:text-gray-300">服務介紹</a>
          <a href="/login" className="hover:text-gray-300">登入</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
