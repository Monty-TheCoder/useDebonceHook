// This is basically used for adding debounce value 
// Example - basically used do api call on search

import { useEffect, useState } from "react";
 
function useDebouncedValue<T>(value: T, delay = 500): T {
  const [debouncedValue, setDebouncedValue] = useState(value);
 
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
 
    return () => clearTimeout(handler);
  }, [value, delay]);
 
  return debouncedValue;
}
 
export default useDebouncedValue;
