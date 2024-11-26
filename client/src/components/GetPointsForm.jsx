import React, { useState } from 'react';
import { Button, TextInput } from 'flowbite-react';

export default function GetPointsForm({onResult}) {
    const [receiptId, setReceiptId] = useState('');

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const url = `/receipts/${receiptId}/points`;
        try {
            const res = await fetch(url, {method:'GET'});
            if (!res.ok) throw new Error(`Error: ${res.statusText}`);

            const data = await res.json();
            onResult({data});
        } catch (error) {
            onResult({type: "error", data: error.message})
        }
    }
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-4">Get Points</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextInput
          className="w-full rounded-lg border-gray-300 focus:ring-green-500"
          placeholder="Enter Receipt ID"
          value={receiptId}
          onChange={(e) => setReceiptId(e.target.value)}
        />
        <Button type="submit" gradientMonochrome="lime" outline className="w-full">
          Submit
        </Button>
      </form>
    </div>
  )
}
