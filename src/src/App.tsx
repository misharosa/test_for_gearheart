import React, { useState } from "react";
import './App.scss';
import colorFromServer from './data/data.json'
import { Rectangle } from "./components/rectangle";
import { ColorItem } from "./components/ColorItem";

function App():React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    const [colors, setColors] = useState(colorFromServer);
    const [turn, setTurn] = useState(false)
    const [counter, setCounter] = useState(1)
    const [result, setResult] = useState(0)

    const handleText = (colorId: number) => {
        setCounter(pre => pre + 1)
        console.log(counter)
        if (counter === 25) {
            setResult(0)
          colors.forEach(color => {
              if (color.conditional1) {
                  setResult(prev => prev + 1)
              }
          })
        }
        setTurn(false)
        setColors(prevColors => prevColors.map(color => {
            if (color.id === colorId) {
                return {...color, conditional: true}
            }
                return {...color}
        }))
    }

    const handleRectangle = (colorId: number) => {
        setTurn(true)
        setColors(prevColors => prevColors.map(color => {
            if (color.id === colorId) {
                return {...color, conditional1: true}
            }
            if (!color.conditional) {
                return {...color, conditional1: false}
            }
            return {...color}
        }))
    }

    const handleClear = () => {
        setTurn(false)
        setCounter(1)
        setColors(prevColors => prevColors.map(color => {
                return {...color, conditional1: false, conditional: false}
            }))
    }

    console.log(colors)

    return (
       <div className="App">
           <div>
           <ColorItem
               turn={turn}
               items={colors}
               onChoose={handleText}
           />
           </div>
           <div className="line"> </div>
           <div>
               {!turn && counter !== 26 &&
               <h1>👇Choose a color🤓 <span className="text badge bg-secondary">Good Luck!</span></h1>
               }
               {turn && counter !== 26 &&
               <h1>👈Choose a color🤓 <span className="text badge bg-secondary">Good Luck!</span></h1>
               }
               {
                   counter === 26 &&
                   <h1>
                       {result > 15 && result < 25 ? 'Success🤘' : result === 25 ? `You're mega clever 🥸 `
                           : 'Try again 🤪'}
                       <span className="text badge bg-secondary">
                           Result: {result} / 25
                       </span>
                   </h1>
               }
               <br/>
           <Rectangle
               turn={turn}
               onChoose={handleRectangle}
               items={colors}
           />
           </div>

           <button className="button-clear" onClick={handleClear}>Restart</button>
       </div>
    );
}

export default App;
