import React, { useState } from 'react';
import './AIPortal.css';

const MomCardGenerator = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();
    if (name && message) {
      setShowCard(true);
    }
  };

  return (
    <div className="ai-feature-card">
      <h3 className="mb-4">Appreciation Section for Women</h3>
      <p>Recognizing the women who contribute immensely to our lives and society but are often underappreciated.</p>
      
      {!showCard ? (
        <form onSubmit={handleGenerate} className="mt-4">
          <div className="form-group pb-3">
            <label className="fw-bold mb-2">Name</label>
            <input 
              type="text" 
              className="form-control" 
              placeholder="e.g. Anya, Mrs. Smith, Mom" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group pb-3">
            <label className="fw-bold mb-2">Message</label>
            <textarea 
              className="form-control" 
              rows="4"
              placeholder="e.g. Thank you for always believing in me and supporting my journey." 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required 
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary mt-2">Generate "Thank You" Card</button>
        </form>
      ) : (
        <div className="text-center">
          <div className="mom-card-preview">
            <h2>Dear {name},</h2>
            <p>"{message}"</p>
            <p className="quote-text mb-0 mt-4">
              "Here's to strong women: May we know them. May we be them. May we raise them."
            </p>
          </div>
          <button className="btn btn-outline-secondary mt-4" onClick={() => setShowCard(false)}>
            Create Another Card
          </button>
        </div>
      )}
    </div>
  );
};

export default MomCardGenerator;
