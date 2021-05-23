import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import travelfinal from '../assets/images/wander/TravelFinal.jpg'
import hype from '../assets/images/misc/hype.png'
import shooz from '../assets/images/misc/Shooz.mp4'

import arc from '../assets/images/misc/arc.gif'
import Tabs from '../components/Tabs'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Projects = props => (
  <Layout>
    <Helmet>
      <title>Personal Design Projects</title>
      <meta name="description" content="Personal Projects" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Personal Designs</h1>
          </header>

          <div className="grid-wrapper">
            <div className="col-12">
              <Zoom>
                <video width="100%" height="100%" autoPlay loop muted>
                  <source src={shooz} type="video/mp4" />
                </video>
              </Zoom>
            </div>
          </div>

          <div className="grid-wrapper">
            <div className="col-6">
              <Zoom>
                <span className="image main">
                  <img
                    src={arc}
                    style={{
                      width: '100%',
                      maxHeight: '350px',
                      objectFit: 'cover',
                    }}
                    alt="Arc"
                  />
                </span>
              </Zoom>
            </div>

            <div className="col-6">
              <Zoom>
                <span className="image main">
                  <img
                    src={hype}
                    style={{
                      width: '100%',
                      maxHeight: '350px',
                      objectFit: 'cover',
                    }}
                    alt="Travel Final"
                  />
                </span>
              </Zoom>
            </div>
          </div>

          <div className="grid-wrapper">
            <div className="col-12">
              <Zoom>
                <span className="image main">
                  <img src={travelfinal} alt="Travel Final" />
                </span>
              </Zoom>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Tabs />
  </Layout>
)

export default Projects
