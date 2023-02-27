import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Login from './pages/auth/Login'
import Home from './pages/Home'
import About from './pages/About'
import Signup from './pages/auth/Signup'
import NotFound from './pages/NotFound'
import WebLayout from './WebLayout'

// function PrivateRoute({ component: Component, ...rest }) {
//   const isLoggedIn = localStorage.getItem("auth_token")
//   return (
//     <Route {...rest} render={props =>
//         isLoggedIn ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
//         )
//       }
//     />
//   );
// }

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    )} />
  )
}

function App(props) {
  return (
     <Router>
      <div>
        <Switch>
          {/* <Route path="/login" render={props => (<Login {...props} />)} />
          <Route path="/sign-up" render={props => (<Signup {...props} />)} />
          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute exact path="/about" component={About} /> */}
          {/* <Route path="/" render={props => (<Home {...props} />)} />
          <Route path="/about" render={props => (<About {...props} />)} />
          <Route path="*" component={NotFound} /> */}
          <AppRoute exact path="/" layout={WebLayout} component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
