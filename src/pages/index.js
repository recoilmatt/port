import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="matt lai | design"
          meta={[
            { name: 'description', content: 'matt lai - ux/ui design' },
            { name: 'keywords', content: 'matt lai, designer, ux, ui' },
          ]}
        >
          <meta
            property="og:image"
            content="https://mattlai.com/static/pf-1607463efd53c9bf925bc591cdfe5cfe.jpg"
          />
        </Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundColor: `#007983` }}>
              <header className="major">
                <h3 style={{ color: `white` }}>Applied Medical</h3>
                <p style={{ color: `white` }}>UX Design | UI Design</p>
              </header>
              <Link to="/applied" className="link primary"></Link>
            </article>

            <article style={{ backgroundColor: `#7A8DB5` }}>
              <header className="major">
                <h3 style={{ color: `white` }}>Wander</h3>
                <p style={{ color: `white` }}>UI Design | UX Case Study</p>
              </header>
              <Link to="/wander" className="link primary"></Link>
            </article>

            <article style={{ backgroundColor: `#102549` }}>
              <header className="major">
                <h3 style={{ color: `white` }}>ExamWriter EHR</h3>
                <p style={{ color: `white` }}>UI Redesign Concept</p>
              </header>
              <Link to="/examwriter" className="link primary"></Link>
            </article>

            <article style={{ backgroundColor: `goldenrod` }}>
              <header className="major">
                <h3>Golden Vision Optometry</h3>
                <p>Web Design | Digital Marketing</p>
              </header>
              <Link to="/golden" className="link primary"></Link>
            </article>

            <article style={{ backgroundColor: `#696969` }}>
              <header className="major">
                <h3 style={{ color: '#333' }}>Web Development</h3>
                <p style={{ color: `#333` }}>Personal Dev Projects</p>
              </header>
              <Link to="/development" className="link primary"></Link>
            </article>

            <article style={{ backgroundColor: `black` }}>
              <header className="major">
                <h3 style={{ color: `white` }}>Personal Designs</h3>
                <p style={{ color: `white` }}>Design Projects</p>
              </header>
              <Link to="/misc" className="link primary"></Link>
            </article>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
