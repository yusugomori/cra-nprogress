import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div>
      <main>
        <p>Page Home</p>
        <Link to="/foo">Go to Foo</Link>
      </main>
    </div>
  )
}

export default Home
