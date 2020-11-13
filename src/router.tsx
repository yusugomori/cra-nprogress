import React from 'react'
import { Route } from 'react-router-dom'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

nprogress.configure({ showSpinner: false, speed: 400, minimum: 0.25 })

class Router extends React.Component {
  constructor(props: any) {
    super(props)
    nprogress.start()
  }

  componentDidMount() {
    nprogress.done()
  }

  render() {
    return <Route {...this.props} />
  }
}

export default Router
