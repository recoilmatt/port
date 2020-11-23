import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Tabs from '../components/Tabs'
import title from '../assets/images/gdr/Title.png'
import filesharing from '../assets/images/Filesharing.png'
import TMD from '../assets/images/TMD.png'
import { Link } from 'gatsby'

const Applied = props => (
  <Layout>
    <Helmet>
      <title>Applied Medical</title>
      <meta name="description" content="Applied Medical" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <span
            style={{ display: 'flex', justifyContent: 'center' }}
            className="image main"
          >
            <img
              style={{ width: '30vh' }}
              src="https://www.appliedmedical.com/Content/IMG/Logos/Logo_AppliedMedical_Med.png"
              alt="Applied"
            />
          </span>
          <section class="overview">
            <p>
              In my experience at Applied Medical, I was on the applications
              design team and contributed toward various enterprise products to
              solve problems and boost productivity across multiple mediums --
              web, mobile, and desktop.
            </p>

            <div className="grid-wrapper">
              <div className="col-12">
                <Link to="/gdr" style={{ borderBottom: 'none' }}>
                  <img
                    src={title}
                    alt="GDR"
                    style={{
                      maxWidth: '100%',
                      borderRadius: '8px',
                    }}
                  ></img>
                </Link>
              </div>

              <div className="col-12">
                <img
                  src={TMD}
                  alt="TMD"
                  style={{ maxWidth: '100%', borderRadius: '8px' }}
                ></img>
              </div>

              <div className="col-12">
                <img
                  src={filesharing}
                  alt="File Sharing"
                  style={{ maxWidth: '100%', borderRadius: '8px' }}
                ></img>
              </div>

              <div className="col-12">
                <p>
                  Applied Design System - collaborated with a team of designers
                  and developers to form a consistent UI guide between various
                  Applied Medical
                </p>
              </div>

              <div className="col-12">
                <p>
                  myApplied - a central destination to access Applied team
                  member resources and applications.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
    <Tabs />
  </Layout>
)

export default Applied
