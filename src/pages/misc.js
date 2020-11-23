import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import anime from '../assets/images/misc/anime.png'
import shef from '../assets/images/misc/shefmock.png'
import travelfinal from '../assets/images/wander/TravelFinal.jpg'

import arc from '../assets/images/misc/arc.gif'
import Tabs from '../components/Tabs'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Projects = props => (
  <Layout>
    <Helmet>
      <title>Personal Projects</title>
      <meta name="description" content="Fun Projects" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Fun Projects</h1>
          </header>
          <div className="grid-wrapper">
            <div className="col-6">
              <Zoom>
                <span className="image main">
                  <img src={arc} alt="Arc" />
                </span>
              </Zoom>
            </div>
            <div className="col-6">
              <Zoom>
                <span className="image main">
                  <img src={travelfinal} alt="Travel Final" />
                </span>
              </Zoom>
            </div>
          </div>
          <div className="grid-wrapper">
            <div className="col-6">
              <Zoom>
                <span className="image main">
                  <img
                    src={anime}
                    style={{
                      maxHeight: '400px',
                      objectFit: 'cover',
                    }}
                    alt="anime watchlist"
                  />
                </span>
              </Zoom>
              <section class="overview">
                <div
                  className="col-12"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <a href="https://github.com/recoilmatt/animewatchlist">
                    <div className="button">github</div>
                  </a>
                  <a href="https://anime-watchlist.netlify.app/">
                    <div className="button">live</div>
                  </a>
                </div>
              </section>
            </div>

            <div className="col-6">
              <Zoom>
                <span className="image main">
                  <img src={shef} alt="shef" />
                </span>
              </Zoom>
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
          </div>
        </div>
      </section>
    </div>
    <Tabs />
  </Layout>
)

export default Projects
