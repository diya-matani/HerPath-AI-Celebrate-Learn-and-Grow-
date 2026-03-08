import React, { useState } from 'react';
import './AIPortal.css';

const leaders = [
  {
    name: 'Kalpana Chawla',
    title: 'Astronaut & Engineer',
    link: 'https://en.wikipedia.org/wiki/Kalpana_Chawla',
    image: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    journey: 'An American astronaut and engineer, the first woman of Indian origin to go to space.',
    struggles: 'Faced societal pressure and skepticism in India about women pursuing aeronautical engineering.',
    impact: 'Inspires millions of girls, especially in India, to dream big and reach for the stars.'
  },
  {
    name: 'Indra Nooyi',
    title: 'Business Executive',
    link: 'https://en.wikipedia.org/wiki/Indra_Nooyi',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    journey: 'Indian-American business executive and former CEO of PepsiCo.',
    struggles: 'Navigated the corporate ladder as a woman of color in a male-dominated environment.',
    impact: 'Consistently ranked among the world\'s 100 most powerful women, an advocate for corporate sustainability.'
  },
  {
    name: 'Marie Curie',
    title: 'Pioneering Physicist',
    link: 'https://en.wikipedia.org/wiki/Marie_Curie',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    journey: 'Physicist and chemist who conducted pioneering research on radioactivity.',
    struggles: 'Worked in poorly ventilated sheds, faced intense sexism from the scientific community.',
    impact: 'First woman to win a Nobel Prize, only person to win in two scientific fields (Physics and Chemistry).'
  },
  {
    name: 'Ada Lovelace',
    title: 'First Programmer',
    link: 'https://en.wikipedia.org/wiki/Ada_Lovelace',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    journey: 'English mathematician and writer.',
    struggles: 'Faced a society that did not value intellectual pursuits for women.',
    impact: 'Recognized as the first computer programmer for her work on Charles Babbage\'s Analytical Engine.'
  },
  {
    name: 'Grace Hopper',
    title: 'Computer Scientist',
    link: 'http://en.wikipedia.org/wiki/Grace_Hopper',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
    journey: 'American computer scientist and United States Navy rear admiral.',
    struggles: 'Initially rejected by the Navy due to age and weight limits before finally getting a waiver.',
    impact: 'Pioneered computer programming, invented the first compiler tools, popularized machine-independent programming languages.'
  }
];

const WomenTimeline = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);


  return (
    <div className="ai-feature-card">
      <h3 className="mb-4">Women Achievement Interactive Timeline</h3>
      <p>Click on a great leader to learn about their journey, struggles, and impact on technology and science.</p>
      
      <div className="timeline-container mt-4">
        {leaders.map((leader, index) => (
          <div key={index}>
            <div className="timeline-item" style={{cursor: 'pointer', marginBottom: selectedLeader?.name === leader.name ? '0' : '20px'}} onClick={() => {
              if (selectedLeader?.name === leader.name) {
                setSelectedLeader(null);
              } else {
                setSelectedLeader(leader);
              }
            }}>
              <img src={leader.image} alt={leader.name} />
              <div className="timeline-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h4 style={{ color: '#2b2b2b', fontWeight: '800', marginBottom: '2px' }}>{leader.name}</h4>
                <p className="text-muted" style={{ fontWeight: '600', marginBottom: '8px', fontSize: '1.05rem' }}>{leader.title}</p>
                <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '0' }}>
                  <em>(Click card to {selectedLeader?.name === leader.name ? 'close' : 'expand'} or <a href={leader.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} style={{ color: '#d1495b', textDecoration: 'none', fontWeight: 'bold' }}>read more</a>)</em>
                </p>
              </div>
            </div>

            {selectedLeader?.name === leader.name && (
              <div className="result-card mb-4" style={{ marginTop: '-10px', borderTopLeftRadius: '0', borderTopRightRadius: '0' }}>
                <h3 className="text-primary">{selectedLeader.name}</h3>
                
                <h5 className="mt-4">Her Journey:</h5>
                <p>{selectedLeader.journey}</p>
                
                <h5 className="mt-3">Her Struggles:</h5>
                <p>{selectedLeader.struggles}</p>
                
                <h5 className="mt-3">Impact on Technology/Science:</h5>
                <p>{selectedLeader.impact}</p>

                <div className="mt-4 mb-2">
                  <a href={selectedLeader.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
                    Click here
                  </a>
                </div>

              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenTimeline;
