import React, { memo, useMemo } from 'react';

interface ICountLabelProps {
  count: number;
}

const SimpleCount = () => {
  const [count, setCount] = React.useState(0);

  function ChildComp() {
    console.log('ChildComp~~~');
    return <h3>"ChildComp~~~"</h3>;
  }

  const ChildCompMemo = useMemo(() => {
    console.log('ChildCompMemo~~~');
    return <h3>"ChildCompMemo~~~"</h3>;
  }, []);

  function CountLabel({ count }: ICountLabelProps) {
    const color = count > 10 ? 'red' : 'blue';
    return <span style={{ color }}>{count}</span>;
  }

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        count:
        <CountLabel count={count} />
      </button>
      <ChildComp />
      {ChildCompMemo}
    </div>
  );
};

export default memo(SimpleCount);
