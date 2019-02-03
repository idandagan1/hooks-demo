import { useEffect } from 'react';

export default function useWindowTitle(title) {
  useEffect(() => {
    window.document.title = title;
  });
}
