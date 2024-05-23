import React, { Suspense } from 'react';

const Home = React.lazy(() => import('./pages/Home'));



function App() {
  return (
    <Suspense fallback={<div className='loader'>Loading...</div>}>
      <Home />
    </Suspense>
  );
}

export default App;