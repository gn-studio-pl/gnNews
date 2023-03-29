import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to={'/'} className="font-sans font-extrabold text-secondary text-xl">
      News World
    </Link>
  )
}

export default Logo
