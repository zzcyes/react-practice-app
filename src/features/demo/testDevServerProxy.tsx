import React, { useState } from 'react';
import { Button } from 'antd';
function TestDevServerProxy() {
  const [result] = useState<string>('');

  const onClickFetch = () => {
    fetch('/test')
      .then(response => {
        if (!response.ok) {
          console.debug(response);
          // eslint-disable-next-line no-throw-literal
          throw 'Error';
        }
        return response.text();
      })
      .then(res => console.debug(res))
      .catch(err => console.debug(err));
    // .then(res => {
    //   setResult(res);
    // });
  };

  return (
    <>
      <div style={{ backgroundColor: '#2c3e50', color: '#eee' }}>
        TestDevServerProxy
      </div>
      <Button type="primary" onClick={onClickFetch}>
        请求
      </Button>

      <p>{result}</p>
    </>
  );
}

export default TestDevServerProxy;
