// BiddingPage.js
import React, { useState } from 'react';

const BiddingPage = () => {
  const [bidAmount, setBidAmount] = useState(0);
  const [numBidders, setNumBidders] = useState(0);
  const [userProfile, setUserProfile] = useState({
    username: 'JohnDoe', // Sample username
    // Add more user profile details as needed
  });
  const [customBid, setCustomBid] = useState('');
  const [userBids, setUserBids] = useState([]);

  const handleBid = () => {
    // Logic for handling bid submission
    // For example, you can update the bid amount and number of bidders
    const newBid = parseInt(customBid);
    setBidAmount(newBid);
    setNumBidders(prevNumBidders => prevNumBidders + 1);
    setUserBids(prevUserBids => [...prevUserBids, { username: userProfile.username, bid: newBid }]);
    setCustomBid('');
  };

  return (
    <div className="container mx-auto py-8" id='main'>
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Bidding Application</h1>
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-semibold text-gray-700">Current Bid Amount: ${bidAmount}</p>
            <p className="text-lg font-semibold text-gray-700">Number of Bidders: {numBidders}</p>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="number"
              className="mr-2 p-2 border border-gray-400 rounded"
              placeholder="Enter custom bid amount"
              value={customBid}
              onChange={e => setCustomBid(e.target.value)}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              onClick={handleBid}
            >
              Place Bid
            </button>
          </div>
        </div>
        <div className="p-4 border-t border-gray-300">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">User Profile</h2>
          <p className="text-gray-700">Username: {userProfile.username}</p>
          {/* Display more user profile details as needed */}
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Dashboard - Maximum Bids</h2>
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <ul>
              {userBids.map((userBid, index) => (
                <li key={index} className="flex justify-between items-center mb-2">
                  <p className="text-lg font-semibold text-gray-700">{userBid.username}</p>
                  <p className="text-lg font-semibold text-gray-700">${userBid.bid}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiddingPage;
