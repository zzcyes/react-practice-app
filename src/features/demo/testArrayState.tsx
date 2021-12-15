import React, { useState, useRef } from 'react';

interface UserInfo {
  name: string;
  age: string;
  sex: string;
  phone: string;
  address: string;
  [key: string]: any;
}

const defaultUserInfo = {
  name: '',
  age: '',
  sex: '',
  phone: '',
  address: '',
};

export default function TestArrayState() {
  const [usersList, setUsersList] = useState<UserInfo[]>([
    {
      name: '钟子晨',
      age: '24',
      sex: 'boy',
      phone: '18279713123',
      address: '深圳市蛇口别墅',
    },
  ]);

  const inputRef = useRef<any>([]);

  // console.log(inputRef.current && inputRef.current.value);
  return (
    <div>
      <div>
        {usersList.map((item: UserInfo, index: number) => {
          return (
            <>
              <ul>
                {Object.keys(item).map((key: string, index: number) => {
                  const value: any = item[key];
                  return (
                    <li key={index}>
                      <span>
                        {key}: {value}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </>
          );
        })}
      </div>
      <div>
        <ul>
          {Object.keys(defaultUserInfo).map((key: string, index: number) => {
            return (
              <li key={key}>
                <div>{key}:</div>
                <input ref={f => (inputRef.current[index] = f)} />
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => {
            const inputList = inputRef.current;
            setUsersList(prev => {
              return [
                ...prev,
                {
                  name: inputList[0].value,
                  age: inputList[1].value,
                  sex: inputList[2].value,
                  phone: inputList[3].value,
                  address: inputList[4].value,
                },
              ];
            });
            console.log('增加', inputRef.current);
          }}
        >
          增加
        </button>
      </div>
    </div>
  );
}
