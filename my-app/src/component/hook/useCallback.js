import React, { useState, useMemo, useCallback, useEffect } from 'react';

function Child(props) {
  console.log('Parent数据有变化都会进来');
  const [count, setCount] = useState(() => props.callback());
  useEffect(() => {
    console.log('callback变化的时候才会再次执行setCount');
    setCount(props.callback() + 10);
  }, [props.callback]);

  return <div>{count}</div>;
}

export default function Parent() {
  const [count, setCount] = useState(1);
  const [val, setVal] = useState('');

  /** 保证返回的函数句柄不变 */
  const callback = useCallback((val) => {
    console.log("parent,callback",val);
    return count;
  }, [count]);
  const a = 11;

  let btnclick = () => {
      let a = callback('btn');
  }

  return (
    <div>
      <h4>count-{count}</h4>
      <h4>val-{val}</h4>
      <Child callback={callback} />
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <input value={val} onChange={event => setVal(event.target.value)} />
        <button onClick={btnclick}>callback</button>
      </div>
    </div>
  );
}