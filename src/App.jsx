import './App.css';
import Weather from './components/Weather';
import React, {lazy, Suspense} from 'react';

const FetchWeather = lazy(() => import("./components/Weather"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Weather/>
    </Suspense>
  )
}

export default App
