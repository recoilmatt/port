import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Tabs from '../components/Tabs'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

//Images

import pcf2 from '../assets/images/pcf/pcf2.png'
import pcf3 from '../assets/images/pcf/pcf3.png'
import img000 from '../assets/images/pcf/000.png'
import img001 from '../assets/images/pcf/001.png'
import img002 from '../assets/images/pcf/002.png'
import img003 from '../assets/images/pcf/003.png'
import img004 from '../assets/images/pcf/004.png'
import img005 from '../assets/images/pcf/005.png'

const roundedCorners = {
  display: 'block',
  margin: 'auto',
  borderRadius: '4px',
  maxWidth: '100%',
  maxHeight: '100vh',
  marginBottom: '2%',
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
            How might we create a mobile or web experience that would allow our
            Field Team members and Customer Satisfaction Team to gather and
            report the most accurate and prompt feedback from our customers?
          </blockquote>
        </div>
        <div className="inner">
          <h2>Solutions</h2>
          <img src={img000} style={{ maxWidth: '33%' }} />
          <img src={img001} style={{ maxWidth: '33%' }} />
          <img src={img002} style={{ maxWidth: '33%' }} />
          <img src={img003} style={{ maxWidth: '33%' }} />
          <img src={img004} style={{ maxWidth: '33%' }} />
          <img src={img005} style={{ maxWidth: '33%' }} />
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
