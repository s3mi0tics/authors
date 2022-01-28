import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./views/Main";
// import Detail from "./views/Detail";
import Edit from "./views/Edit";
import Create from "./views/Create";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/authors/:id/edit">
            <Edit />
          </Route>
          <Route exact path="/authors/new">
            <Create />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
