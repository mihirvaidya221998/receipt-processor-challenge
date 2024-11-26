import React, {useState} from 'react';
import { Button, Textarea } from 'flowbite-react';

export default function ProcessReceiptForm({onResult}) {
    const [receipt, setReceipt] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        const url = '/receipts/process';
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: receipt
            });
            if (!res.ok) throw new Error(`Error: ${res.statusText}`);
            const data = await res.json();
            onResult({data});
        } catch (error) {
            onResult({ type: "error", data: error.message });
        }
    };

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-4">Process Receipt</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          className="w-full rounded-lg border-gray-300 focus:ring-blue-500"
          placeholder="Enter receipt JSON"
          value={receipt}
          rows={5}
          onChange={(e) => setReceipt(e.target.value)}
        />
        <Button type="submit" gradientMonochrome="lime" outline className="w-full">
          Submit
        </Button>
      </form>
    </div>
  )
}
