import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import tax from '../assets/images/tax.png'

const Generic = props => (
  <Layout>
    <Helmet>
      <title>Applied Medical</title>
      <meta name="description" content="Generic Page" />
    </Helmet>

    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <h1>Misc. Projects</h1>
            </header>
            
          <div className="grid-wrapper">
            <div className="col-12" style={{display:"flex", alignItems: "center"}}>
          
            <img src={tax} style={{marginBottom:"24px",boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)", display:"block", margin:"auto",borderRadius: "8px", maxWidth: "100%", maxHeight: "50vh"}}alt="" />
           

            <a href="https://github.com/recoilmatt/klassociates"><div className="button">github</div></a>
            <a href="https://klassociates.netlify.app/"><div className="button">live</div></a>
       
        </div>
        </div>
        </div>
    </section>

  

   
  </Layout>
 


)

export default Generic
