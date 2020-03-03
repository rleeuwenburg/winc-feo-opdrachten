import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const App = function() {
  return (
    <div>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
