import React from 'react';
import ReactDOM from 'react-dom';

import Welcome from './welcome';

function App() {
  const names = ['Ram', 'Sam', 'Kumar'];

  const list = names.map(function (name, index) {
    return <Welcome key={index} name={name} />;
  });

  return list;
}

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
