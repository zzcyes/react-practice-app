import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './styles.css';
import SimpleCount from './features/demo/simpleCount';
import CountLabel from './features/demo/countLabel';
import UseCallback from './features/demo/useCallback';
import UseMemo from './features/demo/useMemo';
import Redux from './features/demo/redux';
import ControlComp from './features/demo/controlComp';
import ListWithMore from './features/demo/listWithMore';
import UseKeyPress from './features/demo/useKeyPress';
import TestArrayState from './features/demo/testArrayState';
import UseEffect from './features/demo/useEffect';

interface IRoutes {
  name: string;
  component:
    | React.ComponentType<any>
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | null
    | undefined
    | any;
  additionalRoute?: string;
}

const routes: IRoutes[] = [
  {
    name: 'demo-simpleCount',
    component: <SimpleCount />,
    additionalRoute: '',
  },
  {
    name: 'demo-countLabel',
    component: <CountLabel />,
    additionalRoute: '',
  },
  {
    name: 'demo-useCallback',
    component: <UseCallback />,
    additionalRoute: '',
  },
  {
    name: 'demo-useMemo',
    component: <UseMemo />,
    additionalRoute: '',
  },

  {
    name: 'demo-redux',
    component: <Redux />,
    additionalRoute: '',
  },
  {
    name: 'demo-controlComp',
    component: <ControlComp />,
    additionalRoute: '',
  },
  {
    name: 'demo-listWithMore',
    component: <ListWithMore />,
    additionalRoute: '',
  },
  {
    name: 'demo-useKeyPress',
    component: <UseKeyPress />,
    additionalRoute: '',
  },
  {
    name: 'demo-testArrayState',
    component: <TestArrayState />,
    additionalRoute: '',
  },
  {
    name: 'demo-useEffect',
    component: <UseEffect />,
    additionalRoute: '',
  },
];

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <ul className="sider">
          {routes.map((item: IRoutes) => (
            <li key={item.name}>
              <Link
                to={`/${item.name.replace(' ', '/')}${item.additionalRoute}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div id="pageContainer" className="page-container">
          <Routes>
            {routes.map((item: IRoutes) => (
              <Route
                key={item.name}
                path={`/${item.name.replace(' ', '/')}${item.additionalRoute}`}
                element={item.component}
              ></Route>
            ))}
            <Route path="/" element={<h1>Welcome!</h1>}></Route>
            <Route path="*" element={<h1>Page not found.</h1>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
