import { Router } from '@reach/router'

import Layout from '../components/layout'
import Home from './home'
import Details from './details'

const Menu = [
  {
    route: '/',
    component: Home
  },
  {
    route: '/pokemon/:pokemonName',
    component: Details
  }

]

const Index = (props) => {
  return (
    <>
      <Router>
        <Layout path='/'>
          {Menu.map(({ component: Component, route }, i) => (
            <Component key={i} path={route} />
          ))}
        </Layout>
      </Router>
    </>
  )
}

export default Index
