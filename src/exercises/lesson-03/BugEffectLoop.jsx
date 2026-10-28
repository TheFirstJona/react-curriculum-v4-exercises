//src/exercises/lesson-03/BugEffectLoop.jsx

/* 
  BUG #1 — Effect Issue 

  This component uses useState and useEffect to update a value.
  The effect is running on every render, which causes the
  component to behave incorrectly.
  */

import { useEffect, useState } from 'react';

export default function BugEffectLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((prev) => prev + 1);
  }, []);

  return <p>Bug 1 Count: {count}</p>;
}

// Explanation:
// Without a dependency array, useEffect executes after every single render. Since calling setCount triggers a re-render, the effect ran continuously in an infinite loop. Adding an empty dependency array `[]` restricts the effect to run only once when the component initially mounts.
