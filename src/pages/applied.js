import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Style from '../assets/css/style.css'
import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Applied Medical</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Applied Medical</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>
                    At Applied Medical, I contributed as a designer on various internal applications and initiatives.
                    <br />
                    MyApplied - a web application portal that allowed users to be able to view employee directory, dashboard, and annoucements.
                    <br/>
                    Team Member Development - performance reviews. 
                    </p>
                    

                      </div>

                
                
                
            </section>
        </div>

    </Layout>
)

export default Generic