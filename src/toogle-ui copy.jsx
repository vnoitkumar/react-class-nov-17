import React, { useState, useEffect } from 'react';

function ToggleUi() {
  const [isChecked, setIsChecked] = useState(false);

  function handleChange(event) {
    setIsChecked(event.target.checked);
  }

  useEffect(function () {}, [isChecked]);

  return (
    <div>
      <input
        type='checkbox'
        defaultChecked={isChecked}
        onChange={handleChange}
      />

      {isChecked && <Label />}
    </div>
  );
}

function Label() {
  useEffect(function () {
    console.log('Component Mounted');

    document.title = 'Label Component Mounted';

    return function () {
      console.log('Component UnMounted');

      document.title = 'React App';
    };
  }, []);

  useEffect(function () {}, [foo]);

  useEffect(function () {});

  return <h1>Hello</h1>;
}

export default ToggleUi;
