import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import SimpleCount from "./demo/simpleCount";
import CountLabel from "./demo/countLabel";
import UseCallback from "./demo/useCallback";
import UseMemo from "./demo/useMemo";
import Redux from "./demo/redux";
import ControlComp from "./demo/controlComp";

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
    name: "demo-simpleCount",
    component: <SimpleCount />,
    additionalRoute: "",
  },
  {
    name: "demo-countLabel",
    component: <CountLabel />,
    additionalRoute: "",
  },
  {
    name: "demo-useCallback",
    component: <UseCallback />,
    additionalRoute: "",
  },
  {
    name: "demo-useMemo",
    component: <UseMemo />,
    additionalRoute: "",
  },

  {
    name: "demo-redux",
    component: <Redux />,
    additionalRoute: "",
  },
  {
    name: "demo-controlComp",
    component: <ControlComp />,
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
