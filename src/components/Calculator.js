import React, { useState } from 'react';
import { evaluate} from 'mathjs';
function Calculator(){
    const [expression, setExpression] = useState('');
    const input = value =>{
        let newExpression = expression + value;
        setExpression(newExpression);
    }
    const blank = () => {
        setExpression('');
    }
    const natija = () => {
        let result = evaluate(expression);
        let newExpression = result;
        setExpression(newExpression);
    }
return <div class="calculator">
<div class="input">
  <div class="row">
    <input name="" class="javob" value ={expression} id="inputArea" cols="30" rows="10" ></input>
  </div>
</div>
<div class="button">
  <div class="row">
    <div class="col" onClick={()=>input('1')}>1</div>
    <div class="col" onClick={()=>input('4')}>4</div>
    <div class="col" onClick={()=>input('7')}>7</div>
    <div class="c" onClick={blank}>C</div>
  </div>
  <div class="row">
    <div class="col" onClick={()=>input('2')}>2</div>
    <div class="col" onClick={()=>input('5')}>5</div>
    <div class="col" onClick={()=>input('8')}>8</div>
    <div class="col" onClick={()=>input('0')}>0</div>
  </div>
  <div class="row">
    <div class="col" onClick={()=>input('3')}>3</div>
    <div class="col" onClick={()=>input('6')}>6</div>
    <div class="col" onClick={()=>input('9')}>9</div>
    <div class="teng" onClick={natija}>=</div>

  </div>
  <div class="row">
    <div class="plus" onClick={()=>input('+')}>+</div>
    <div class="minus" onClick={()=>input('-')}>-</div>
    <div class="kop" onClick={()=>input('*')}>*</div>
    <div class="kam" onClick={()=>input('/')}>/</div>
  </div>
</div>
</div>

}
export default Calculator;