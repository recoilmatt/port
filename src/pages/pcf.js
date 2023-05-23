import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Tabs from '../components/Tabs'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

//Images
import flow from '../assets/images/pcf/flow.svg'
import test from '../assets/images/pcf/test.png'
import user1 from '../assets/images/pcf/user1.svg'
import user2 from '../assets/images/pcf/user2.svg'
import user3 from '../assets/images/pcf/user3.svg'
import user4 from '../assets/images/pcf/user4.svg'
import user5 from '../assets/images/pcf/user5.svg'
import user6 from '../assets/images/pcf/user6.svg'
import pcf1 from '../assets/images/pcf/pcf1.png'
import pcf2 from '../assets/images/pcf/PCF2.png'
import iterations from '../assets/images/pcf/iterations.png'
import solutions from '../assets/images/pcf/solutions.png'
import img008 from '../assets/images/pcf/008.png'
import img009 from '../assets/images/pcf/009.png'

const roundedCorners = {
  display: 'block',
  margin: 'auto',
  borderRadius: '4px',
  maxWidth: '100%',
  maxHeight: '100vh',
  marginBottom: '2%',
}

const center = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
}

const PCF = props => (
  <Layout>
    <Helmet>
      <title>Product Complaint Form</title>
      <meta name="description" content="Applied Medical" />
    </Helmet>

    <span>
      <img
        src={pcf1}
        style={{
          animation: 'animate 1.4s ease-in-out',
          width: '100%',
          height: '60vh',
          objectFit: 'none',
          marginBottom: '0',
        }}
        alt=""
      />
    </span>
    <div id="main" className="alt">
      <div className="inner">
        <h1 style={{ marginBottom: 0 }}>Product Complaint Form</h1>
        <span>
          Product Designer / Research / Prototyping • Q1-Q2 2021 • Full Case
          Study Upon Request
        </span>
      </div>
      <section id="one">
        <div className="inner">
          <h2>Summary</h2>
          The <strong>Product Complaint Form (Form-067)</strong>, previously
          referred to as a Customer Experience Report, is used by a Team Member
          or Customer to inform the Applied Medical Regulatory Affairs (RA) /
          Customer Satisfaction (CS) team about complaints regarding Applied
          Medical surgical products. In order to improve efficiency, this form
          is to be updated to add and edit fields so that the teams can get
          better information to process complaints.
        </div>
        <div className="inner">
          <h2>The Problem</h2>
          <blockquote>
            How might we create a <strong>mobile</strong> or
            <strong> web</strong> experience that would allow our Field Team
            members and Customer Satisfaction Team to gather and report the most
            accurate and prompt feedback from our customers?
          </blockquote>
        </div>

        <div className="inner">
          <h2>Business Goals</h2>
          The business identified the need to{' '}
          <strong>update the form questions</strong> for more{' '}
          <strong>detailed reporting and documentation.</strong> However, a
          previous iPad application that the team was using (iBPM) is no longer
          maintained by the developers. To account for this, an interactive web
          form will be created in the myApplied portal so that the{' '}
          <strong>Field team members </strong> can log into their mobile devices
          and fill out the form electronically while in the hospital.
        </div>

        <div className="inner">
          <h2>Stakeholder + Impact Analysis</h2>
          <div className="grid-wrapper">
            <div className="col-4">
              <p style={center}>
                <img src={user1} alt="user1" />
              </p>
              <span style={{ fontWeight: '600' }}>Regulatory Affairs</span>
              <p>
                The RA team inputs and process complaints based on the
                information on the form.
              </p>
            </div>
            <div className="col-4">
              <p style={center}>
                <img src={user2} alt="img" />
              </p>
              <span style={{ fontWeight: '600' }}>Field Implementation</span>
              <p>
                The field implementation team receives verbal information
                regarding and product issues and will use the form the input and
                document these events.
              </p>
            </div>
            <div className="col-4">
              <p style={center}>
                <img src={user3} />
              </p>
              <span style={{ fontWeight: '600' }}>Customer Relations</span>
              <p>
                The customer relations team will process credit, returns and
                exchanges for any product issues that arise.
              </p>
            </div>
          </div>
        </div>

        <div className="inner">
          <h2>Scope + Constraints</h2>
          <p>
            We’re aiming for an early Q2 (April 2021) design handoff so deciding
            the medium as a responsive web application in Phase 1 would be the
            most resource effective. We'd like to integrate with the SAP
            database and
            <strong>
              {' '}
              auto-populate hospital / contacts / product info
            </strong>{' '}
            from an Applied Medical CRM, saving time for the users to find
            contact information. A limitation is that we would be unable to
            automatically submit the form in eQMS automatically in Phase 1, and
            thus required manual entry from the corresponding regulatory team
            members.
          </p>
        </div>

        <div className="inner">
          <h2>Interviews</h2>
          <p>
            <div className="grid-wrapper">
              <div className="col-4">
                <p style={center}>
                  <img src={user4} alt="img"></img>
                </p>
                <span style={{ fontWeight: '600' }}>
                  USER 1 - Account Manager (France)
                </span>
              </div>
              <div className="col-4">
                <p style={center}>
                  <img src={user5} alt="img" />
                </p>
                <span style={{ fontWeight: '600' }}>
                  USER 2 - Account Manager (New England)
                </span>
              </div>
              <div className="col-4">
                <p style={center}>
                  <img src={user6} />
                </p>
                <span style={{ fontWeight: '600' }}>
                  USER 3 - Account Manager (New England)
                </span>
              </div>
            </div>
          </p>
          <div style={center}>
            <h2>What we asked</h2>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            Device usage
            <br />
            Travel frequency <br />
            Daily routine <br />
            Current and preferred process
          </div>
        </div>

        <div className="inner">
          <h2>Current Process</h2>
          <p>
            To create an intuitive process, we must first understand the current
            processes in place to find opportunities for growth. Interviewing
            multiple field team members located in the Northeastern region
            through a series of Teams calls, we were able to create a user
            journey, and solidify the persona of the ideal user who would be
            using this application.
          </p>
          <p style={center}>
            <img src={flow} alt="flow" />
          </p>
        </div>

        <div className="inner">
          <h2>Persona</h2>
          <p>
            <Zoom>
              <img src={img008} style={{ maxWidth: '100%' }} />
            </Zoom>
          </p>
        </div>

        <div className="inner">
          <h2>User Journey</h2>
          <p>
            The user journey map allows us as designers to find opportunities
            for this application to ease the pain points for the user.
          </p>
          <p>
            <Zoom>
              <img src={img009} style={{ maxWidth: '100%' }} />
            </Zoom>
          </p>
        </div>

        <div className="inner">
          <h2>Usability Test Summary</h2>
          <div className="grid-wrapper">
            <div className="col-6">
              <p>
                Using a remote usablity testing session, we assigned three
                participants four different tasks to complete with a scenario
                using desktop and mobile prototypes and encouraged them to think
                out loud during the process while screensharing. At the end of
                the testing session, we gathered all results and discussed the
                users’ comments for iterations.
              </p>
            </div>
            <div className="col-6">
              <p>
                <img src={test} style={{ maxWidth: '100%' }} />
              </p>
            </div>
          </div>
        </div>

        <div className="inner">
          <h2>Iterations v1</h2>
          <p>
            <Zoom>
              <img src={iterations} style={{ maxWidth: '100%' }} alt="web" />
            </Zoom>
          </p>
          <p style={{ textAlign: 'center' }}>
            <span role="img" aria-label="1">
              ☝️
            </span>
            A collection of different screens in the web mobile version v1.
          </p>
        </div>

        <div className="inner">
          <h2>Solutions</h2>

          <p>
            <img src={solutions} style={{ maxWidth: '100%' }} alt="web" />
          </p>
        </div>
        <Zoom>
          <img src={pcf2} style={roundedCorners} alt="web" />
        </Zoom>
        <p style={{ textAlign: 'center' }}>☝️ Desktop version</p>
        <div className="inner">
          <h2>Takeaways</h2>
          <p>
            There is ongoing development and our design team is currently
            supporting the web dev team by explaining our interactions,
            component refinements, and working through various edgecase
            scenarios. Our front end web team strucutured the backend themselves
            so this was a smooth development process.
          </p>
          <p>
            In future phases, we would like the ability to integrate with eQMS
            system to streamline the process without the manual e-mail step.
          </p>
          <p>
            We’d like to measure KPIs such as decrease in the rate of late
            submissions and overall quality of life improvements for field team
            members and the customer support team. In addition, the promptness
            of the data entry from Customer Satisfaction team will also increase
            as a result.
          </p>
        </div>
      </section>
    </div>

    <Tabs />
  </Layout>
)

export default PCF
