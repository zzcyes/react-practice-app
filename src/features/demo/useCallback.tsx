import React, { useState, useCallback, memo } from 'react';

interface ChildProps {
  onClick: (p: any) => any;
}

function Child(props: ChildProps) {
  console.log('Child rerender!!');
  return <div onClick={props.onClick}>这是Child子节点</div>;
}

const ChildAfter = memo(function (props: ChildProps) {
  console.log('ChildAfter rerender!!');
  return <div onClick={props.onClick}>这是ChildAfter子节点</div>;
});

const ChildMemo = memo(function (props: ChildProps) {
  console.log('ChildMemo rerender!!');
  return <div onClick={props.onClick}>这是ChildMemo子节点</div>;
});

function UseCallback() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');

  const showCount = () => {
    console.log('执行了showCount');
    let sum = 0;
    for (let i = 0; i < count; i++) {
      sum += i;
    }
    return sum;
  };

  const showCountAfter = useCallback(() => {
    console.log('执行了showCountAfter');
    let sum = 0;
    for (let i = 0; i < count; i++) {
      sum += i;
    }
    return sum;
  }, [count]);

  return (
    <div style={{ backgroundColor: '#2c3e50' }}>
      <a
        style={{ color: '#ecf0f1', padding: 8 }}
        href="https://cloud.tencent.com/developer/article/1911314"
      >
        memo、useCallback、useMemo的区别和用法
      </a>
      <div style={{ color: '#ecf0f1', padding: 8 }}>
        <p>缓存回调函数</p>
        <p>
          在输入框输入文本时，Child、ChildMemo子节点均重新渲染，而ChildAfter因为在props传入的onClick函数被缓存了，不会重新渲染
        </p>
        {/* <p>点击增加时，"累加结果"能正常叠加显示。</p>
        <p>
          但在输入框输入文本时，观察打印结果，控制台打印了“执行了showCount"，意味着“showCount”函数重新执行计算了
        </p> */}
        <div style={{ marginTop: 8 }}>
          <button
            style={{ color: 'black' }}
            onClick={() => setCount(count + 1)}
          >
            增加
          </button>
          <br />
          <input
            style={{ color: 'black' }}
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
      </div>
      <div style={{ backgroundColor: '#e74c3c', padding: 12 }}>
        <h2>这是useMemo测试实例（未优化）</h2>
        <p>计数器: {count}</p>
        <Child onClick={showCount}></Child>
        <ChildMemo onClick={showCount}></ChildMemo>
      </div>
      <div style={{ backgroundColor: '#3498db', padding: 12 }}>
        <h2>这是useMemo测试实例（优化后）</h2>
        <p>计数器: {count}</p>
        <ChildAfter onClick={showCountAfter}></ChildAfter>
      </div>
    </div>
  );
}

export default memo(UseCallback);
