import React, { useContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  Home,
  Login,
  Dashboard,
  ActiveFlow,
  Asset,
  DataMonitor,
  Factor,
  Calculator,
  CarbonCal,
  Prediction,
  AssetDetail,
  Offset,
  User,
  Admin,
} from "./Pages";
import MainContext, { Context } from "./Context";
import { Sidebar, Topbar } from "./Components";
import styles from "./Main.module.css";
import { getUser } from "./Auth";

const routes = [
  {
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    route: "/ingestion/activeflow",
    component: <ActiveFlow />,
  },
  {
    route: "/measure/asset",
    component: <Asset />,
  },
  {
    route: "/asset",
    component: <AssetDetail />,
  },
  {
    route: "/measure/scope",
    component: <DataMonitor />,
  },

  {
    route: "/emission/factors",
    component: <Factor />,
  },
  {
    route: "/emission/calculator",
    component: <Calculator />,
  },
  {
    route: "/reduction/cal",
    component: <CarbonCal />,
  },
  {
    route: "/models/prediction_model",
    component: <Prediction />,
  },
  {
    route: "/offset",
    component: <Offset />,
  },
  {
    route: "/user",
    component: <User />,
  },
  {
    route: "/admin",
    component: <Admin />,
  },
];

const Main = (props) => {
  const { close, setClose, isAuth, setIsAuth } = useContext(Context);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const run = async () => {
      const user_ = await getUser();
      
      if (!user_.success) return navigate("/login");
       setIsAuth(true);
      setUser({ name : user_.company , job : user_.email , photo : "https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png"  })
    };
    run();
  }, [navigate, setIsAuth]);
  return (
    isAuth && (
      <>
        <Topbar close={close} onClose={setClose} />
        <Sidebar close={close} user={user} />
        <div className={[styles.home, close ? styles.close : ""].join(" ")}>
          <Routes>
            {routes.map((item, pos) => (
              <Route key={pos} path={item.route} element={item.component} />
            ))}
          </Routes>
        </div>
      </>
    )
  );
};

function App() {
  return (
    <MainContext>
      <>
        <Router />
      </>
    </MainContext>
  );
}

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Main />} />
    </Routes>
  );
};

export default App;
