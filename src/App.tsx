import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Router from './router'

import Home from './pages/home'
import Foo from './pages/foo'

import './App.css'

interface RouterProps {
  path: string | undefined
  component: React.Component | React.FC<any>
  exact: boolean
}

const routes: RouterProps[] = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/foo',
    component: Foo,
    exact: true,
  },
]

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => (
          <Router key={index} {...route} />
        ))}
      </Switch>
    </BrowserRouter>
  )
}

export default App
