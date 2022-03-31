import logo from './logo.svg';
import './App.css';
import HookCounter from './components/HookCounter';
import HooksCounter2 from './components/HooksCounter2';
import HookCounter3 from './components/HookCounter3';
import HookCounterOne from './components/Effect-Hooks/HookCounterOne';
import HookMouse from './components/Effect-Hooks/HookMouse';
import IntervalHookCounter from './components/Effect-Hooks/IntervalHookCounter';
import DataFetching from './components/Effect-Hooks/DataFetching';

function App() {
  return (
    <div className="App">
     <HookCounter/>
     <hr></hr>
     <HooksCounter2/>
     <hr></hr>
     <HookCounter3/>
     <hr></hr>
     <HookCounterOne/>
     <hr></hr>
     <HookMouse/>
     <hr></hr>
     <IntervalHookCounter/>
     <hr></hr>
     <DataFetching/>


    </div>
  );
}

export default App;
