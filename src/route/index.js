import { Redirect } from "react-router-dom";
import About from "../components/about";
import Home from "../components/Home";

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to={"/home"} />,
    // 修改日志
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
];

export default routes;
