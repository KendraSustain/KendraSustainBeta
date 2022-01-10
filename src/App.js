import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import "./App.css";
import Dash from "./pages/Dashboard/Dash";
import NewProduct from "./pages/newProduct/NewProduct";
import Register from "./pages/Asset/Register/Register";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { Context } from "./context/Contexts";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import DataMonitor from "./pages/Asset/DataMonitor/DataMonitor";
import KendraFlow from "./pages/DataIngestion/KendraFlow";
import PredictionModel from "./pages/AI Models/Prediction Model/PredictionModel";
import CarbonFootprintCalculator from "./pages/ManageReductionPlan/CarbonFootprintCalculator/CarbonFootprintCalculator";
import Api from "./pages/API/Api";
import ActiveFlow from "./pages/DataIngestion/ActiveFlow";
import Realtime from "./pages/DataIngestion/Realtime";
import RealTime from "./pages/AI Models/Prediction Model/RealTime";
import CusDash from "./pages/Dashboard/CusDash";
const routes = [
    // ["/dashboard", < Dash />],
    ["/cusdashboard", <CusDash />],
    ["/ingestion/flow", < KendraFlow />],
    ["/ingestion/activeflow", < ActiveFlow />],
    ["/measure/register", < Register />],
    ["/measure/realtime", < Realtime />],
    // ["/measure/register", < NewProduct />],
    ["/api", < Api />],
    ["/measure/monitor", < DataMonitor />],
    ["/reduction/models", < NewProduct />],
    ["/reduction/calculate", < CarbonFootprintCalculator />],
    ["/models/energy_consumption", < NewProduct />],
    ["/models/carbon_emission_prediction", < NewProduct />],
    ["/models/prediction_model", <PredictionModel />],
    ["/models/realtime_model", <RealTime />],
    ["/offset", < NewProduct />],
]


function App() {
    const [isAuth, setAuth] = useState(false);
    const [close, setClose] = useState(true);
    const [showNavTop, setShowNavTop] = useState(false);

    useEffect(() => {
        const readCookie = () => {
            const token = Cookies.get("tok_sustain");
            if (token) {
                setAuth(true);
            }
        }
        readCookie();
    }, [setAuth]);

    return (
        <Context.Provider value={{ isAuth, setAuth, close, setClose, showNavTop, setShowNavTop }}>
            <Router>
                <Routes />
            </Router>
        </Context.Provider>
    );
}

const Routes = () => {
    const context = useContext(Context);

    return (
        <>
            {context.showNavTop && <Topbar />}
            <div style={{ display: context.showNavTop ? "flex" : "block" }} >
                {context.showNavTop && <Sidebar />}
                <Switch>
                    <Route path="/" component={Home} exact />
                    <ProtectedLogin path="/login" auth={context.isAuth} component={Login} />
                    <ProtectedRoute path="/cusdashboard" auth={context.isAuth} component={CusDash} />
                    {routes.map((item, pos) => (
                        < ProtectedRoute auth={context.isAuth} key={pos} exact path={item[0]} > {item[1]} </ProtectedRoute>
                    ))}
                </Switch>
            </div>
        </>
    )
}

const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={() => auth ? (
                <Component />
            ) : (
                <Redirect to="/login" />
            )}
        />
    )
}

const ProtectedLogin = ({ auth, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={() => !auth ? (
                <Component />
            ) : (
                <Redirect to="/cusdashboard" />
            )}
        />
    )
}

export default App;
