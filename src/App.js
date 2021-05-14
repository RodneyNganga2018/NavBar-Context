import React, {useState} from 'react';
import './App.css';

import Wrapper from './components/Wrapper';
import NavBar from './components/NavBar';
import FormWrapper from './components/FormWrapper';
import MyContext from './context/MyContext';

function App() {
  const [name, setName] = useState('');

  return (
    <div className="App">
      <MyContext.Provider value={{name, setName}}>
        <Wrapper>
          <NavBar />
          <FormWrapper />
        </Wrapper>
      </MyContext.Provider>
    </div>
  );
}

export default App;