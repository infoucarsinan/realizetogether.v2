import React from "react";
import { BrowserRouter, Switch, Route, RouteProps } from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import RegisterPage from "./pages/Register/Register";
import UserProfilePage from "./pages/UserProfile/UserProfile";
import CurrentUserProfilePage from "./pages/CurrentUserProfile/CurrentUserProfile";
import IdeaPage from "./pages/Idea/Idea";
import IdeaDetailsPage from "./pages/IdeaDetails/IdeaDetails";
import MessagesPage from "./pages/Messages/Messages";
import MessageDetailsPage from "./pages/MessageDetails/MessageDetails";
import NetworkPage from "./pages/Network/Network";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

type CustomRouteProps = RouteProps & {
  Component: () => JSX.Element;
  path: string;
};

const routes: CustomRouteProps[] = [
  // { path: "/", Component: IdeaPage, exact: true },
  { path: "/", Component: LoginPage, exact: true },
  { path: "/Idea", Component: IdeaPage, exact: true },
  { path: "/register", Component: RegisterPage, exact: true },
  { path: "/login", Component: LoginPage, exact: true },
  { path: "/userprofile/:firstname", Component: UserProfilePage, exact: true },
  {
    path: "/currentuserprofile",
    Component: CurrentUserProfilePage,
    exact: true,
  },
  { path: "/ideadetails", Component: IdeaDetailsPage, exact: true },
  { path: "/messages", Component: MessagesPage, exact: true },
  { path: "/messagedetails", Component: MessageDetailsPage, exact: true },
  { path: "/network", Component: NetworkPage, exact: true },
  { path: "/forgotpassword", Component: ForgotPassword, exact: true },
];

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(({ Component, ...routeProps }) => (
          <Route key={routeProps.path} {...routeProps}>
            <Component />
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
