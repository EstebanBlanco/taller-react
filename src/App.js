import './App.css';

import ProfileCard from './components/ProfileCard';

const NAME = "Esteban Blanco"
const AGE = 26
const HOBBIES = ["Play video games", "Eat", "Travel", "Sleep"]

const displayMessage = () => alert("Hola! :D")


const App = () => {
  return (
    <div className="App">
      <ProfileCard name={NAME} age={AGE} hobbies={HOBBIES} onClick={displayMessage} />
    </div>
  );
}

export default App;
