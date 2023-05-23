import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import pic01 from '../assets/images/photography/pic01.jpg'
import pic02 from '../assets/images/photography/pic02.jpg'
import pic03 from '../assets/images/photography/pic03.jpg'
import pic04 from '../assets/images/photography/pic04.jpg'
import pic05 from '../assets/images/photography/pic05.jpg'
import Banner from '../assets/images/banner.jpg'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const roundedCorners = {
  display: 'block',
  margin: 'auto',

  maxWidth: '100%',
  maxHeight: '50vh',
  marginTop: '5%',
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
              <Zoom>
                <img src={pic01} style={roundedCorners} alt="" />
              </Zoom>
            </div>

            <div className="col-4">
              <Zoom>
                <img src={pic02} style={roundedCorners} alt="" />
              </Zoom>
            </div>

            <div className="col-4">
              <Zoom>
                <img src={pic03} style={roundedCorners} alt="" />
              </Zoom>
            </div>

            <div className="col-4">
              <Zoom>
                <img src={Banner} style={roundedCorners} alt="" />
              </Zoom>
            </div>

            <div className="col-4">
              <Zoom>
                <img src={pic04} style={roundedCorners} alt="" />
              </Zoom>
            </div>

            <div className="col-4">
              <Zoom>
                <img src={pic05} style={roundedCorners} alt="" />
              </Zoom>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default Photography
