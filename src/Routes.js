import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";

const Routes = () => (
    <Router>
        <Switch>
            <Route component={Login} path="/login" />
        </Switch>
    </Router>
);

export default Routes;
