import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Tabs from '../components/Tabs'
import GDR1 from '../assets/images/GDR1.png'
import GDR2 from '../assets/images/GDR2.png'
import GDR3 from '../assets/images/GDR3.png'

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
              <img src={GDR1} style={roundedCorners} alt="" />
              <img src={GDR2} style={roundedCorners} alt="" />
            </div>
            <div className="col-12">
              <img src={GDR3} style={{ width: '100%' }} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
    <Tabs />
  </Layout>
)

export default GDR
