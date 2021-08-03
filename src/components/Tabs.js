import React from 'react'
import { Link } from 'gatsby'

const Tabs = props => (
  <div
    className="inner"
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <div
      className="link"
      style={{
        paddingRight: '1em',
      }}
    >
      <Link to="/">
        <span>Home</span>
      </Link>
    </div>

    <div
      className="link"
      style={{
        paddingRight: '1em',
      }}
    >
      <Link to="/applied">
        <span>Applied Medical</span>
      </Link>
    </div>

    <div
      className="link"
      style={{
        paddingRight: '1em',
      }}
    >
      <Link to="/wander">
        <span>Wander</span>
      </Link>
    </div>
    <div
      className="link"
      style={{
        paddingRight: '1em',
      }}
    >
      <Link to="/golden">
        <span>Golden Vision Optometry</span>
      </Link>
    </div>

    <div
      className="link"
      style={{
        paddingRight: '1em',
      }}
    >
      <Link to="/examwriter">
        <span>ExamWriter</span>
      </Link>
    </div>

    <div
      className="link"
      style={{
        paddingRight: '1em',
      }}
    >
      <Link to="/misc">
        <span>Personal Designs</span>
      </Link>
    </div>
  </div>
)

export default Tabs
