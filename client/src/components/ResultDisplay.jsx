import React from 'react'

export default function ResultDisplay({result}) {
    if (!result) return null;
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-md mt-4">
      <h3 className="text-lg font-semibold text-gray-700">Result</h3>
      <pre className="bg-gray-100 p-4 rounded-lg mt-2 text-sm text-gray-800">
        {JSON.stringify(result, null, 2)}
      </pre>
    </div>
  )
}
