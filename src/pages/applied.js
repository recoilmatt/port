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
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <section class="overview">
                    In my experience at Applied Medical, we've worked in various applications across multiple mediums -- web, mobile, and desktop.
                    <br/>
                    Team Member Development -- a web and mobile application for performance reviews and goal tracking.
                    <br/>
                    myApplied - a central destination to access Applied team member resources and applications.
                    <br/>
                    CRM Redesign - redesign of an iOS application for field team members and sales.
                    </section>
                    
                
                      </div>

                
                
                
            </section>
        </div>
        <Tabs />
    </Layout>
)

export default Generic