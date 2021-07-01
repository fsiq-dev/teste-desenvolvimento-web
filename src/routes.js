import React from 'react'
import { Router } from '@reach/router'

import Index from './view'

const Routes = () => {
  return (
    <>
      <Router>
        <Index path='/*' />
      </Router>
    </>
  )
}

export default Routes
