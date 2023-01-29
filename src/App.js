import './App.css';
import { useState, useEffect } from 'react';

function App() {
const [preState, setPreState] = useState("");
const [curState, setCurState] = useState("");
const [input, setInput] = useState("0");
const [operator, setOperator] = useState(null);
const [total, setTotal] = useState(false);

// 숫자 입력 기능
const inputNum = e => {
  if (curState.includes(".") && e.target.innerText === ".") return

  if (total) {
    setPreState("")
  }

  curState ? setCurState((pre) => pre + e.target.innerText) : setCurState(e.target.innerText)

  setTotal(false);
};

useEffect(()=>{
  setInput(curState);
}, [curState])

useEffect(()=>{
  setInput("0");
}, [])

// 초기화 함수 계산기의 C 기능
const allReset = () => {
  setPreState("");
  setCurState("");
  setInput("0");
};

// 화면을 지우는 함수 계산기의 CE 기능
const lastReset = () => {
  setCurState("");
  setInput("0");
};

// 연산자 기능
const operatorType = e => {
  setTotal(false);
  setOperator(e.target.innerText);
  if (curState === "") return
  if (preState !== "") {
    equals();
  } else {
    setPreState(curState);
    setCurState("");
  }
};

const equals = e => {
  if (e?.target.innerText === "=") {
    setTotal(true)
  }
  let cal;
  switch (operator) {
    case "+" :
      cal = String(parseFloat(preState) + parseFloat(curState));
      break;
    case "X" :
      cal = String(parseFloat(preState) * parseFloat(curState));
      break;
    case "-" :
      cal = String(parseFloat(preState) - parseFloat(curState));
      break;
    default :
      cal = String(parseFloat(preState) / parseFloat(curState));
  }
  setInput("");
  setPreState(cal);
  setCurState("");
};

// 양수음수 바꾸는 기능
const minusPlus = () => {
  if (curState.charAt(0)==="-") {
    setCurState(curState.substring(1));
  } else {
    setCurState("-"+curState);
  }
};

// 퍼센트 기능
const percent = () => {
  preState ? setCurState(String(parseFloat(curState) / 100 * preState)) : setCurState(String(parseFloat(curState) / 100))
};

// 백스페이스 기능
const backspace = () => {
  if (curState.length == 1) {
    setCurState("0");
  } else if (curState.length !== 1) {
    setCurState(curState.substring(0, curState.length-1));
  }
};

// 분모화 기능
const denominator = () => {
  setCurState(String(1 / parseFloat(curState)));
};

// 제곱 기능
const spr = () => {
 setCurState(String(parseFloat(curState) * parseFloat(curState)));
};

// 루트 기능
const root = () => {
  setCurState(String(Math.sqrt(parseFloat(curState))));
};

  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='historyScreen'></div>
        <div className='screen'>
          {input !== "" || input === "0" ? input : preState}
        </div>
        <div className='btn light-gray' onClick={percent}>%</div>
        <div className='btn light-gray' onClick={lastReset}>CE</div>
        <div className='btn light-gray' onClick={allReset}>C</div>
        <div className='btn light-gray' onClick={backspace}><i class="fa-solid fa-delete-left"></i></div>
        <div className='btn light-gray' onClick={denominator}><p><sup>1</sup>/<sub>x</sub></p></div>
        <div className='btn light-gray' onClick={spr}><p>x<sup>2</sup></p></div>
        <div className='btn light-gray' onClick={root}><i class="fa-solid fa-square-root-variable"></i></div>
        <div className='btn light-gray' onClick={operatorType}>&divide;</div>
        <div className='btn' onClick={inputNum}>7</div>
        <div className='btn' onClick={inputNum}>8</div>
        <div className='btn' onClick={inputNum}>9</div>
        <div className='btn light-gray' onClick={operatorType}>X</div>
        <div className='btn' onClick={inputNum}>4</div>
        <div className='btn' onClick={inputNum}>5</div>
        <div className='btn' onClick={inputNum}>6</div>
        <div className='btn light-gray' onClick={operatorType}>-</div>
        <div className='btn' onClick={inputNum}>1</div>
        <div className='btn' onClick={inputNum}>2</div>
        <div className='btn' onClick={inputNum}>3</div>
        <div className='btn light-gray' onClick={operatorType}>+</div>
        <div className='btn' onClick={minusPlus}><i class="fa-solid fa-plus-minus"></i></div>
        <div className='btn' onClick={inputNum}>0</div>
        <div className='btn' onClick={inputNum}>.</div>
        <div className='btn blue' onClick={equals}>=</div>
      </div>
    </div>
  );
}

export default App;
