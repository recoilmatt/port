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
import pcf2 from '../assets/images/pcf/PCF2.png'
import pcf3 from '../assets/images/pcf/PCF3.png'
import img000 from '../assets/images/pcf/000.png'
import img001 from '../assets/images/pcf/001.png'
import img002 from '../assets/images/pcf/002.png'
import img003 from '../assets/images/pcf/003.png'
import img004 from '../assets/images/pcf/004.png'
import img005 from '../assets/images/pcf/005.png'
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
        src={pcf2}
        style={{
          animation: 'animate 1.4s ease-in-out',
          objectFit: 'cover',
          marginBottom: '0',
        }}
        alt=""
      />
    </span>
    <div id="main" className="alt">
      <div className="inner">
        <h1 style={{ marginBottom: 0 }}>Product Complaint Form</h1>
        <span>
          Product Designer • UI / UX / Prototyping • Q1-Q2 2021 • Full Case
          Study Upon Request
        </span>
      </div>
      <section id="one">
        <div className="inner">
          <h2>Summary</h2>
          The Product Complaint Form (Form-067), previously referred to as a
          Customer Experience Report or CER, is used by a Team Member or
          Customer to inform the Applied Medical Regulatory Affairs
          (RA)/Customer Satisfaction (CS) team about complaints regarding
          Applied Medical products. In order to increase workflow and improve
          efficiency, this form is to be updated to add and edit fields so that
          the team can get better information to process regarding each
          complaint.
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
          The future process remains the same for the PDF version of this form.
          However, due to the iBPM application beginning to phase of out
          development, a new mobile form will have to be created in order for
          team members to fill out the form on mobile devices. To account for
          this, an interactive web form will be created in the myApplied portal
          so that team members can log into their devices and fill out the form
          electronically.
        </div>

        <div className="inner">
          <h2>Stakeholder + Impact Analysis</h2>
          <div className="grid-wrapper">
            <div className="col-4">
              <p style={center}>
                <img src={user1} />
              </p>
              <span style={{ fontWeight: '600' }}>Regulatory Affairs</span>
              <p>
                The RA team inputs and process complaints based on the
                information on the form.
              </p>
            </div>
            <div className="col-4">
              <p style={center}>
                <img src={user2} />
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
            the medium as a responsive web app/form in Phase 1 would be the most
            resource effective. We'd like to integrate with SAP backend and
            auto-populate hospital/contact/product info from CRM. A limitation
            is that we would be unable to automatically submit the form in eQMS
            in Phase 1, and thus required manual entry from the team members.
          </p>
        </div>

        <div className="inner">
          <h2>Interviews</h2>
          <p>
            <div className="grid-wrapper">
              <div className="col-4">
                <p style={center}>
                  <img src={user4} />
                </p>
                <span style={{ fontWeight: '600' }}>
                  USER 1 - Account Manager (France)
                </span>
              </div>
              <div className="col-4">
                <p style={center}>
                  <img src={user5} />
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
            processes in place to find opportunities. By interviewing field team
            members, we were able to create a flow, and a persona of the user
            who would be using this application. Afterwards, synthesizing the
            notes, we were able to create a user journey throughout the product
            complaint process.
          </p>
          <p style={center}>
            <img src={flow} />
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
                Using a remote testing session, we assigned three participants
                four different tasks to complete with a user scenario using
                desktop and mobile prototype and encouraged them to think out
                loud during the process while screensharing. At the end of the
                testing, we gathered all results and discussed the users’
                comments for iterations.
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
          <h2>Solutions</h2>
          <p>
            <img src={img000} style={{ paddingRight: '3%', maxWidth: '33%' }} />
            <img src={img001} style={{ paddingRight: '3%', maxWidth: '33%' }} />
            <img src={img002} style={{ paddingRight: '3%', maxWidth: '33%' }} />
          </p>
          <img src={img003} style={{ paddingRight: '3%', maxWidth: '33%' }} />
          <img src={img004} style={{ paddingRight: '3%', maxWidth: '33%' }} />
          <img src={img005} style={{ paddingRight: '3%', maxWidth: '33%' }} />
          <p style={{ textAlign: 'center' }}>
            ☝️ A collection of different screens in the web mobile version.
          </p>
        </div>
        <img src={pcf3} style={roundedCorners} alt="web" />
        <p style={{ textAlign: 'center' }}>Desktop version</p>
        <div className="inner">
          <h2>Takeaways</h2>
          <p>
            Currently, there is ongoing development and our design team is
            supporting the web development team by explaining our interactions,
            component refinements, and working through edge case scenarios.
          </p>
          <p>
            In future phases, we’d like the ability to integrate with eQMS
            system to streamline the complaint process without the manual e-mail
            step. Also future plans to develop a native iOS mobile application
            dedicated to functions to serve the Field Team members daily
            activities.
          </p>
          <p>
            We’d like to measure KPIs such as decrease in the rate of late
            submissions and overall quality of life improvements for field team
            members and the customer support team.
          </p>
        </div>
      </section>
    </div>

    <Tabs />
  </Layout>
)

export default PCF
