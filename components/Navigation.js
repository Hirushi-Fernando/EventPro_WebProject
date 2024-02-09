import React from 'react'
import './Navigation.css'

const Navigation = () => {
  return (
    <div className="sidebar">
        <h2>EventPro</h2>
        <ul>
          <li><a href="/">🏠︎ Home</a></li>
          <li><a href="#search">🔍︎ Search</a></li>
          <li><a href="#requirements">📋 Requirements</a></li>
          <li><a href="#premade">☑ Premade</a></li>
          <li><a href="#directory">⛓ Directory</a></li>
          <li style={{ marginBottom: '80px' }}><a href="#customize">☰ Customize</a></li>
          <li><a href="#settings">⚙️ Settings</a></li>
          <li><a href="login">✦ Log in</a></li>
        </ul>
      </div>
  )
}

export default Navigation