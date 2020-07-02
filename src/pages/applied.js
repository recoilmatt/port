import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import pic11 from '../assets/images/pic11.jpg'
import Tabs from '../components/Tabs'


const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Applied</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Applied Medical</h1>
                    </header>
                    <span className="image main"><img style={{width: "50vh"}} src="https://www.appliedmedical.com/Content/IMG/Logos/Logo_AppliedMedical_Med.png" alt="" /></span>
                    <section class="overview">
                    <p>In my experience at Applied Medical, we've worked in various enterprise applications across multiple mediums -- web, mobile, and desktop.</p>
                    
            <div className="grid-wrapper">
            <div className="col-12" style={{display:"flex", alignItems: "center"}}>
          
       
             </div>

            </div>
                    <p>Team Member Development -- a web and mobile application for performance reviews and goal tracking. </p>
                    <p>myApplied - a central destination to access Applied team member resources and applications.</p>
                    <p>CRM Redesign - redesign of an iOS application for field team members and sales.</p>
                    <p>Communication Center - a tool to reduce the dependecy of Outlook emails</p>
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