function Calculator(props) {
  return(
    <div className={props.class} onClick={props.event}>{props.element}</div>
  );
}

export default Calculator;