import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import allLinks from './links';

function App() {
  // make an array of 0 to 24
  let itemArray = [];
  for (let i = 0; i < allLinks.length; i++) {
    itemArray.push(i);
  }

  const [hasBeenClicked, setHasBeenClicked] = useState(
    new Array(25).fill(false)
  );

  useEffect(() => {
    if (localStorage.getItem('beenClicked') != undefined) {
      let tempArray = '';
      tempArray = localStorage.getItem('beenClicked').split(',');

      let fromLocalStorageBeenClicked = [];
      for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i] === 'true') {
          fromLocalStorageBeenClicked[i] = true;
        } else {
          fromLocalStorageBeenClicked[i] = false;
        }
      }

      setHasBeenClicked([...fromLocalStorageBeenClicked]);
    }
  }, []);

  const handleClick = (id) => {
    let newHasbeenClicked = [...hasBeenClicked];
    newHasbeenClicked[id] = true;

    setHasBeenClicked(newHasbeenClicked);
    localStorage.setItem('beenClicked', [...newHasbeenClicked]);
  };

  const clearClickHistory = () => {
    localStorage.removeItem('beenClicked');
    setHasBeenClicked(new Array(25).fill(false));
  };

  return (
    <div className="App">
      <img
        className="bg"
        alt="Huge fancy christmas tree with tall building behind it"
      />

      <header className="App-header">
        <h1>Fun Websites Advent Calendar</h1>
      </header>

      <main>
        <div id="card-container">
          {itemArray.map((index) => (
            <Card
              path={allLinks[index]}
              id={index}
              key={index}
              handleClick={handleClick}
              alreadyClicked={hasBeenClicked[index]}
            />
          ))}
        </div>
      </main>
      <footer>
        <button onClick={clearClickHistory}>Clear Click History</button>
        <div>
          Photo by{' '}
          <a href="https://www.pexels.com/@orlovamaria?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">
            Maria Orlova
          </a>{' '}
          from{' '}
          <a href="https://www.pexels.com/photo/decorated-christmas-tree-against-urban-multistage-building-facades-4915845/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">
            Pexels
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
