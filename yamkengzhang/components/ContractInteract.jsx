import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

const ContractInteract = () => {
  const contractAddress = '0xd1FC6551aa4fB022a3C4d6dE447E4048549d418F'; // 你的合約地址
  const abi = [
    {
      "inputs": [
        {"internalType":"string","name":"date","type":"string"},
        {"internalType":"string","name":"checkItem","type":"string"},
        {"internalType":"string","name":"result","type":"string"}
      ],
      "name":"addRecord",
      "outputs": [],
      "stateMutability":"nonpayable",
      "type":"function"
    },
    {
      "inputs":[],
      "name":"getMyRecords",
      "outputs":[
        {
          "components":[
            {"internalType":"string","name":"date","type":"string"},
            {"internalType":"string","name":"checkItem","type":"string"},
            {"internalType":"string","name":"result","type":"string"}
          ],
          "internalType":"struct HealthRecord.Record[]",
          "name":"",
          "type":"tuple[]"
        }
      ],
      "stateMutability":"view",
      "type":"function"
    }
  ];

  const [records, setRecords] = useState([]);
  const [date, setDate] = useState('');
  const [checkItem, setCheckItem] = useState('');
  const [result, setResult] = useState('');

  const connectContract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    return contract;
  };

  const fetchRecords = async () => {
    const contract = await connectContract();
    const data = await contract.getMyRecords();
    setRecords(data);
  };

  const addNewRecord = async () => {
    const contract = await connectContract();
    const tx = await contract.addRecord(date, checkItem, result);
    await tx.wait();
    fetchRecords();
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div className="p-8 shadow-xl rounded-xl bg-white">
      <h2 className="text-2xl font-bold mb-4">區塊鏈健檢記錄互動</h2>

      <div className="space-y-3">
        <input 
          type="text" 
          placeholder="日期 (例如:2025-03-09)" 
          className="border p-2 w-full rounded"
          value={date}
          onChange={(e)=>setDate(e.target.value)}
        />
        <input 
          type="text"
          placeholder="健檢項目"
          className="border p-2 w-full rounded"
          value={checkItem}
          onChange={(e)=>setCheckItem(e.target.value)}
        />
        <input 
          type="text"
          placeholder="結果"
          className="border p-2 w-full rounded"
          value={result}
          onChange={(e)=>setResult(e.target.value)}
        />
        <button 
          onClick={addNewRecord}
          className="bg-blue-500 text-white p-2 rounded w-full"
        >
          新增記錄到區塊鏈
        </button>

        <h3 className="text-xl font-semibold mt-6">你的健檢記錄：</h3>
        <ul className="mt-4">
          {records.map((rec, index) => (
            <li key={index} className="border-b py-2">
              日期：{rec.date}, 項目：{rec.checkItem}, 結果：{rec.result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContractInteract;
