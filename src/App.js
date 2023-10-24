import React from 'react';
import { useState, useEffect } from 'react';
import Main from './Components/Main';
import Banner from './Components/Banner';

function App() {
  //attempt to find viewport for responsiveness, pass to components
  const [viewPort, setViewPort] = useState(window.innerWidth);
  
  useEffect(() => {
    setViewPort(viewPort)
  }, [viewPort])
  console.log(viewPort);
  return (
    <>
      <Banner></Banner>
      <Main></Main>
    </>
  );
}

export default App;
