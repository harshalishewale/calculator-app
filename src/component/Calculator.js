import React, { useState } from "react";
import './Calculator.css'
const Calculator = () => {
    const [result, setresult] = useState("");
    const handleclick = (event) => {
        setresult(result.concat(event.target.name))
    }
    const calculate = () => {
        setresult(eval(result))
    }
    const Clear = () => {
        setresult("")
    }
    return (
        <>
        <div id="out">
            <div id="main">
                <h1 id="Calculator">Calculator</h1>
                <br />
                <form>
                    <input id="input" type="text" defaultValue={result} />
                </form>
                <br /><br />
                <button className="btn" onClick={Clear}>AC</button>
                <button className="btn" onClick={handleclick}>+/-</button>
                <button name="%" className="btn" onClick={handleclick}>%</button>
                <button name="/" id="orange" className="btn" onClick={handleclick}>&divide;</button>
                <br />
                <button name="7" className="btn" onClick={handleclick}>7</button>
                <button name="8" className="btn" onClick={handleclick}>8</button>
                <button name="9" className="btn" onClick={handleclick}>9</button>
                <button name="*" id="orange" className="btn" onClick={handleclick}>*</button>
                <br />
                <button name="4" className="btn" onClick={handleclick}>4</button>
                <button name="5" className="btn" onClick={handleclick}>5</button>
                <button name="6" className="btn" onClick={handleclick}>6</button>
                <button name="-" id="orange" className="btn" onClick={handleclick}>-</button>
                <br />
                <button name="1" className="btn" onClick={handleclick}>1</button>
                <button name="2" className="btn" onClick={handleclick}>2</button>
                <button name="3" className="btn" onClick={handleclick}>3</button>
                <button name="+" id="orange" className="btn" onClick={handleclick}>+</button>
                <br />
                <button name="0" className="btn" onClick={handleclick}>0</button>
                <button name="." className="btn" onClick={handleclick}>.</button>
                <button name="=" id="orange" className="btn" onClick={calculate}>=</button>
            </div></div>
        </>
    )
}
export default Calculator;