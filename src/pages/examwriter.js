import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Overview from '../assets/images/Overview.png'
import Goals from '../assets/images/Goals.png'
import MacGlasses from '../assets/images/MacGlasses.png'

const Generic = props => (
  <Layout>
    <Helmet>
      <title>ExamWriter [EHR Redesign]</title>
      <meta name="description" content="ExamWriter EHR Optometry Redesign" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner" style={{width:"90%"}}>
          <header className="major">
            <h1>ExamWriter [Redesign Concept]</h1>
          </header>
          <span className="image main">
          <img src={Overview}/>       
          </span>
          <span className="image main">
          <img src={Goals}/>       
          </span>
          <span className="image main">
          <img src={MacGlasses}/>       
          </span>
          </div>
      </section>
      </div>

  

   
  </Layout>
 


)

export default Generic
