import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Tabs from '../components/Tabs'

import title from '../assets/images/gdr/Title.png'
import problem from '../assets/images/gdr/Problem.png'
import metrics from '../assets/images/gdr/Metrics.png'
import painpoints from '../assets/images/gdr/PainPoints.png'
import brainstorm from '../assets/images/gdr/Brainstorm.png'
import process from '../assets/images/gdr/Process.png'
import userflow from '../assets/images/gdr/UserFlow.png'
import wireframe from '../assets/images/gdr/Wireframe.png'
import solutions from '../assets/images/gdr/Solutions.png'

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const roundedCorners = {
  display: 'block',
  margin: 'auto',
  borderRadius: '8px',
  maxWidth: '100%',
  maxHeight: '100vh',
  marginBottom: '2%',
}

const GDR = props => (
  <Layout>
    <Helmet>
      <title>General Document Routing</title>
      <meta name="description" content="Applied Medical" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <div className="grid-wrapper">
            <div className="col-12">
              <Zoom wrapStyle={{ width: '100' }}>
                <img src={title} style={roundedCorners} alt="" />
              </Zoom>
              <Zoom>
                <img src={problem} style={roundedCorners} alt="" />
              </Zoom>
              <Zoom>
                <img src={painpoints} style={roundedCorners} alt="" />
              </Zoom>
              <Zoom>
                <img src={metrics} style={roundedCorners} alt="" />
              </Zoom>
              <Zoom>
                <img src={process} style={roundedCorners} alt="" />
              </Zoom>
              <Zoom>
                <img src={brainstorm} style={roundedCorners} alt="" />
              </Zoom>
              <Zoom>
                <img src={userflow} style={roundedCorners} alt="" />
              </Zoom>
              <Zoom>
                <img src={wireframe} style={roundedCorners} alt="" />
              </Zoom>
              <Zoom>
                <img src={solutions} style={{ width: '100%' }} alt="" />
              </Zoom>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Tabs />
  </Layout>
)

export default GDR
