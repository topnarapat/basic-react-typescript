import { createContext, useState } from 'react';
import LearnUseState from './LearnUseState';
import LearnUseEffect from './LearnUseEffect';
import ClassContextComponent from './ClassContextComponent';
import FunctionContextComponent from './FunctionContextComponent';
import LearnUseContext from './usecontext/LearnUseContext';

export const ThemeContext = createContext<boolean | undefined>(undefined);

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  
  const toggleTheme = () => {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }

  return (
    <>
      <LearnUseState />
      <hr />
      <LearnUseEffect />
      <hr />
      <h1>useContext</h1>
      <h2>Old version</h2>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ClassContextComponent />
        <FunctionContextComponent />
      </ThemeContext.Provider>
      <hr />
      <h2>New version</h2>
      <LearnUseContext />
    </>
  )
}

export default App
