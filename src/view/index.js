import { Router } from '@reach/router'

import Layout from '../components/layout'
import Home from './home'

const Menu = [
  {
    route: '/',
    component: Home
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
