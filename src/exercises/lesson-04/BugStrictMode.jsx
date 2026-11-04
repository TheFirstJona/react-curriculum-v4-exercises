// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug
// In development, StrictMode intentionally mounts, unmounts, and remounts components to verify side effects are safely cleaned up. Without returning a cleanup function that calls clearInterval, the original interval remains active alongside the new one, resulting in two timers running simultaneously and increasing the count by 2. Adding the cleanup function ensures previous intervals are cleared before running a new one or unmounting.
