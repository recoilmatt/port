import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Overview from '../assets/images/Overview.png'
import Goals from '../assets/images/Goals.png'
import MacGlasses from '../assets/images/MacGlasses.png'
import Palette from '../assets/images/Palette.png'
import Feature from '../assets/images/Feature.png'
import Overview from '../assets/images/Overview.png'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Examwriter = props => (
  <Layout>
    <Helmet>
      <title>ExamWriter [EHR Redesign]</title>
      <meta name="description" content="ExamWriter EHR Optometry Redesign" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner" style={{ width: '90%' }}>
          <header className="major">
            <h1>ExamWriter [Redesign Concept]</h1>
          </header>
          <Zoom>
            <span className="image main">
              <img src={Overview} alt="overview" />
            </span>
          </Zoom>

          <Zoom>
            <span className="image main">
              <img src={Goals} alt="goals" />
            </span>
          </Zoom>

          <span className="image main">
            <img src={MacGlasses} alt="glasses" />
          </span>
          <Zoom>
            <span className="image main">
              <img src={Palette} alt="glasses" />
            </span>
          </Zoom>
          <Zoom>
            <span className="image main">
              <img src={Feature} alt="glasses" />
            </span>
          </Zoom>
          <Zoom>
            <span className="image main">
              <img src={Overview} alt="glasses" />
            </span>
          </Zoom>
        </div>
      </section>
    </div>
  </Layout>
)

export default Examwriter
