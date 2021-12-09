import React, { useCallback } from 'react';

function ColorLabel({ count }: { count: number }) {
  // 子组件用于显示颜色
  const color = count > 10 ? 'red' : 'blue';
  return <span style={{ color }}>{count}</span>;
}

function TypeLabel({ type }: { type: string }) {
  // 子组件用于显示颜色
  const color = type === '选中' ? 'red' : 'blue';
  return <span style={{ color }}>{type}</span>;
}

export default function CountLabel() {
  // 定义了 count 这个 state
  const [count, setCount] = React.useState(0);
  const [type, setType] = React.useState('选中');

  const onCount = () => {
    setCount(count + 1);
  };

  const handleClickCount = useCallback(() => {
    setCount(count + 1);
  }, [count]); //eslint-disable-line

  const onToggleType = () => {
    if (type === '选中') {
      setType('未选中');
    } else {
      setType('选中');
    }
  };

  const handleToggleType = useCallback(() => {
    if (type === '选中') {
      setType('未选中');
    } else {
      setType('选中');
    }
  }, [type]);

  return (
    <div>
      <button onClick={onCount}>
        count: <ColorLabel count={count} />
      </button>
      <br />
      <button onClick={handleClickCount}>
        useCallback-count: <ColorLabel count={count} />
      </button>
      <br />
      <br />
      <button onClick={onToggleType}>
        type: <TypeLabel type={type} />
      </button>
      <br />
      <button onClick={handleToggleType}>
        useCallback-type: <TypeLabel type={type} />
      </button>
    </div>
  );
}
