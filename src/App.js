import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import allLinks from './links';

function App() {
  let itemArray = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24,
  ];

  const [hasBeenClicked, setHasBeenClicked] = useState(
    new Array(25).fill(false)
  );

  useEffect(() => {
    if (localStorage.getItem('beenClicked') != undefined) {
      let tempArray = '';
      tempArray = localStorage.getItem('beenClicked').split(',');
      console.log(tempArray);
      let fromLocalStorageBeenClicked = [];
      for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i] === 'true') {
          fromLocalStorageBeenClicked[i] = true;
        } else {
          fromLocalStorageBeenClicked[i] = false;
        }
      }
      console.log(fromLocalStorageBeenClicked);
      setHasBeenClicked([...fromLocalStorageBeenClicked]);
    }
  }, []);

  const handleClick = (id) => {
    console.log('cliiick');
    console.log(id);
    let newHasbeenClicked = [...hasBeenClicked];
    newHasbeenClicked[id] = true;
    console.log(newHasbeenClicked);

    setHasBeenClicked(newHasbeenClicked);
    localStorage.setItem('beenClicked', [...newHasbeenClicked]);
  };

  const clearClickHistory = () => {
    console.log('clearing click history');
    localStorage.removeItem('beenClicked');
    setHasBeenClicked(new Array(25).fill(false));
  };

  return (
    <div className="App">
      <img className="bg" src="./pexels-maria-orlova-4915845.jpg" />
      <header className="App-header">Fun Websites Advent Calendar</header>

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
