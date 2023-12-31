import { Blog, Features, Footer, Possibility, WhatGPT3, Header } from './containers'
import { CTA, Navbar, Brand } from './components'


import './App.css';

const App = () => (
    <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
);

export default App