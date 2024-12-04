import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//const title = 'React'; Se uma variável não necessita de informação de dentro da função deve ser definida fora

const welcome = {
  title : 'React',
  greeting : 'Hey'
}

function getTitle(title){
  return title;
}

function App() {
  
  return (
    <div>
      <h1>Hello {getTitle('React')}</h1>
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>
      <label htmlFor='search'>Search: </label>
        <input id='search' type="text"></input>
    </div>
  );
}

export default App
