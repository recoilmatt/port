import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
//Images
import home from '../assets/images/cafe/home.jpg'
import locations from '../assets/images/cafe/locations.jpg'
import products from '../assets/images/cafe/products.jpg'
import anime from '../assets/images/misc/anime.png'
import weather from '../assets/images/misc/weather.png'

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
const Development = props => (
  <Layout>
    <Helmet>
      <title>Cafe</title>
      <meta name="description" content="Cafe Website" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Web Development Projects</h1>
          </header>

          <section class="overview">
            <div className="col-6">
              <Zoom>
                <span className="image main">
                  <img src={home} alt="shef" />
                </span>
              </Zoom>
            </div>
            <div className="col-6">
              <div>
                <h4>Cafe Latte</h4>
              </div>
              <p>
                An e-commerce full responsive web project built to learn the
                basics of web development and the React framework. Shoppers are
                able to browse and add items to their cart as well. I was able
                to learn the simple React Hooks, React Router, Firebase Auth,
                Styled Components, and using local storage. I also utilized
                Netlify as a server to host Cafe Latte, because it allows live
                updates alongside Github. The next phase I would learn would
                likely be connecting this to a database and add checkout
                integration.
              </p>
            </div>
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
          </section>

          <section>
            <Zoom>
              <span className="image main">
                <img src={anime} alt="shef" />
              </span>
            </Zoom>
            <section class="overview">
              <div>
                <h4>myAnimeList</h4>
              </div>
              <div>
                A web app created with React that uses Jikan anime api to fetch
                top animes and also adds to a watchlist in localStorage.
              </div>
              <div
                className="col-12"
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '5%',
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
          </section>

          <Zoom>
            <span className="image main">
              <img src={weather} alt="shef" />
            </span>
          </Zoom>
          <section class="overview">
            <div>
              <h4>Weather Finder</h4>
            </div>
            <div>
              React web app using OpenWeatherAPI to find current location and
              show weather using city name.
            </div>
            <div
              className="col-12"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '5%',
              }}
            >
              <a href="https://github.com/recoilmatt/weather">
                <div className="button">github</div>
              </a>
              <a href="https://weathermatt.netlify.app/">
                <div className="button">live</div>
              </a>
            </div>
          </section>
        </div>
      </section>
    </div>
    <Tabs />
  </Layout>
)

export default Development
