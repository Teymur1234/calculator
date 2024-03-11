import styles from './button.module.css'
import inputs from './input.module.css'
import './calculator.css'
import { useState } from 'react'
const Calculator = () => {
  const [input1,setInput1]=useState('')
  const [input2,setInput2]=useState('')
  const [result,setResult]=useState('')
  const handleInput1Change = (e) => {
    setInput1(e.target.value);
  };

  const handleInput2Change = (e) => {
    setInput2(e.target.value);
  };
  const handleMultiply = () => {
    setResult(parseFloat(input1) * parseFloat(input2));
    setInput1('')
    setInput2('')
  };

  const handleDivide = () => {
    setResult(parseFloat(input1) / parseFloat(input2));
    setInput1('')
    setInput2('')
  };

  const handleAdd = () => {
    setResult(parseFloat(input1) + parseFloat(input2));
    setInput1('')
    setInput2('')
  };

  const handleSubtract = () => {
    setResult(parseFloat(input1) - parseFloat(input2));
    setInput1('')
    setInput2('')
  };

  return (
    <div>
        <input type="number" placeholder="Enter first number" className={inputs.input} value={input1}  onChange={handleInput1Change}/>
        <input type="number" placeholder="Enter second number" className={inputs.input} value={input2}  onChange={handleInput2Change}/>
        <p>{result}</p>
        <button className={styles.button} onClick={handleMultiply}>*</button>
        <button className={styles.button} onClick={handleDivide}>/</button>
        <button className={styles.button} onClick={handleAdd}>+</button>
        <button className={styles.button} onClick={handleSubtract}>-</button>
    </div>
  )
}

export default Calculator