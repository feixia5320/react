import React, { useState, useMemo, useCallback, useEffect, memo } from 'react';

const ChildComp = memo(function ({ info, onClick }) {
  console.log('render child-comp ...', info)
  return <>
    <div>Child Comp ... {info.name}</div>
    <button onClick={() => onClick('hello')}>改变 name 值</button>
  </>
})

function ParentComp () {
  const [ count, setCount ] = useState(0)
  const increment = () => setCount(count + 1)

  const [ name, setName ] = useState('hi~')
  const [ age, setAge ] = useState(20)
  // 父组件变化时，对于引用变量，会生成新的引用地址，子组件浅比较有会有变化，基本数据类型浅比较是相等的
  // 子组件会浅比较：使用1.mome包裹，函数式无状态组件，2.purecomponent类组件，3.shouldcomponentupdate
  // const info = { name, age }
  const info = useMemo(() => ({ name, age }), [name, age])   // 包一层
  // 使用useMemo和useCallback包裹后，父组件有更新时，子组件不会更新
  // 每次父组件渲染，返回的是同一个函数引用
  const changeName = useCallback((newName) => setName(newName), [])  

  return (
    <div>
      <button onClick={increment}>点击次数：{count}</button>
      <ChildComp info={info} onClick={changeName} />
    </div>
  );
}

export default ParentComp;