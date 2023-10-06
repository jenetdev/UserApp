import { useState } from 'react';

// Custom hook to manage session storage
function useSessionStorage(key, initialValue) {
  // Get the stored value from session storage or use the initialValue
  const storedValue = sessionStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // Create a state to hold the current value
  const [value, setValue] = useState(initial);

  // Function to set a new value and update session storage
  const setSessionValue = (newValue) => {
    setValue(newValue);
    sessionStorage.setItem(key, JSON.stringify(newValue));
  };

  // Function to remove the key from session storage
  const removeSessionValue = () => {
    setValue(null);
    sessionStorage.removeItem(key);
  };

  return [value, setSessionValue, removeSessionValue];
}

export default useSessionStorage;