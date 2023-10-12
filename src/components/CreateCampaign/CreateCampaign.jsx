// import React from 'react'

// const CreateCampaign = () => {
//   return (
//     <div>hello</div>
//   )
// }

// export default CreateCampaign

// CreateCampaign.jsx
import React from "react";
import "./CreateCampaign.css"; // Import the CSS file

const CreateCampaign = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="create-campaign-container">
      <h1>Create a Campaign</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <label>
            Campaign Name:
            <input type="text" name="campaignName" />
          </label>
          <label>
            Description:
            <textarea name="description" />
          </label>
          <label>
            Category:
            <select name="category">
              <option value="finance">Finance</option>
              <option value="startup">Startup</option>
              <option value="mnc">MNC</option>
              <option value="food">Food</option>
              <option value="sports">Sports</option>
            </select>
          </label>
          <label>
            Name of the Person Creating the Campaign:
            <input type="text" name="creatorName" />
          </label>
          <label>
            Fund Required:
            <input type="number" name="fundRequired" />
          </label>
          <label>
            Deadline:
            <input type="date" name="deadline" />
          </label>
          <button type="submit">Submit Campaign</button>
        </div>
        <div className="form-section">
          <label>
            Big Picture of the Company Raising the Campaign:
            <input type="file" accept="image/*" name="companyImage" />
          </label>
        </div>
      </form>
    </div>
  );
};

export default CreateCampaign;

