import React from 'react';
import { useEffect, useState } from 'react';

// 使用 document.body 作为默认的监听节点
const useKeyPress = (domNode = document.body) => {
  const [key, setKey] = useState(null);
  useEffect(() => {
    const handleKeyPress = (evt: any) => {
      setKey(evt.keyCode);
    };
    // 监听按键事件
    domNode.addEventListener('keypress', handleKeyPress);
    return () => {
      // 接触监听按键事件
      domNode.removeEventListener('keypress', handleKeyPress);
    };
  }, [domNode]);
  return key;
};

const useKeyDoublePress = (domNode = document.body) => {
  const [keys, setKeys] = useState([]);
  useEffect(() => {
    const handleKeyPress = (evt: any) => {
      setKeys((prevKeys: any) => {
        if (prevKeys.length !== 2) {
          return [...prevKeys, evt.keyCode];
        } else {
          return prevKeys;
        }
      });
    };
    domNode.addEventListener('keypress', handleKeyPress);
    return () => {
      domNode.removeEventListener('keypress', handleKeyPress);
    };
  }, [domNode]);
  return keys;
};

export default function UseKeyPressExample() {
  const key = useKeyPress();
  return (
    <div>
      <h1>UseKeyPress</h1>
      <label>Key pressed: {key || 'N/A'}</label>
    </div>
  );
}
