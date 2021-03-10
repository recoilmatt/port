import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import home from '../assets/images/cafe/home.jpg'
import locations from '../assets/images/cafe/locations.jpg'
import products from '../assets/images/cafe/products.jpg'
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
const Cafe = props => (
  <Layout>
    <Helmet>
      <title>Cafe</title>
      <meta name="description" content="Cafe Website" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Cafe Latte</h1>
          </header>

          <section class="overview">
            <p>
              Cafe Latte is an e-commerce full responsive web project I built to
              learn the basics of web development and the React framework.
              Shoppers are able to browse and add items to their cart as well. I
              was able to learn the simple React Hooks, React-Router, Firebase
              Auth, some Styled-Components, and using local storage. I also
              utilized Netlify as a server to host Cafe Latte, because it allows
              live updates alongside Github. The next phase I would learn would
              likely be connecting this to a database and add checkout
              integration.
            </p>
            <div
              className="col-12"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '5%',
              }}
            >
              <a href="https://github.com/recoilmatt/cafe-latte">
                <div className="button">github</div>
              </a>
              <a href="https://cafe-latte.netlify.app/">
                <div className="button">live</div>
              </a>
            </div>

            <Zoom>
              <img src={home} style={roundedCorners} alt="" />
            </Zoom>
            <Zoom>
              <img src={locations} style={roundedCorners} alt="" />
            </Zoom>
            <Zoom>
              <img src={products} style={roundedCorners} alt="" />
            </Zoom>
          </section>
        </div>
      </section>
    </div>
    <Tabs />
  </Layout>
)

export default Cafe
