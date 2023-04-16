import { useSharedState } from './SharedState';

const ComponentA = () => {
  const [sharedState, setSharedState] = useSharedState();
  return (
    <div>
      <p>{sharedState}</p>
      <button onClick={() => setSharedState('New Value')}>Update State</button>
    </div>
  );
};

export default ComponentA