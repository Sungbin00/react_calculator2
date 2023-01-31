import './App.css';
import Calculator from './Calculator';
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
  if (curState.length === 1) {
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

const calculator = [
  {
    class: 'btn light-gray',
    event: percent,
    element: '%'
  },
  {
    class: 'btn light-gray',
    event: lastReset,
    element: 'CE'
  },
  {
    class: 'btn light-gray',
    event: allReset,
    element: 'C'
  },
  {
    class: 'btn light-gray',
    event: backspace,
    element: <i class="fa-solid fa-delete-left"></i>
  },
  {
    class: 'btn light-gray',
    event: denominator,
    element: <p><sup>1</sup>/<sub>x</sub></p>
  },
  {
    class: 'btn light-gray',
    event: spr,
    element: <p>x<sup>2</sup></p>
  },
  {
    class: 'btn light-gray',
    event: root,
    element: <i class="fa-solid fa-square-root-variable"></i>
  },
  {
    class: 'btn light-gray',
    event: operatorType,
    element: <i class="fa-solid fa-divide"></i>
  },
  {
    class: 'btn',
    event: inputNum,
    element: '7'
  },
  {
    class: 'btn',
    event: inputNum,
    element: '8'
  },
  {
    class: 'btn',
    event: inputNum,
    element: '9'
  },
  {
    class: 'btn light-gray',
    event: operatorType,
    element: 'X'
  },
  {
    class: 'btn',
    event: inputNum,
    element: '4'
  },
  {
    class: 'btn',
    event: inputNum,
    element: '5'
  },
  {
    class: 'btn',
    event: inputNum,
    element: '6'
  },
  {
    class: 'btn light-gray',
    event: operatorType,
    element: '-'
  },
  {
    class: 'btn',
    event: inputNum,
    element: '1'
  },
  {
    class: 'btn',
    event: inputNum,
    element: '2'
  },
  {
    class: 'btn',
    event: inputNum,
    element: '3'
  },
  {
    class: 'btn light-gray',
    event: operatorType,
    element: '+'
  },
  {
    class: 'btn',
    event: minusPlus,
    element: <i class="fa-solid fa-plus-minus"></i>
  },
  {
    class: 'btn',
    event: inputNum,
    element: '0'
  },
  {
    class: 'btn',
    event: inputNum,
    element: '.'
  },
  {
    class: 'btn',
    event: equals,
    element: '='
  }
]

  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='historyScreen'></div>
        <div className='screen'>
          {input !== "" || input === "0" ? input : preState}
        </div>
        {calculator.map((cal)=>(<Calculator class={cal.class} event={cal.event} element={cal.element}></Calculator>))}
      </div>
    </div>
  );
}

export default App;