import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Tabs from '../components/Tabs'

const Applied = props => (
  <Layout>
    <Helmet>
      <title>Applied</title>
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
              alt=""
            />
          </span>
          <section class="overview">
            <p>
              In my experience at Applied Medical, my team and I were on the
              applications design team and contributed toward various enterprise
              applications across multiple mediums -- web, mobile, and desktop.
            </p>

            <div className="grid-wrapper">
              <div
                className="col-12"
                style={{ display: 'flex', alignItems: 'center' }}
              ></div>
            </div>
            <p>
              <a href="/gdr">
                General Document Routing - digital process to route signatures
                and approvals, documents, and files for review. [ View Case
                Study ]
              </a>
            </p>
            <p>
              Team Member Development -- a web and mobile application for
              performance reviews, and goal tracking.
            </p>
            <p>
              Communication Center - a notification tool for important actions
              and notifications in the Applied Medical system.
            </p>

            <p>
              Applied Design System - collaborated with a team of designers and
              developers to form a consistent UI guide between various Applied
              application.
            </p>
            <p>
              myApplied - a central destination to access Applied team member
              resources and applications.
            </p>
            <p>
              CRM Redesign - redesign of an iOS application for field team
              members and sales.
            </p>

            <p>
              To Do List - a tool for Office 365 integration with enterprise
              applications.
            </p>
            <p>
              System Status Tracker - tool for determining uptimes for various
              applications and production systems.
            </p>
          </section>
        </div>
      </section>
    </div>
    <Tabs />
  </Layout>
)

export default Applied
