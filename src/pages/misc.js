import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import tax from '../assets/images/tax.png'
import shef from '../assets/images/shefmock.png'
import TravelFinal from '../assets/images/TravelFinal.jpg'
import health from '../assets/images/health.webm'
import Tabs from '../components/Tabs'

const Projects = props => (
  <Layout>
    <Helmet>
      <title>Fun Projects</title>
      <meta name="description" content="Dev Projects" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Fun Projects</h1>
          </header>

          <video width="100%" height="100%" autoPlay muted loop>
            <source src={health} type="video/webm" />
          </video>

          <span className="image main">
            <img src={TravelFinal} alt="Travel Final" />
          </span>

          <span className="image main">
            <img src={tax} alt="kl associates" />
          </span>
          <section class="overview">
            <div
              className="col-12"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <a href="https://github.com/recoilmatt/klassociates">
                <div className="button">github</div>
              </a>
              <a href="https://klassociates.netlify.app/">
                <div className="button">live</div>
              </a>
            </div>
          </section>

          <span className="image main">
            <img src={shef} alt="shef" />
          </span>
          <section class="overview">
            <div
              className="col-12"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <a href="https://github.com/recoilmatt/shef">
                <div className="button">github</div>
              </a>
              <a href="https://shef.netlify.app/">
                <div className="button">live</div>
              </a>
            </div>
          </section>
        </div>
      </section>
    </div>
    <Tabs />
  </Layout>
)

export default Projects
