// CreateCampaign.jsx
import React, { useState, useEffect } from "react";
import "./CreateCampaign.css"; // Import the CSS file

const CreateCampaign = () => {
  const [showModal, setShowModal] = useState(false);
  const [fundCurrency, setFundCurrency] = useState("usd"); // Default currency
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here

    // Show the modal
    setShowModal(true);
  };

  const handleCloseModal = () => {
    // Close the modal
    setShowModal(false);
  };

  return (
    <div className="create-campaign-container">
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          <h3>Create a Campaign</h3>
          <form onSubmit={handleSubmit} className="flex-form">
            <div className="form-section">
              <label>
                Campaign Name:
                <input type="text" name="campaignName" className="input-field" />
              </label>
              <label>
                Description:
                <textarea name="description" className="input-field" />
              </label>
              <label>
                Category:
                <select name="category" className="input-field">
                  <option value="finance">Finance</option>
                  <option value="startup">Startup</option>
                  <option value="mnc">MNC</option>
                  <option value="food">Food</option>
                  <option value="sports">Sports</option>
                </select>
              </label>
            </div>
            <div className="form-section">
              <label>
                Name of the Person Creating the Campaign:
                <input type="text" name="creatorName" className="input-field" />
              </label>
              <label>
                Fund Required:
                <input type="number" name="fundRequired" className="input-field" />
              </label>
              <label>
                Currency:
                <select
                  name="fundCurrency"
                  value={fundCurrency}
                  onChange={(e) => setFundCurrency(e.target.value)}
                >
                  <option value="usd">USD</option>
                  <option value="inr">INR</option>
                  {/* Add more currencies as needed */}
                </select>
              </label>
              <label>
                Deadline:
                <input type="date" name="deadline" className="input-field" />
              </label>
            </div>
            <button type="submit" className="submit-button">
              Submit Campaign
            </button>
          </form>

          {showModal && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h3>Additional Information</h3>
                <label>Name: <input type="text" name="userName" /></label><br />
                <label>Address: <input type="text" name="userAddress" /></label><br />
                <label>Phone Number: <input type="text" name="userPhone" /></label><br />
                <label>Age: <input type="text" name="userAge" /></label><br />
                <label>Pincode: <input type="text" name="userPincode" /></label><br />
                <button onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CreateCampaign;
