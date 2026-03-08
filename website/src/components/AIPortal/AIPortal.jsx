import React, { useState } from 'react';
import AICareerMentor from './AICareerMentor';
import WomenTimeline from './WomenTimeline';
import MomCardGenerator from './MomCardGenerator';
import './AIPortal.css';

const AIPortal = () => {
  const [activeTab, setActiveTab] = useState('mentor');

  return (
    <div className="ai-portal-container">
      <div className="ai-header">
        <h1>✨ AI-Powered Inspiration & Support Platform ✨</h1>
        <p className="lead mt-3">An exciting space combining inspiration, career support, and appreciation for women in technology!</p>
      </div>

      <div className="nav-buttons d-flex justify-content-center mb-5 gap-3 flex-wrap">
        <button 
          className={`btn ${activeTab === 'mentor' ? 'btn-primary' : 'btn-outline-secondary'} mx-2`}
          onClick={() => setActiveTab('mentor')}
        >
          👩‍💻 AI Career Mentor
        </button>
        <button 
          className={`btn ${activeTab === 'timeline' ? 'btn-primary' : 'btn-outline-secondary'} mx-2`}
          onClick={() => setActiveTab('timeline')}
        >
          ⏳ Achievement Timeline
        </button>
        <button 
          className={`btn ${activeTab === 'momCard' ? 'btn-primary' : 'btn-outline-secondary'} mx-2`}
          onClick={() => setActiveTab('momCard')}
        >
          💖 Appreciation Card
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'mentor' && <AICareerMentor />}
        {activeTab === 'timeline' && <WomenTimeline />}
        {activeTab === 'momCard' && <MomCardGenerator />}
      </div>
    </div>
  );
};

export default AIPortal;
