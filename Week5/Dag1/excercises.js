// 1
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>,
  document.getElementById('root')
);

// Functional component voorbeeld
import React from 'react';
import ReactDOM from 'react-dom';

function MyApp() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}

ReactDOM.render(<MyApp />, document.getElementById('root'));

// 2
import React from 'react';
import ReactDOM from 'react-dom';

const MyInfo = function() {
  return (
    <div>
      <h1>Raimon Leeuwenburg</h1>
      <p>Blablablaaaat</p>
      <ol>
        <li>Wisconsin Rapids</li>
        <li>Chicago</li>
        <li>Big Sur</li>
      </ol>
    </div>
  );
};

ReactDOM.render(<MyInfo />, document.getElementById('root'));

// 3
// Set up the React app from scratch
// Render an App component (defined in a separate file)
// Inside App, render:
// 1. A Navbar component
// 2. A MainContent component
// 3. A Footer component

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

// tekst als resultaat van Javascript functie invoegen
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = 'morning';
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon';
  } else {
    timeOfDay = 'night';
  }

  return <h1>Good {timeOfDay}!</h1>;
}

ReactDOM.render(<App />, document.getElementById('root'));

//dynamisch tekstkleur toevoegen obv verschillende condities gedefinieerd in if else boom
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  const date = new Date(2018, 6, 31, 15);
  const hours = date.getHours();
  let timeOfDay;
  const styles = {
    fontSize: 30
  };

  if (hours < 12) {
    timeOfDay = 'morning';
    styles.color = '#04756F';
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon';
    styles.color = '#8914A3';
  } else {
    timeOfDay = 'night';
    styles.color = '#D90000';
  }

  return <h1 style={styles}>Good {timeOfDay}!</h1>;
}

ReactDOM.render(<App />, document.getElementById('root'));

// One LAST time in this course, set up a React app from scratch
// Render an <App /> component
// App should be in its own file
// App should render 5 <Joke /> components
// Each Joke should receive a "question" prop and a "punchLine" prop
// and render those however you'd like

// EXTRA CREDIT:
// Some jokes are only a punch line with no question:
// E.g.: "It’s hard to explain puns to kleptomaniacs because they always take things literally."
// If you don't pass in a "question" prop, how might you make it only show the punchline instead?

// Spend time practicing the style of your Joke component

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// file ./App.js
import React from 'react';

import Joke from './Joke';

function App() {
  return (
    <div>
      <Joke punchLine='It’s hard to explain puns to kleptomaniacs because they always take things literally.' />

      <Joke
        question="What's the best thing about Switzerland?"
        punchLine="I don't know, but the flag is a big plus!"
      />

      <Joke
        question="Did you hear about the mathematician who's afraid of negative numbers?"
        punchLine="He'll stop at nothing to avoid them!"
      />

      <Joke
        question='Hear about the new restaurant called Karma?'
        punchLine='There’s no menu: You get what you deserve.'
      />

      <Joke
        question='Did you hear about the actor who fell through the floorboards?'
        punchLine='He was just going through a stage.'
      />

      <Joke
        question='Did you hear about the claustrophobic astronaut?'
        punchLine='He just needed a little space.'
      />
    </div>
  );
}

export default App;

// file ./joke.js
import React from 'react';

function Joke(props) {
  return (
    <div>
      <h3 style={{ display: !props.question && 'none' }}>
        Question: {props.question}
      </h3>
      <h3 style={{ color: !props.question && '#888888' }}>
        Answer: {props.punchLine}
      </h3>
      <hr />
    </div>
  );
}

export default Joke;

// When using a database, you can have something like this:
const jokesData = [
  {
    id: 1,
    punchLine:
      'It’s hard to explain puns to kleptomaniacs because they always take things literally.'
  },
  {
    id: 2,
    question: "What's the best thing about Switzerland?",
    punchLine: "I don't know, but the flag is a big plus!"
  },
  {
    id: 3,
    question:
      "Did you hear about the mathematician who's afraid of negative numbers?",
    punchLine: "He'll stop at nothing to avoid them!"
  },
  {
    id: 4,
    question: 'Hear about the new restaurant called Karma?',
    punchLine: 'There’s no menu: You get what you deserve.'
  },
  {
    id: 5,
    question: 'Did you hear about the actor who fell through the floorboards?',
    punchLine: 'He was just going through a stage.'
  },
  {
    id: 6,
    question: 'Did you hear about the claustrophobic astronaut?',
    punchLine: 'He just needed a little space.'
  }
];

export default jokesData;

// use array methods to render these in App
import React from 'react';

import Joke from './Joke';
import jokesData from './jokesData';

function App() {
  const jokeComponents = jokesData.map(joke => (
    <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
  ));

  return <div>{jokeComponents}</div>;
}

export default App;
