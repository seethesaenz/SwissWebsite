import React from 'react';
import AppRouter from './AppRouter';
  
function App(){
  return (
    <div className="App">
      <div className='NavBar'>
        <a href='/home'>Home</a>
        <a href='https://www.linkedin.com/in/saenzjack/' target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href='https://www.github.com/seethesaenz' target="_blank" rel="noopener noreferrer">Github</a>
        <a href='mailto:saenzjack1@icloud.com'>Email</a>
        <a href='/Crypto'>Crypto</a>
        <a href='/Calculator'>Calculator</a>
      </div>
      <AppRouter />
    </div>
  );
}
export default App;