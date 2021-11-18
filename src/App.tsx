import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import FirstState from "./demo/firstState";
import Count from "./demo/count";

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
    name: "demo-FirstState",
    component: <FirstState />,
    additionalRoute: "",
  },
  {
    name: "demo-Count",
    component: <Count />,
    additionalRoute: "",
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
                to={`/${item.name.replace(" ", "/")}${item.additionalRoute}`}
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
                path={`/${item.name.replace(" ", "/")}${item.additionalRoute}`}
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
