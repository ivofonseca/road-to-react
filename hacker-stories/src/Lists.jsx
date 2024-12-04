import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const numbers = [1, 2, 3, 4];

const ExponentialNumbers = numbers.map(function (number){
    return number * number;
});

const list = [
    {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
}
,
{
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clarke',
    num_comments: 2,
    points: 5,
    objectID: 1,
}
]

console.log(ExponentialNumbers);

function App() {
  
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <div>
        <p>Exponencial Numbers:</p>
        <p>{ExponentialNumbers}</p>
      </div>

      <div>
        <label htmlFor="search">Search: </label>
        <input id='search' type="text" />

        <hr />

        <ul>
            {list.map(function (item) {
                return (
                    <li key={item.objectID}>
                        <span>
                            <a href={item.url}>{item.title}</a>
                        </span>
                        <span>{item.author}</span>
                        <span>{item.num_comments}</span>
                        <span>{item.points}</span>
                    </li>
                )
                return <li key={item.objectID}> Title: {item.title}, <br />URL: {item.url}, <br />Author: {item.author}, <br />Comments: {item.num_comments}, <br />Points: {item.points} </li>;
                {/*é assim que se faz comentários em jsx*/}
            })}
        </ul>
      </div>
    </div>
  );
}

export default App
