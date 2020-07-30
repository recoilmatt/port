import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import pic11 from '../assets/images/pic11.jpg'
import Tabs from '../components/Tabs'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Epinex</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Epinex Diagnostics</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <section class="overview">
                    <h3>Introduction</h3> 
                    <p>Epinex Diagnostics Inc. is a biomedical company located in Tustin, California focused in developing rapid point-of- care kits for diabetes management. In this project, I assisted the digital marketing manager through marketing research and presentation towards the board of directors in order to fund a potential digital health application.</p>
                    <p>Process Market research consisted of finding percentage data of the potential of digital health applications in the current mobile application ecosystem. Overall, the research indicated that the potential for a digital health applications is rapidly expanding and shows great potential in return on investment. We had to address who would be the main users of the application. User segmentation was split into both the users and the subscribers (doctors and patients). A competitive analysis was performed on three similar competitor applications. We were able to gather the strengths, features, and weaknesses of the application and created a SWOT analysis for the ZocDoc business model. </p>
                    <p>Results We delivered the pitch for the digital health application. The problem statement is that the process of finding doctors within criteria is slow and inefficient. The product concept is an application that would allow users to match with providers as a form of telemedicine / appointment scheduling. Features were outlined that would be prominent in this application that would fill the gap in the problems in current applications. In addition, a simple financial model was also calculated with a low adoption rate.
                    </p>
                    </section>
                    
                
                      </div>

                
                
                
            </section>
        </div>
        <Tabs />
    </Layout>
)

export default Generic