import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Tabs from '../components/Tabs'

import wanderpersona from '../assets/images/wanderpersona.jpg'
import travelbrainstorm from '../assets/images/travelbrainstorm.jpeg'
import travel from '../assets/images/travel.jpg'
import WanderFlow from '../assets/images/WanderFlow.png' 
import Trips from '../assets/images/Trips.png'
import Detail from '../assets/images/Detail.png'
import Wireframe from '../assets/images/Wireframe.jpeg'
import Explore from '../assets/images/Explore.jpg'

const Generic = props => (
  <Layout>
    <Helmet>
      <title>Wander</title>
      <meta name="description" content="Wander Travel Concept" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Better [Health and Wellness]</h1>
          </header>
          <span className="image main">
            <img src={travel} style={{height: "200px", objectFit: "cover"}} alt="" />
          </span>

          <h2>Introduction <span role="img" aria-label="intro">🛫</span></h2>
          <p>
          Sedentary lifestyles lead the average person to develop a variety of pain points. Developing an app that can provide users with proper education to preventative and corrective measures to help them find a Better Balance for their health and wellness. We will ensure that the modern day office worker is alleviated of pain and more health conscious. 
          </p> 

          <p>
            In order to explore human centered design, we investigated what users wanted -- we gathered in groups and listed what were the current solutions, features, user problems, activities during travel, etc., during a brainstorming session. My focus was creating a digital product that was delightful to use as a web application for planning with mobile accessibility while traveling abroad.
          </p>

          <span className="image main">
            <img src={travelbrainstorm} style={{height: "350px", objectFit: "cover"}} alt="" />
          </span>
         
      
        
          <h2>Design Prompt</h2>
          <blockquote>How can we improve the travel experience through an digital product?</blockquote>
          
    
           <h2>Surveys + Interviews <span role="img" aria-label="survey">📝</span></h2>
     
          <p>
          Over 80% of our participants have sedentary jobs - which means there is a lot of prolonged seating and screen time.
          99% of those participants have expressed that they have developed multiple muscular pain points and/or suffer from eye strain and headaches.
          Over 45% of our participants are aware the deleterious effects of having an inactive lifestyle while 41% are unsure due to lack of education on these issues
          Over 65% of our participants also express time is a big constraint as to why they are not improving their wellness
          </p>
        
          <blockquote>"I think the the most important aspect is the <strong>communication</strong> with people you’re traveling with. Especially if there is a clash in personality and interests. I've had arguments over little things." - Kathleen </blockquote>
          
                    
          <h2>Insights <span role="img" aria-label="insights">💡</span></h2>
          
          <p>
          Through my interviews, I encountered two types of personalities -- users who are quite detailed oriented to the time and place, and travelers who prefer to go with the flow. These discussions led me to pinpoint a couple of pain points that occurred commonly throughout the travel journey.
          </p>

          <ul>
            <li>Users need multiple applications and different platforms for planning.</li>
            <li>There's too little time to visit many places on the schedule.</li>
            <li>Lack of dedicated travel collaboration options is frustrating.</li>
            <li>Users struggle to engage travel partners of choices in the planning process. </li>
            <li>Travel plans don't go as 100% as expected.</li>
          </ul>

          <p>
            At this stage, my initial thoughts were to solve the problems for two sets of users -- thus I had to think of a feature that allows flexibility within a schedule, but also assisting in peace of the mind if the trip does not go as planned.
          </p>
          

          <h2>Competitive Analysis <span role="img" aria-label="insights">📈</span></h2>
          <p>

          I conducted a competitive analysis between applications that users had suggested -- Google Docs, Google Maps, TripAdvisor.

          Google Docs - strengths: 
         
          </p>
         
          <h2>Opportunity <span role="img" aria-label="opportunity">🌟</span></h2>
         Thus, I was able to focus in a problem with travel journey and decided to tackle this problem...
          <blockquote>
        
We believe that people with sedentary jobs experience deleterious effects to their health from prolonged sitting and bad posture. This leads to chronic pain that interferes with daily work, which could have been avoided with preventative measures.

We may solve this problem by customizing and gammifying users’ experiences based on the data collected from a strong onboarding and activity feedback, providing targeted plans/routines, and customizable notifications and alarms.

We will know we have succeeded when we see an increase in new users and user retention, and when the application will receive positive reviews.

          </blockquote>
          

        <h2>Persona <span role="img" aria-label="persona">🙋‍♀️</span></h2>
         <p>After collaborating with my user interviews, I crafted a user persona -- Jennifer -- the ideal traveler using Wander.
         <div className="col-12">
         <span className="image main"></span>
         <img src={wanderpersona} style={{display:"block", borderRadius: "8px", maxHeight: "100%", width: "100%"}} alt="" />
         </div>
         </p>
         
          <h2>Wireframing <span role="img" aria-label="wireframing">✏️</span></h2>
        
          <p>In this initial sketch, the main screen displays an event with a timeline is shown. Features included a floating action button that allows the user to add into certain events throughout the application, as well as suggestions based on the travel destination. 
          
          <span className="image main">
          <img src={Wireframe} style={{borderRadius: "8px"}} alt="" />
          </span>
          </p>
         

          <h2>Initial Testing <span role="img" aria-label="persona">🕹️</span></h2>
          <p>In the initial prototype, I asked users to complete a flow such as creating an itinerary, creating an event, and exploring a landmark nearby. I noted some down interesting user feedback points -- 1. users would prefer to plan a complex itinerary on desktop, and 2. adding an method to explore places could be source of inspiration for their plans. I incorporated this user feedback into my high fidelity designs. 
          </p>
          <blockquote>
            Users want that fine balance between <strong>flexibility</strong>, <strong>reassurance</strong>, and <strong>discovery</strong> in their travel itinerary.
          </blockquote>

          <h2>Task Flow <span role="img" aria-label="persona">🌊</span></h2>
        <div className="col-12">
        <span className="image main"></span>
        <img src={WanderFlow} style={{display:"inlineblock", margin: "auto", borderRadius: "8px", maxHeight: "100%", width: "100%"}} alt="" />
        </div>
         
          <p>After usability testing, I revised the flow to include the three pillars of traveling that users needed: <strong>flexibility, reassurance, and discovery</strong>. Users would be begin through gathering inspiration from the Explore section and move into the Trip itinerary planning. Collaboration is inviting travelmates into the itinerary and allowing real-time cross function and drag-and-drop capabilities, thus the itinerary can be built as a team.</p>
        
         
          <h2>Hi-Fidelty and Interactions <span role="img" aria-label="persona">🎨</span></h2>


    
    {/*Explore*/}

    <div className="grid-wrapper">
    <div className="col-6" style={{display: "flex", alignItems: "center"}}>
    <div>
    <h3>Explore</h3>
    <p>This user would be presented with an exploration screen with stories, blogs, and resources to begin the journey. This is the discovery phase of the travel process.</p>
    </div>

    </div>
    <div className="col-6">
    <img src={Explore} style={{maxWidth: "100%"}}alt="" />
    </div>
    </div>

    {/*Explore*/}

    <div className="grid-wrapper">
    <div className="col-6">
    <img src={Explore} style={{maxWidth: "100%"}}alt="" />
    </div>
    <div className="col-6" style={{display: "flex", alignItems: "center"}}>
    <div>
    <h3>Trips</h3>
    <p>After creating a trip, the traveler begins to add travelmates and events to the itinerary. The ability for multiple people to interact at the same time allows collaboration when during the planning process. </p>
    </div>
 
    </div>
   
    </div>


  <div className="grid-wrapper">
    
    <div className="col-6">
    <h3>Near Me</h3>
    <p>After the user adds an event, it appears on this main screen here. In my mind, I was planning something you could drag around blocks that flex around the time schedule. The blocks would be added by the floating action button on the bottom right hand corner.</p>
    </div>

    <div className="col-6">
    <img src={Detail} style={{maxWidth: "100%"}}alt="" />
    </div>

  </div>
  

          <span className="image main">
          <img src={Detail} alt="" />
          <img src={Trips} alt="" />
          </span>
         
          <br/> 
          <h2>Final Thoughts <span role="img" aria-label="persona">💭</span></h2>
          <p>
          </p>

        </div>
      </section>
    </div>
    <Tabs />
  </Layout>
 


)

export default Generic
