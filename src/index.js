import React from 'react';
import ReactDOM from 'react-dom';

import Welcome from './welcome';
import UserInfo from './user-info';
import ToogleUi from './toogle-ui';

function App() {
  const names = ['Ram', 'Sam', 'Kumar'];

  const list = names.map(function (name, index) {
    return <Welcome key={index} name={name} />;
  });

  return (
    <>
      {list}
      <UserInfo />
      <ToogleUi />
    </>
  );
}

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
