import { useState } from 'react';

export const useSharedState = () => {
  const [sharedState, setSharedState] = useState('Hello World');
  return [sharedState, setSharedState];
};
