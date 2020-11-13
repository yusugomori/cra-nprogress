import React from 'react'
import { Link } from 'react-router-dom'

const Foo: React.FC = () => {
  return (
    <div>
      <main>
        <p>Page Foo</p>
        <Link to="/">Go to Home</Link>
      </main>
    </div>
  )
}

export default Foo
