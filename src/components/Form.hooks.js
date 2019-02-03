import React, { useContext } from 'react';
import { ThemeContext } from '../context/theme';
import { useInput, useWindowTitle, useWindowWidth } from '../hooks';

export default function Form() {
  const firstName = useInput('Idan');
  const lastName = useInput('Dagan');
  const theme = useContext(ThemeContext);
  useWindowTitle(`${firstName.value} ${lastName.value}`, true);
  const width = useWindowWidth();

  function onSubmit() {
    console.log(`fistName: ${firstName}, surname: ${lastName}`);
  }

  return (
    <div className="login-form">
      <div>Hooks</div>
      <div>
        width:
        {width}
      </div>
      <form onSubmit={onSubmit}>
        <input
          {...firstName}
          placeholder="Your first name"
          autoComplete="off"
        />
        <input
          {...lastName}
          placeholder="Your last name"
          autoComplete="off"
        />
        <button
          style={{ backgroundColor: theme }}
          type="submit"
        >
          login
        </button>
      </form>

    </div>
  );
}
