import React from "react";
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Login from './pages/auth/Login'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Clothes from './pages/Clothes'
import Formal from './pages/Formal'
import ProductDetails from "./components/common/ProductDetails";
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
          <PrivateRoute exact path="/shop" component={Shop} />
          <PrivateRoute exact path="/clothes" component={Clothes} />
          <PrivateRoute exact path="/formal" component={Formal} /> */}
          {/* <Route path="/" render={props => (<Home {...props} />)} />
          <Route path="/shop" render={props => (<Shop {...props} />)} />
          <Route path="/clothes" render={props => (<Clothes {...props} />)} />
          <Route path="/formal" render={props => (<Formal {...props} />)} />
          <Route path="*" component={NotFound} /> */}
          <AppRoute exact path="/" layout={WebLayout} component={Home} />
          <AppRoute exact path="/shop" layout={WebLayout} component={Shop} />
          <AppRoute exact path="/productdetails/:id" layout={WebLayout} component={ProductDetails}/>
         </Switch>
      </div>
    </Router>
  );
}

export default App;
