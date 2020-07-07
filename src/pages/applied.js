import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Tabs from '../components/Tabs'
import TMD from '../assets/images/TMD.jpg'
import Comm from '../assets/images/Comm.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Applied</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                  
                    <span className="image main"><img style={{width: "30vh"}} src="https://www.appliedmedical.com/Content/IMG/Logos/Logo_AppliedMedical_Med.png" alt="" /></span>
                    <section class="overview">
                    <p>In my experience at Applied Medical, we've worked in various enterprise applications across multiple mediums -- web, mobile, and desktop.</p>
                    
            <div className="grid-wrapper">
            <div className="col-12" style={{display:"flex", alignItems: "center"}}>
          
       
             </div>

            </div>
                    <p>Team Member Development -- a web and mobile application for performance reviews and goal tracking.
                    <img src={TMD} style={{marginBottom:"24px",boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)", display:"block", margin:"auto",borderRadius: "8px", maxWidth: "100%", maxHeight: "50vh"}}alt="" />
                    </p>
                    <p>Communication Center - a notification tool for important actions and notifications in the Applied Medical system.</p>
                    <img src={Comm} style={{marginBottom:"24px",boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)", display:"block", margin:"auto",borderRadius: "8px", maxWidth: "100%", maxHeight: "50vh"}}alt="" />
                    <p>myApplied - a central destination to access Applied team member resources and applications.</p>
                    <p>CRM Redesign - redesign of an iOS application for field team members and sales.</p>
                   
                    <p>To Do List - a tool for Office 365 integration with enterprise applications.</p>
                    <p>System Status Tracker - tool for determining uptimes for various applications and production systems.</p>
                    </section>
                    
                
                      </div>

                
                
                
            </section>
        </div>
        <Tabs />
    </Layout>
)

export default Generic