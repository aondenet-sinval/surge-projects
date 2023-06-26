import React, { Suspense } from 'react';

const App = () => {
  const LazyAsyncComponent = React.lazy(() => import('./AsyncComponent'));

  return (
    <div>
      <h1>App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyAsyncComponent />
      </Suspense>
    </div>
  );
};

export default App;
