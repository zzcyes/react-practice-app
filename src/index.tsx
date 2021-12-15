import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configStore from 'common/configStore';
import 'antd/dist/antd.css';

// @ts-ignore
const store = configStore();

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

interface Props {
  Component: typeof App;
}

const ConnectedApp = ({ Component }: Props) => (
  <React.StrictMode>
    <Provider store={store}>
      <Component />
    </Provider>
  </React.StrictMode>
);

const render = (Component: typeof App) => {
  ReactDOM.render(<ConnectedApp Component={Component} />, MOUNT_NODE);
};

render(App);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
