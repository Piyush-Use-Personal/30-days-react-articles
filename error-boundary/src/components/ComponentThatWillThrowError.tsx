import React, { useEffect } from 'react';

const ComponentThatWillThrowError: React.FC = () => {
  useEffect(() => {
    // Simulating an error during the component lifecycle
    throw new Error('This is an intentional error thrown');
  }, []);

  // This won't be rendered as the error is thrown in useEffect
  return <div>ComponentThatWillThrowError</div>;
};

export default ComponentThatWillThrowError;
