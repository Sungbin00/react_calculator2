import './App.css';
import { useState, useEffect } from 'react';

function App() {
const [preState, setPreState] = useState("");
const [curState, setCurState] = useState("");
const [input, setInput] = useState("0");
const [operator, setOperator] = useState(null);
const [total, setTotal] = useState(false);

// 초기화 함수 계산기의 C 기능
const allReset = () => {
  setPreState("");
  setCurState("");
  setInput("0");
};

// 마지막 입력 지우는 함수 계산기의 CE 기능
const lastReset = () => {
  setCurState("0");
}


  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='historyScreen'></div>
        <div className='screen'>
          {input}
        </div>
        <div className='btn light-gray' onClick={percent}>%</div>
        <div className='btn light-gray' onClick={lastReset}>CE</div>
        <div className='btn light-gray' onClick={allReset}>C</div>
        <div className='btn light-gray' onClick={backspace}>x</div>
        <div className='btn light-gray' onClick={denominator}>1/x</div>
        <div className='btn light-gray' onClick={spr}>X2</div>
        <div className='btn light-gray' onClick={root}>2Vx</div>
        <div className='btn light-gray' onClick={operatorType}>/</div>
        <div className='btn' onClick={inputNum}>7</div>
        <div className='btn' onClick={inputNum}>8</div>
        <div className='btn' onClick={inputNum}>9</div>
        <div className='btn light-grey' onClick={operatorType}>X</div>
        <div className='btn' onClick={inputNum}>4</div>
        <div className='btn' onClick={inputNum}>5</div>
        <div className='btn' onClick={inputNum}>6</div>
        <div className='btn light-gray' onClick={operatorType}>-</div>
        <div className='btn' onClick={inputNum}>1</div>
        <div className='btn' onClick={inputNum}>2</div>
        <div className='btn' onClick={inputNum}>3</div>
        <div className='btn light-gray' onClick={operatorType}>+</div>
        <div className='btn' onClick={minusPlus}>+/-</div>
        <div className='btn' onClick={inputNum}>0</div>
        <div className='btn' onClick={inputNum}>.</div>
        <div className='btn blue' onClick={equals}>=</div>
      </div>
    </div>
  );
}

export default App;
