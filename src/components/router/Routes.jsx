import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Cachorros from '../pages/Cachorros'

import NavBar from '../layout/NavBar'
import Footer from '../layout/Footer'

import Labrador from '../details/Labrador'
import Husky from '../details/Husky'
import Cocker from '../details/Cocker'
import Pitbull from '../details/Pitbull'
import Dalmata from '../details/Dalmata'
import Schnauzer from '../details/Schnauzer'

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
          <Route path='/labrador_details' >
            <Labrador />
          </Route>
          <Route path='/husky_details' >
            <Husky />
          </Route>
          <Route path='/cocker_details' >
            <Cocker />
          </Route>
          <Route path='/pitbull_details' >
            <Pitbull />
          </Route>
          <Route path='/dalmata_details' >
            <Dalmata />
          </Route>
          <Route path='/schnauzer_details' >
            <Schnauzer />
          </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default Routes