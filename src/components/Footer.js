import React from 'react'

const Footer = props => (
  <footer id="footer">
    <div
      className="inner"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ul className="icons">
        <li>
          <a
            href="https://www.dribbble.com/recoilmatt"
            className="icon alt fa-dribbble"
          >
            <span className="label">Dribble</span>
          </a>
        </li>
        <li>
          <a
            href="http://www.instagram.com/recoilmatt"
            className="icon alt fa-instagram"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.github.com/recoilmatt"
            className="icon alt fa-github"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/recoilmatt/"
            className="icon alt fa-linkedin"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
