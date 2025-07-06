import { FunctionComponent } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import Error404 from './pages/404'

import Home from './pages/Home'
import Login from './pages/Login'

const Routes: FunctionComponent = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route component={Error404} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default Routes