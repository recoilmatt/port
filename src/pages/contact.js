import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Generic = props => (
  <Layout>
    <Helmet>
      <title>Applied Medical</title>
      <meta name="description" content="Generic Page" />
    </Helmet>

    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>I am a designer with a passion for intuitive product experiences. <span role="img" aria-label="art">🎨</span></h1>
            </header>
            By integrating my experiences in biological sciences, healthcare, and digital marketing, I am able to apply my skills towards the design process in order to create meaningful digital products that solve problems and improve usability.

In addition to design, I also do photography for fun so if you ever need a photographer!

Feel free to connect @ recoilmatt.com. 
        </div>
    </section>

  

   
  </Layout>
 


)

export default Generic
