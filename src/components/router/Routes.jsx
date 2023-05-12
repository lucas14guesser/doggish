import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Cachorros from '../pages/Cachorros'


import NavBar from '../layout/NavBar'
import Container from '../layout/Container'

import Footer from '../layout/Footer'

const Routes = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
          <Route exact path='/' >
            <Home />
          </Route>
          <Route path='/dogs' >
            <Cachorros />
          </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default Routes