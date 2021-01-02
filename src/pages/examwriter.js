import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Overview from '../assets/images/examwriter/Overview.png'
import Goals from '../assets/images/examwriter/Goals.png'
import MacGlasses from '../assets/images/examwriter/MacGlasses.png'
import Palette from '../assets/images/examwriter/Palette.png'
import Feature from '../assets/images/examwriter/Feature.png'
import Feature2 from '../assets/images/examwriter/Feature2.png'
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
              <img src={Feature2} alt="glasses" />
            </span>
          </Zoom>
        </div>
      </section>
    </div>
  </Layout>
)

export default Examwriter
