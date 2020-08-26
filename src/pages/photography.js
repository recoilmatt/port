import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import Banner from '../assets/images/Banner.jpg'

const roundedCorners = {
  display: 'block',
  margin: 'auto',
  borderRadius: '8px',
  maxWidth: '100%',
  maxHeight: '50vh',
  marginBottom: '5%',
}

const Photography = props => (
  <Layout>
    <Helmet>
      <title>Contact</title>
      <meta name="description" content="Contact" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <div className="grid-wrapper">
            <div className="col-4">
              <img src={pic01} style={roundedCorners} alt="" />
            </div>

            <div className="col-4">
              <img src={pic02} style={roundedCorners} alt="" />
            </div>

            <div className="col-4">
              <img src={pic03} style={roundedCorners} alt="" />
            </div>

            <div className="col-4">
              <img src={Banner} style={roundedCorners} alt="" />
            </div>

            <div className="col-4">
              <img src={pic04} style={roundedCorners} alt="" />
            </div>

            <div className="col-4">
              <img src={pic05} style={roundedCorners} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default Photography
