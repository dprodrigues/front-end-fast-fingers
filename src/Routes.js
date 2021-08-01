import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route component={Home} path="/" exact />
            <Route component={Login} path="/login" />
            <Route component={Register} path="/register" />
        </Switch>
    </BrowserRouter>
);

export default Routes;
