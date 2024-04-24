import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import Login from "./pages/Login";
import Posts from "./pages/Posts";
import Navbar from "./navigation/Navbar";
import PrivateRoute from "./routing/PrivateRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Navbar} />
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/posts" component={Posts} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
