import React, { useState, useEffect } from 'react';
import './useEffect.css';

console.info('task1');
function UseEffect() {
  const [count, setCount] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [user, setUser] = useState<any>({
    name: '张三',
    age: 18,
    children: [
      {
        name: '张三三',
        age: 1,
      },
    ],
  });

  useEffect(() => {
    console.log('payload: ，effect会在每轮组件渲染完成后执行');
  });

  useEffect(() => {
    console.log('payload: []，只有第一次渲染的时候才会执行');
  }, []);

  useEffect(() => {
    console.log('payload: count，一旦count发生变化effect便会执行', count);
  }, [count]); //依赖count发生变化，它就会被重新创建。

  useEffect(() => {
    console.log('payload: user，一旦user发生变化effect便会执行', user);
  }, [user]);

  return (
    <div className="container">
      <header>
        <label>count：{count}</label>
        <label>total：{total}</label>
        <br />
        <dl>
          <dt>user</dt>
          <hr />
          <dd>name：{user.name}</dd>
          <dd>age：{user.age}</dd>
        </dl>
        <dl>
          <dt>user.children</dt>
          <hr />
          <dd>name：{user.children[0].name}</dd>
          <dd>age：{user.children[0].age}</dd>
        </dl>
      </header>
      <main>
        <button
          className="button"
          onClick={() => {
            setCount(prev => (prev += 1));
          }}
        >
          +
        </button>
        <button
          className="button"
          onClick={() => {
            setCount(prev => (prev -= 1));
          }}
        >
          -
        </button>
        <button
          className="button"
          onClick={() => {
            setTotal(Math.random() * 10);
          }}
        >
          随机total
        </button>
        <button
          className="button"
          onClick={() => {
            const child = user.children[0];
            child.age += 1;
            setUser((prev: any) => ({
              ...prev,
              children: [child],
            }));
          }}
        >
          plus user.children[0].age
        </button>
        <button
          className="button"
          onClick={() => {
            setUser((prev: any) => ({
              ...prev,
              age: prev.age += 1,
            }));
          }}
        >
          plus user.age
        </button>
      </main>
      <footer></footer>
    </div>
  );
}

export default UseEffect;
