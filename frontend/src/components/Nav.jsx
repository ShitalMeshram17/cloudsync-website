import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(){
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-xl font-semibold text-sky-600">CloudSync</Link>
        <nav className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
