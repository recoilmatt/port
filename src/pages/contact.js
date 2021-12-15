import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import pf from '../assets/images/pf.jpg'

const Generic = props => (
  <Layout>
    <Helmet>
      <title>Contact</title>
      <meta name="description" content="Contact" />
    </Helmet>

    <section id="banner" className="major">
      <div className="inner">
        <header className="major">
          <h2>
            I'm a designer with a passion for creating good experiences.
            <span role="img" aria-label="art">
              🎨
            </span>
          </h2>
        </header>

        <div className="grid-wrapper">
          <div className="col-6">
            <p>
              Hey there — I'm Matt — a digital product designer based in
              Southern California. Integrating my experiences in biological
              sciences, healthcare, and digital marketing, I am able to apply my
              skills towards the process to create products that solve problems
              supported by analytical data. A quote I love is "diagnose with
              data, and treat with design". My goal is to innovate someday and
              to create digital products that people actually want to use! In my
              spare time, I am expanding my front end development skills.
            </p>
            <p>
              My tools are Figma, and I'm learning skills for prototyping such
              as Protopie. For web dev, I'm currently learning the MERN stack
              with an interest in creating design systems.
            </p>
            <p>
              In my spare time, my hobbies include photography, traveling to
              cafes to get desserts, and matcha related stuff. I'm cooler on
              Instagram{' '}
              <a href="http://www.instagram.com/recoilmatt">@recoilmatt</a>
            </p>
          </div>

          <div className="col-6">
            <img
              src={pf}
              style={{
                display: 'block',
                margin: 'auto',
                borderRadius: '8px',
                maxWidth: '100%',
                maxHeight: '50vh',
              }}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Generic
