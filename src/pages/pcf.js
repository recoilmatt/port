import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Tabs from '../components/Tabs'
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

const PCF = props => (
  <Layout>
    <Helmet>
      <title>General Document Routing</title>
      <meta name="description" content="Applied Medical" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <div className="grid-wrapper">
            <div className="col-12"></div>
          </div>
        </div>
      </section>
    </div>
    <Tabs />
  </Layout>
)

export default PCF
