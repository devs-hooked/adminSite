"use client";

import { useState } from 'react';
import { supabase } from '../../util/supabaseClient';

const AddToWaitlist: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleAdd = async () => {
    if (!email) {
      alert('Please enter an email address');
      return;
    }

    setLoading(true);

    // Insert the email into the Waitlist table
    const { error } = await supabase
      .from('Waitlist')
      .insert([{ Email: email, Verified: true }]);

    setLoading(false);

    if (error) {
      console.error(error);
      alert('An error occurred while adding the email to the waitlist');
    } else {
      alert('Email successfully added to the waitlist');
      setEmail(''); // Clear the input after successful addition
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">Add to Waitlist</h1>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-6 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAdd}
          disabled={loading}
          className={`w-full py-3 text-lg font-semibold rounded-lg bg-green-500 hover:bg-green-600 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition ${
            loading ? 'cursor-not-allowed opacity-50' : ''
          }`}
        >
          {loading ? 'Adding...' : 'Add to Waitlist'}
        </button>
      </div>
    </div>
  );
};

export default AddToWaitlist;
