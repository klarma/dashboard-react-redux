import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./features/dashboard/Dashboard";

const App = () => (
    <HashRouter>
        <div>
            <Link to="/users"></Link>
        </div>

        <Switch>
            <Route path="/">
                <Redirect to="/users" />
                <Dashboard />
            </Route>
        </Switch>
    </HashRouter>
);

export default App;
