import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AuthGuardRoute from "./components/AuthGuardRoute";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import CardInfoPage from "./pages/CardInfoPage";
import CardsPanelPage from "./pages/CardsPanelPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import QueryParams from "./pages/QueryParams";
import { Fragment } from "react";

// import SignupPage from "./pages/SignupPage";
const SignupPage = React.lazy(() => import("./pages/SignupPage"));
function App() {
  return (
    <Fragment>
      <NavBarComponent></NavBarComponent>
      <ToastContainer />
      <Suspense fallback={<div>loading</div>}>
        <Switch>
          {/* http://localhost:3000/ */}
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          {/* http://localhost:3000/home */}
          <Route path="/home" component={HomePage} />
          {/* http://localhost:3000/login */}
          <Route path="/login" component={LoginPage} />
          {/* http://localhost:3000/signup */}
          <Route path="/signup" component={SignupPage} />
          {/* http://localhost:3000/cardspanel */}
          <Route path="/cardspanel" component={CardsPanelPage} />
          <Route path="/card/:id" component={CardInfoPage} />
          <Route path="/qparams" component={QueryParams} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Suspense>
    </Fragment>
  );
}

export default App;
