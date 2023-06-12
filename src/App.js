import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>See DevTools</h1>
        <p>The console log is executed in smplr.js(24)</p>
        {console.log('Test')}
      </header>
    </div>
  );
}

export default App;
