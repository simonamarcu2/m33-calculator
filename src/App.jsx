import React { useState } from 'react';
import './App.css';
import { Display } from './components/Display';
import { useState } from 'react';

const buttons = ["+", "*", "-", "÷",7, 8, 9, "=", 4, 5, 6, 1, 2 ,3, 0, ".", "AC"]
const buttons = [
  {val: "+"},
  {val: "*",  displayVal:"X" },
  {val: "-"},
  {val: "÷"},
  {val: "7"},
  {val: "8"},
  {val: "9"},
  {val: "="},
  {val: "4"},
  {val: "5"},
  {val: "6"},
  {val: "1"},
  {val: "2"},
  {val: "3"},
  {val: "0"},
  {val: "."},
  {val: "AC"},

]

const App = () => {
  const [ total, setTotal] = useState(0)

  const handleClick = (val) => {
    console.log(val)
  }

  return (
    <div className='wrapper'>
      <Display value={total} />
      { buttons.map((item) => {
        return <Button  value= {val} handleClick={handleClick} />
      })}
    </div>
  )
}



export default App;
