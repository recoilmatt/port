import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Tabs from '../components/Tabs'
import title from '../assets/images/gdr/Title.png'
import pcf1 from '../assets/images/pcf/pcf1.png'

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
              <div className="col-12" style={{ paddingBottom: '10%' }}>
                <h1 style={{ margin: 0 }}>General Document Routing</h1>
                <p>
                  Internal tool to route important documents for electronic
                  signatures through a chain of approvers.
                </p>
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
                <h1 style={{ margin: 0 }}>Product Complaint Form</h1>
                <p>
                  Web application for Field Team members to report issues
                  regarding medical device products intergrated within the
                  company portal.
                </p>
                <Link to="/pcf" style={{ borderBottom: 'none' }}>
                  <img
                    src={pcf1}
                    alt="pcf intro"
                    style={{ maxWidth: '100%', borderRadius: '8px' }}
                  ></img>
                </Link>
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
