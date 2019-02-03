import { useState } from 'react';

export default function useInput(initialValue) {
  const [value, setInput] = useState(initialValue);

  function onChange(e) {
    setInput(e.target.value);
  }

  return {
    value,
    onChange,
  };
}
