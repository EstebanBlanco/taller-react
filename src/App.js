import { useState } from 'react';
import './App.css';

import ProfileCard from './components/ProfileCard';
import AmountConverter from './containers/AmountConverter';

const NAME = "Esteban Blanco"
const AGE = 26
const HOBBIES = ["Play video games", "Eat", "Travel", "Sleep"]

const displayMessage = () => alert("Hola! :D")


const App = () => {
  const [showConverter, setShowConverter] = useState(false)

  const onClick = () => setShowConverter(!showConverter)

  return (
    <div className="App">
      <button onClick={onClick}>Toggle Converter</button>
      {/* <ProfileCard name={NAME} age={AGE} hobbies={HOBBIES} onClick={displayMessage} /> */}
      {showConverter && <AmountConverter />}
    </div>
  );
}

export default App;
