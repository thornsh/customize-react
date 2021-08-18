import { Route, Switch } from "react-router-dom";

function renderPages(config) {
  let result = (
    <Switch>
      {config.map((route, index) =>
        route.component ? (
          <Route
            exact={true}
            path={route.path}
            key={route.path + index}
            render={(p) => <route.component {...p} />}
          />
        ) : null
      )}
    </Switch>
  );
  return result;
}

export default renderPages;
