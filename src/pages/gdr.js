import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Tabs from '../components/Tabs'

//Images
import title from '../assets/images/gdr/Title.png'
import img0 from '../assets/images/gdr/000.png'
import img1 from '../assets/images/gdr/001.png'
import img2 from '../assets/images/gdr/002.png'
import img3 from '../assets/images/gdr/003.png'
import img4 from '../assets/images/gdr/004.png'
import img5 from '../assets/images/gdr/005.png'
import img6 from '../assets/images/gdr/006.png'
import img7 from '../assets/images/gdr/007.png'
import img8 from '../assets/images/gdr/008.png'
import img9 from '../assets/images/gdr/009.png'
import img10 from '../assets/images/gdr/010.png'
import img11 from '../assets/images/gdr/011.png'
import img12 from '../assets/images/gdr/012.png'
import img13 from '../assets/images/gdr/013.png'
import img14 from '../assets/images/gdr/014.png'
import img15 from '../assets/images/gdr/015.png'
import img16 from '../assets/images/gdr/016.png'

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const GDR = props => (
  <Layout>
    <Helmet>
      <title>General Document Routing</title>
      <meta name="description" content="Applied Medical" />
    </Helmet>

    <div id="main" className="alt">
      <div className="inner" style={{ width: '100%' }}>
        <section id="one">
          <div className="grid-wrapper">
            <div className="col-12">
              <Zoom>
                <span className="image main">
                  <img src={img0}></img>
                </span>
              </Zoom>
              <Zoom>
                <span className="image main">
                  <img src={img1}></img>
                </span>
              </Zoom>
              <Zoom>
                <span className="image main">
                  <img src={img2}></img>
                </span>
              </Zoom>
              <Zoom>
                <span className="image main">
                  <img src={img3}></img>
                </span>
              </Zoom>
              <Zoom>
                <span className="image main">
                  <img src={img4}></img>
                </span>
              </Zoom>
              <Zoom>
                <span className="image main">
                  <img src={img5}></img>
                </span>
              </Zoom>
              <Zoom>
                <span className="image main">
                  <img src={img6}></img>
                </span>
              </Zoom>
              <Zoom>
                <span className="image main">
                  <img src={img7}></img>
                </span>
              </Zoom>
              <Zoom>
                <span className="image main">
                  <img src={img8}></img>
                </span>
              </Zoom>
              <Zoom>
                <span className="image main">
                  <img src={img9}></img>
                </span>
              </Zoom>
              <Zoom>
                <span className="image main">
                  <img src={img10}></img>
                </span>
              </Zoom>
              <Zoom>
                <span className="image main">
                  <img src={img11}></img>
                </span>
              </Zoom>
              <Zoom>
                <span className="image main">
                  <img src={img12}></img>
                </span>
              </Zoom>
              <Zoom>
                <span className="image main">
                  <img src={img13}></img>
                </span>
              </Zoom>
              <Zoom>
                <span className="image main">
                  <img src={img14}></img>
                </span>
              </Zoom>
              <Zoom>
                <span className="image main">
                  <img src={img15}></img>
                </span>
              </Zoom>
              <Zoom>
                <span className="image main">
                  <img src={img16}></img>
                </span>
              </Zoom>
            </div>
          </div>
        </section>
      </div>
    </div>
    <Tabs />
  </Layout>
)

export default GDR
