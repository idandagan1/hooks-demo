import { useEffect, useState } from 'react';

export default function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener('resize', onChangeWidth);

  function onChangeWidth() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    setWidth(window.innerWidth);

    return () => {
      window.removeEventListener('resize', onChangeWidth);
    };
  }, [width]);

  return width;
}
