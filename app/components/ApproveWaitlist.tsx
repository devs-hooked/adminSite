"use client";

import { useState } from 'react';
import { supabase } from '../../util/supabaseClient';

const ApproveWaitlist: React.FC = () => {
  const [startingId, setStartingId] = useState<number | null>(null);
  const [endingId, setEndingId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handleApprove = async () => {
    if (startingId === null || endingId === null) {
      alert('Please enter both starting and ending IDs');
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from('Waitlist')
      .update({ Approved: true })
      .gte('ID', startingId)
      .lte('ID', endingId);

    setLoading(false);

    if (error) {
      console.error(error);
      alert('An error occurred while updating the records');
    } else {
      alert('Records successfully updated');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">Approve Waitlist IDs</h1>
        <input
          type="number"
          placeholder="Starting ID"
          value={startingId ?? ''}
          onChange={(e) => setStartingId(Number(e.target.value))}
          className="w-full px-4 py-2 mb-4 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="Ending ID"
          value={endingId ?? ''}
          onChange={(e) => setEndingId(Number(e.target.value))}
          className="w-full px-4 py-2 mb-6 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleApprove}
          disabled={loading}
          className={`w-full py-3 text-lg font-semibold rounded-lg bg-green-500 hover:bg-green-600 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition ${
            loading ? 'cursor-not-allowed opacity-50' : ''
          }`}
        >
          {loading ? 'Approving...' : 'Approve'}
        </button>
      </div>
    </div>
  );
};

export default ApproveWaitlist;
