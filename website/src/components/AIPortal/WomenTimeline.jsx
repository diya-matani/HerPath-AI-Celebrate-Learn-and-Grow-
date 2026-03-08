import React, { useState } from 'react';
import './AIPortal.css';

const leaders = [
  {
    name: 'Kalpana Chawla',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Kalpana_Chawla%2C_NASA_photo_portrait_in_orange_suit.jpg/800px-Kalpana_Chawla%2C_NASA_photo_portrait_in_orange_suit.jpg',
    journey: 'An American astronaut and engineer, the first woman of Indian origin to go to space.',
    struggles: 'Faced societal pressure and skepticism in India about women pursuing aeronautical engineering.',
    impact: 'Inspires millions of girls, especially in India, to dream big and reach for the stars.'
  },
  {
    name: 'Indra Nooyi',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Indra_Nooyi_2014.jpg',
    journey: 'Indian-American business executive and former CEO of PepsiCo.',
    struggles: 'Navigated the corporate ladder as a woman of color in a male-dominated environment.',
    impact: 'Consistently ranked among the world\'s 100 most powerful women, an advocate for corporate sustainability.'
  },
  {
    name: 'Marie Curie',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Marie_Curie_c._1920s.jpg',
    journey: 'Physicist and chemist who conducted pioneering research on radioactivity.',
    struggles: 'Worked in poorly ventilated sheds, faced intense sexism from the scientific community.',
    impact: 'First woman to win a Nobel Prize, only person to win in two scientific fields (Physics and Chemistry).'
  },
  {
    name: 'Ada Lovelace',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg',
    journey: 'English mathematician and writer.',
    struggles: 'Faced a society that did not value intellectual pursuits for women.',
    impact: 'Recognized as the first computer programmer for her work on Charles Babbage\'s Analytical Engine.'
  },
  {
    name: 'Grace Hopper',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg',
    journey: 'American computer scientist and United States Navy rear admiral.',
    struggles: 'Initially rejected by the Navy due to age and weight limits before finally getting a waiver.',
    impact: 'Pioneered computer programming, invented the first compiler tools, popularized machine-independent programming languages.'
  }
];

const WomenTimeline = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [askInput, setAskInput] = useState('');
  const [askResponse, setAskResponse] = useState('');

  const handleAsk = (e) => {
    e.preventDefault();
    if (!askInput) return;
    setAskResponse(`Simulated AI: That's a great question about ${selectedLeader.name}! Based on historical data, she was known for her incredible resilience. (This is a mock response showcasing what an AI would reply)`);
    setAskInput('');
  };

  return (
    <div className="ai-feature-card">
      <h3 className="mb-4">⏳ Women Achievement Interactive Timeline</h3>
      <p>Click on a great leader to learn about their journey, struggles, and impact on technology and science.</p>
      
      <div className="timeline-container mt-4">
        {leaders.map((leader, index) => (
          <div className="timeline-item" key={index} style={{cursor: 'pointer'}} onClick={() => {
            setSelectedLeader(leader);
            setAskResponse('');
          }}>
            <img src={leader.image} alt={leader.name} />
            <div className="timeline-content">
              <h4>{leader.name}</h4>
              <p className="text-muted">{leader.journey.substring(0, 50)}... <em>(Click to read more)</em></p>
            </div>
          </div>
        ))}
      </div>

      {selectedLeader && (
        <div className="result-card mt-5">
          <h3 className="text-primary">{selectedLeader.name}</h3>
          
          <h5 className="mt-4">🛤️ Her Journey:</h5>
          <p>{selectedLeader.journey}</p>
          
          <h5 className="mt-3">💪 Her Struggles:</h5>
          <p>{selectedLeader.struggles}</p>
          
          <h5 className="mt-3">🌍 Impact on Technology/Science:</h5>
          <p>{selectedLeader.impact}</p>

          <div className="ask-bot-container mt-4 border border-info">
            <h5>🤖 Ask AI about {selectedLeader.name}</h5>
            <form onSubmit={handleAsk} className="d-flex mt-3">
              <input 
                type="text" 
                className="form-control me-2" 
                placeholder="E.g., What inspired her the most?" 
                value={askInput}
                onChange={(e) => setAskInput(e.target.value)}
              />
              <button type="submit" className="btn btn-info text-white">Ask</button>
            </form>
            {askResponse && (
              <div className="mt-3 p-3 bg-white rounded border">
                {askResponse}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default WomenTimeline;
