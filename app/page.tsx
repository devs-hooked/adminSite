"use client"

import { useState } from 'react';
import { supabase } from '../util/supabaseClient';

const HomePage: React.FC = () => {
  const [startingId, setStartingId] = useState<number | null>(null);
  const [endingId, setEndingId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const handleApprove = async () => {
    if (startingId === null || endingId === null) {
      alert('Please enter both starting and ending IDs');
      return;
    }

    setLoading(true);

    // Update the Approved column for IDs within the range
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
    <div>
      <h1>Approve Waitlist IDs</h1>
      <input
        type="number"
        placeholder="Starting ID"
        value={startingId ?? ''}
        onChange={(e) => setStartingId(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Ending ID"
        value={endingId ?? ''}
        onChange={(e) => setEndingId(Number(e.target.value))}
      />
      <button onClick={handleApprove} disabled={loading}>
        {loading ? 'Approving...' : 'Approve'}
      </button>
    </div>
  );
};

export default HomePage;
