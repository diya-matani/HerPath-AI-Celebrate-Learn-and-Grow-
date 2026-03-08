import React, { useState } from 'react';
import './AIPortal.css';

const AICareerMentor = () => {
  const [skills, setSkills] = useState('');
  const [goal, setGoal] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    // Simulate AI thinking and generating a response
    setTimeout(() => {
      // Mock data based on input or generic return
      const mockResponse = {
        gapAnalysis: `Based on your skills in ${skills || 'your current area'} and your goal to become a ${goal || 'professional'}, you will need to bridge the gap by learning specific intermediate to advanced frameworks and theoretical concepts related to ${goal || 'the field'}.`,
        roadmap: [
          'Step 1: Master the fundamentals of the required languages.',
          'Step 2: Build 2-3 small projects applying what you learned.',
          'Step 3: Dive deep into advanced topics and architectural patterns.',
          'Step 4: Contribute to open source or build a capstone project.',
        ],
        courses: ['Introduction to CS (edX)', 'Advanced Specialization (Coursera)', 'Practical Bootcamp (Udemy)'],
        projects: ['Portfolio Website', 'Data Analysis Dashboard', 'Full-stack Web App'],
        resumeTips: [
          'Highlight your recent projects prominently.',
          'Quantify your achievements (e.g., "Improved efficiency by 20%").',
          'Use industry-standard keywords.',
        ],
      };
      setResult(mockResponse);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="ai-feature-card">
      <h3 className="mb-4">AI Career Mentor for Women</h3>
      <p>Enter your current skills and your career goals, and let our simulated AI guide you on the path to success.</p>
      
      <form onSubmit={handleGenerate}>
        <div className="form-group pb-3">
          <label className="fw-bold mb-2">Current Skills</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="e.g. Python, basic HTML/CSS" 
            value={skills} 
            onChange={(e) => setSkills(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group pb-3">
          <label className="fw-bold mb-2">Career Goal</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="e.g. Data Scientist, Frontend Developer" 
            value={goal} 
            onChange={(e) => setGoal(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Analyzing your path...' : 'Get Career Guidance'}
        </button>
      </form>

      {result && (
        <div className="result-card mt-4 p-4 shadow-sm">
          <h4>Your Personalized Plan</h4>
          
          <h5 className="mt-3 text-primary">Skill Gap Analysis</h5>
          <p>{result.gapAnalysis}</p>
          
          <h5 className="mt-3 text-primary">Learning Roadmap</h5>
          <ul>
            {result.roadmap.map((step, idx) => <li key={idx}>{step}</li>)}
          </ul>
          
          <h5 className="mt-3 text-primary">Recommended Courses</h5>
          <ul>
            {result.courses.map((course, idx) => <li key={idx}>{course}</li>)}
          </ul>
          
          <h5 className="mt-3 text-primary">Suggested Projects</h5>
          <ul>
            {result.projects.map((proj, idx) => <li key={idx}>{proj}</li>)}
          </ul>
          
          <h5 className="mt-3 text-primary">Resume Improvement Tips</h5>
          <ul>
            {result.resumeTips.map((tip, idx) => <li key={idx}>{tip}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AICareerMentor;
