import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import * as router from "react-router-dom";
import { Container } from "reactstrap";
import {
  // AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav
} from "@coreui/react";
// sidebar nav config
import navigation from "../../_nav";
// routes config
import routes from "../../routes";


const DefaultHeader = React.lazy(() => import("./DefaultHeader"));


const CheckRoute = (props) => {
  // console.log('navigation');
  // console.log(navigation);

  // console.log('path');
  // console.log(props.match.path);

  const item = navigation.items.filter(q => q.url == props.match.path);
  // console.log('item');
  // console.log(item);

  if(item.length > 0)
  {
    return true;
  } else {
    return false;
  }
}

// const PrivateRoute = ({ component: Component, ...rest }) => (

//   <Route {...rest} render={props =>
//     CheckRoute(props) === true
//     ?  <Component {...props} />
//     : <Redirect to='/login' />
// } />
// );

export default class DefaultLayout extends Component {
  componentDidMount() {
    if (!localStorage.getItem("token")) {
      this.props.history.replace("/login");
    }
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  signOut(e) {
    localStorage.clear();
    this.props.history.replace("/login");
  }

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader onLogout={e => this.signOut(e)} />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
              <AppSidebarNav
                navConfig={navigation}
                {...this.props}
                router={router}
              />
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} router={router} />
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                       key={idx}
                       path={route.path}
                       exact={route.exact}
                       name={route.name}
                       render={props => (
                         <route.component {...props} />
                       )} />
                     // <PrivateRoute
                     //   path={route.path}
                      //  component={route.component}
                     // />
                    ) : 
                   
                   null;
                  })}
                  <Redirect from="/" to="/dashboard" />
                </Switch>
              </Suspense>
            </Container>
          </main>
        </div>

      </div>
    );
  }
}

// export default DefaultLayout;
