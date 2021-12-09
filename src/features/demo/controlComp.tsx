import React, { useState, useCallback, memo } from 'react';

interface Value {
  amount: number;
  currency: string;
}

interface PriceInputProps {
  value: { amount: number; currency: string };
  // 默认不处理 onChange 事件
  onChange: (p?: any) => void;
}

function PriceInput({
  value = { amount: 0, currency: 'rmb' },
  onChange = () => {},
}: PriceInputProps) {
  const handleChange = useCallback(
    deltaValue => {
      console.log('deltaValue~~~', deltaValue);
      onChange({
        ...value,
        ...deltaValue,
      });
    },
    [value, onChange],
  );
  return (
    <div>
      <input
        value={value.amount}
        onChange={evt => handleChange({ amount: evt.target.value })}
      />
      <select
        value={value.currency}
        onChange={evt => handleChange({ currency: evt.target.value })}
      >
        <option value="rmb">RMB</option>
        <option value="dollar">Dollar</option>
      </select>
    </div>
  );
}

function ControlComp() {
  const [value, setValue] = useState<Value>({ amount: 0, currency: 'rmb' });
  const onChange = (changeValue: Value) => {
    console.log('changeValue~~~', changeValue);
    setValue(changeValue);
  };
  return (
    <div>
      <p>amount: {value.amount}</p>
      <p>currency: {value.currency}</p>
      <PriceInput value={value} onChange={onChange} />
    </div>
  );
}

export default memo(ControlComp);
