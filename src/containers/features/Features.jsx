import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Automated Content Creation',
    text: ' Due to its sheer size and generative power, GPT-3 can be fine-tuned for a wide variety of natural language understanding and generation tasks, making it highly versatile.',
  },
  {
    title: 'Chatbots and Virtual Assistants',
    text: ' Due to its sheer size and generative power, GPT-3 can be fine-tuned for a wide variety of natural language understanding and generation tasks, making it highly versatile.',
  },
  {
    title: 'Natural Language Processing',
    text: ' Due to its sheer size and generative power, GPT-3 can be fine-tuned for a wide variety of natural language understanding and generation tasks, making it highly versatile.',
  },
  {
    title: 'Ethics and Explainability',
    text: ' Due to its sheer size and generative power, GPT-3 can be fine-tuned for a wide variety of natural language understanding and generation tasks, making it highly versatile.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
