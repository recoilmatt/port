import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import pf from '../assets/images/pf.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="matt lai | design"
          meta={[
            { name: 'description', content: 'matt lai - ux/ui design' },
            { name: 'keywords', content: 'matt lai, design' },
            { property: 'og:image', content: `${pf}` },
          ]}
        >
          <meta property="og:image" content={`${pf}`} />
        </Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundColor: `teal` }}>
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
                <h3 style={{ color: `white` }}>ExamWriter Optometry EHR</h3>
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
                <h3 style={{ color: '#333' }}>Cafe Latte</h3>
                <p>Web Development | UI Design </p>
              </header>
              <Link to="/cafe" className="link primary"></Link>
            </article>

            <article style={{ backgroundColor: `black` }}>
              <header className="major">
                <h3 style={{ color: `white` }}>Personal Projects</h3>
                <p style={{ color: `white` }}>Design | Web Development</p>
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
