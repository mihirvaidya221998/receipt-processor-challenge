import React, { useState } from 'react';
import ProcessReceiptForm from './components/ProcessReceiptForm';
import GetPointsForm from './components/GetPointsForm';
import ResultDisplay from './components/ResultDisplay';

export default function App() {
  const [result, setResult] = useState(null)
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white border border-gray-300 shadow-md rounded-lg p-8 w-full max-w-xl">
        <ProcessReceiptForm onResult={setResult}/>
        <GetPointsForm onResult={setResult}/>
        <ResultDisplay result={result}/>
      </div>
    </div>
  )
}
