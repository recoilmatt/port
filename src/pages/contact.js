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
            I'm a designer with a passion for intuitive product experiences
            <span role="img" aria-label="art">
              🎨
            </span>
          </h2>
        </header>

        <div className="grid-wrapper">
          <div className="col-6">
            <p>
              Integrating my experiences in biological sciences, healthcare, and
              digital marketing, I am able to apply my skills towards the design
              process to create meaningful digital products that solve problems
              supported by analytical data. I am expanding my front end
              development skills to become an UX Engineer in the future.
            </p>
            <p>
              My tools are Figma and Adobe Creative Suite -- with skills for
              prototyping such as Protopie. For development, I'm currently
              learning the MERN stack with an interest in creating design
              systems.
            </p>
            <p>
              My hobbies include photography, travel, and matcha related things.
              I'm cooler on Instagram{' '}
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
