import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { GeneralProvider } from "./context/General";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <GeneralProvider>
                <Route component={Home} path="/" exact />
                <Route component={Login} path="/login" />
                <Route component={Register} path="/register" />
            </GeneralProvider>
        </Switch>
    </BrowserRouter>
);

export default Routes;
