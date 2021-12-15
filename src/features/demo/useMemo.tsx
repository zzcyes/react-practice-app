import React, { useState, memo, useMemo } from 'react';

function UseMemo() {
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

  const showCountAfter = useMemo(() => {
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
        <p>点击增加时，"累加结果"能正常叠加显示。</p>
        <p>
          但在输入框输入文本时，观察打印结果，控制台打印了“执行了showCount"，意味着“showCount”函数重新执行计算了
        </p>
        <div style={{ marginTop: 8 }}>
          <button
            style={{ color: 'black' }}
            onClick={() => setCount(count + 1)}
          >
            增加
          </button>
          <br />
          <input value={name} onChange={e => setName(e.target.value)} />
        </div>
      </div>
      <div style={{ backgroundColor: '#e74c3c', padding: 12 }}>
        <h2>这是useMemo测试实例（未优化）</h2>
        <p>累加结果: {showCount()}</p>
        <p>计数器: {count}</p>
      </div>
      <div style={{ backgroundColor: '#3498db', padding: 12 }}>
        <h2>这是useMemo测试实例（优化后）</h2>
        <p>累加结果: {showCountAfter}</p>
        <p>计数器: {count}</p>
      </div>
    </div>
  );
}

export default memo(UseMemo);
