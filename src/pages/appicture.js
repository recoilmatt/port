import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Appicture</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner" style={{width: `50%`}}>
                    <header className="major">
                        <h1>Generic</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>
                       
                        Team:
                        Individual
                        <br />
                        Role:
                        UX / Visual Designer
                        <br />
                        Tools:
                        Adobe XD / Illustrator / Photoshop
                        <br />
                    </p>
                    <section class="overview">
                    <p><h1>Overview</h1>
                    Appicture is a passion project that incorporates interests in trending social media and photography. This is designed for users to search from an aggregation of popular photography locations and curated posts. The pictures presented would be collected from user data, top rated hashtags, and established photography hubs.
                    </p>
                    <h1>User Research</h1>
                    <p>I interviewed two participants: a photographer and a blogger, and asked them about what frustrations they have with their creative process. From my chats, I noticed they have periods of creative blocks in which they would like to create content, but they aren't finding the sources of inspiration. Like illustration and drawing, the concept of photography and content creation is the essentially the same. You need to gather inspiration from various sources in order become a better photographer and create visual content to your own styles of choice.
                    </p>
                </section>

                <section>
                  <p><h1>Problem</h1>
                    Users need a tool to search and filter for targeted visual inspiration, as well as bookmark them for future reference. After arriving a core problem, I created a simple navigation map for the application. 
                    This allowed me to narrow down five main features that I believed would be useful to the user. In addition, this was useful because it allowed me to account for how many screens needed to be designed and where each would link up to within the prototype.
                  </p>
                </section>

                      </div>

                
                
                
            </section>
        </div>

    </Layout>
)

export default Generic