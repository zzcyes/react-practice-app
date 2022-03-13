import React, { useState, useEffect } from 'react';
// import Scheduler from 'react';

// const task1 = Scheduler.unstable_scheduleCallback(2, function func1() {
//   console.log('1');
// });

console.info('task1');
function UseEffect() {
  const [defaultValue, setDefaultValue] = useState<number>();

  // useEffect(() => {
  //   console.log('执行~~~没有默认值');
  // });

  useEffect(() => {
    console.log('执行~~~空数组');
  }, []);

  useEffect(() => {
    console.log('执行~~~defaultValue');
  }, [defaultValue]);

  return <div style={{ backgroundColor: '#2c3e50' }}>{defaultValue}</div>;
}

export default UseEffect;
