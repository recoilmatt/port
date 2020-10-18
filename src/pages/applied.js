import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Tabs from '../components/Tabs'
import GDRVideo from '../assets/images/GDRVideo.png'
import TMD from '../assets/images/TMD.jpg'
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
              <div className="col-6">
                <img
                  src={GDRVideo}
                  alt="GDR Video"
                  style={{ maxWidth: '100%', borderRadius: '8px' }}
                ></img>
                <p>
                  <Link to="/gdr">
                    General Document Routing - digital process to route
                    signatures and approvals, documents, and files for review. [
                    View Case Study ]
                  </Link>
                </p>
              </div>

              <div className="col-6">
                <img
                  src={TMD}
                  alt="TMD"
                  style={{ maxWidth: '90%', borderRadius: '8px' }}
                ></img>
                <p>
                  Team Member Development -- a web and mobile application for
                  performance reviews, and goal tracking.
                </p>
              </div>

              <div className="col-6">
                <p>
                  Applied Design System - collaborated with a team of designers
                  and developers to form a consistent UI guide between various
                  Applied Medical
                </p>
              </div>

              <div className="col-6">
                <p>
                  myApplied - a central destination to access Applied team
                  member resources and applications.
                </p>
              </div>

              <div className="col-6">
                <p>
                  To Do List - a tool for Office 365 integration with enterprise
                  applications.
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
