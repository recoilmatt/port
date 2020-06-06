import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Tabs from '../components/Tabs'

import wanderpersona from '../assets/images/wanderpersona.jpg'
import pic11 from '../assets/images/pic11.jpg'
import travel from '../assets/images/travel.jpg'
import WanderSurvey from '../assets/images/WanderSurvey.png' 
import Trips from '../assets/images/Trips.png'
import Detail from '../assets/images/Detail.png'
import Wireframe from '../assets/images/Wireframe.jpeg'

const Generic = props => (
  <Layout>
    <Helmet>
      <title>Wander</title>
      <meta name="description" content="Wander Travel Concept" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major" style={{textAlign: "center"}}>
            <h1>Wander [Travel Design Project]</h1>
          </header>
          <span className="image main">
            <img src={travel} style={{height: "200px", objectFit: "cover"}} alt="" />
          </span>

          <h2>Introduction</h2>
          <p>
            I'm an avid lover of exploring, as it introduces one to new perspectives, cultures, delcious food, and memorable experiences. In the first sprint of my UI/UX design course at UCI Extension, our class was tasked to solve a problem encountered while traveling. 
            I had recently come back from from Japan and Hong Kong and I could contribute using my personal experiences.
          </p> 
          <p>
            In order to explore a human centered design, we learned to investiage what users wanted -- we gathered in groups and listed current solutions, features, user problems, activities during travel, etc., during a brainstorming session. My focus was to create a digital product that was delightful to use as a web application for planning and mobile accesibility while traveling abroad.
          </p>
            <span className="image main">
            <img src={pic11} alt="" />
          </span>
         
      
        
          <h2>Design Prompt</h2>
          <hr />
          <p style={{textAlign: "center"}}>How can we improve the travel experience through an digital product?</p>
          
          <hr />
    
     
          
          <h2>Surveys + Interviews</h2>
          <p>
            My initial research started off with posting a quick survey on a popular travel Facebook group to gather what applications travelers used on for their journey.  
          </p>  
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',paddingBottom: '20px'}}>
          <img src={WanderSurvey} style={{borderRadius: "8px", width: "45vw"}} alt="" />
          </div>
         
           <p> 
            In addition, I interviewed two people who traveled to Asia in the previous months. These two interviews gave me insight into their personal motivations, what they would change next time, and how they traveled and planned for their trips. 
          </p>
        
          <blockquote>"I think the the most important aspect is the <strong>communication</strong> with people you’re traveling with. Especially if there is a clash in personality and interests. I've had arguments over little things."</blockquote>
          
          <blockquote>"<strong> I don't like to be restricted </strong> to an itinerary, but I'd like a better detail for lodging options and planning ahead on who’d I'd like to collaborate and visit during my stay abroad."</blockquote>
                
          <h2>Insights</h2>
          
          <p>
          These observations led me to pinpoint a few pain points that occurred throughout the travel journey.
          <br/> <br/>

          <ul>
            <li>Multiple applications are needed for planning.</li>
            <li>Too little time to visit many places.</li>
            <li>Lack of dedicated travel collaboration options is frustrating.</li>
            <li>Users struggle to engage travel partners in the planning process. </li>
            <li>Plans don't go as 100% as expected.</li>
          </ul>
          <p>
          My initial thoughts at this stage is solve two problems -- designing a feature that allows flexibility within a schedule, and the feature for peace of the mind if the trip does not go as planned.
          </p>
          </p>

          <h2>Competitive Analysis</h2>
          <p>Lets take a look at how other applications travelers use to plan out their trips and see their flows as well.</p>
         
          <h2>Opportunity</h2>
         
          <blockquote>
          We have observed that Google Docs and Sheets were <strong>not adequately meeting</strong> travel itinerary functionality. We can improve this process to allow users to collaborate in real time to create an itinerary to create an enjoyable experience at <strong>each stage</strong> of the travel journey.
          </blockquote>
          

          <h2>Persona</h2>
         <p>After collaborating with my user interviews, I crafted a user persona -- Jennifer -- the ideal traveler using Wander.</p >
         <span className="image main">
         <img src={wanderpersona} style={{borderRadius: "8px", width: "45vw"}} alt="" />
         </span>


          <h2>User Journey</h2>
          <p>A user journey map allows understand Jessica's travel routine. In this storyboard, Jennifer uses the application to plan
          out her trip to Korea.

          [user journey]
          </p>
          <h2>User Flow</h2>
          <p>[create an itinerary] -> [collaborate with travelmates] -> [find suggestions] -> [explore/reference itinerary with mobile app]
          <br/>
     
          </p>

       
          <h2>Wireframing</h2>
          <span className="image main">
          <p>In this initial sketch, a the main screen displays an event with a timeline is shown. Features included a floating action button that allows the user to add into certain events throughout the application, as well as suggestions based on the travel destination. 
          </p>
          <img src={Wireframe} style={{borderRadius: "8px"}} alt="" />
          </span>
         

          <h2>Initial Testing</h2>
          <p>I was able to prototype a mockup within Adobe XD and asked my interviewers to complete tasks such as 1. creating an itinerary, 2. creating an event, and 3. exploring a location nearby. I noted some interesting user feedback points -- 1. users wouldn't be doing a complex itinerary on a mobile application that often, and 2. adding an option to explore places could be a enticing source of inspiration for their plans. I incorporated this user feedback into my high fidelity designs. 
          </p>
          <blockquote>
            Users want that fine balance between <strong>flexibility</strong> and <strong>discovery</strong> in their travel itinerary.
          </blockquote>

         
          <h2>High Fidelity</h2>
          <span className="image main">
          <img src={Detail} alt="" />
          <img src={Trips} alt="" />
          </span>
         
          <br/> 
          <h2>Final Thoughts</h2>
          <p>I would like to
          spend more time on researching features and allowing user testing on
          the iterations on the prototype. This would allow me to develop
          different scenarios in which a user would use Wander in their travel
          process. In future iterations, I would like to practice my interaction
          UI design skills using Adobe After Effects.
          </p>

        </div>
      </section>
    </div>
    <Tabs />
  </Layout>
 


)

export default Generic
