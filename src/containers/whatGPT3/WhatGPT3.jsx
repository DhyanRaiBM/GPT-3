import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="GPT-3, or Generative Pre-trained Transformer 3, is a state-of-the-art natural language processing (NLP) model developed by OpenAI. It is the third iteration in the GPT series of language models." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="GPT-3, or Generative Pre-trained Transformer 3, is a state-of-the-art natural language processing (NLP) model developed by OpenAI. It is the third iteration in the GPT series of language models." />
      <Feature title="Knowledgebase" text="GPT-3, or Generative Pre-trained Transformer 3, is a state-of-the-art natural language processing (NLP) model developed by OpenAI. It is the third iteration in the GPT series of language models." />
      <Feature title="Education" text="GPT-3, or Generative Pre-trained Transformer 3, is a state-of-the-art natural language processing (NLP) model developed by OpenAI. It is the third iteration in the GPT series of language models." />
    </div>
  </div>
);

export default WhatGPT3;
