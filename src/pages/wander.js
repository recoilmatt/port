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
            <h1>Wander [Travel Design Project]</h1>
          </header>
          <span className="image main">
            <img src={travel} style={{height: "200px", objectFit: "cover"}} alt="" />
          </span>

          <h2>Introduction <span role="img" aria-label="intro">🛫</span></h2>
          <p>
            New perspectives, different cultures, delicious food, and memorable experiences. These are the reasons why taking the time to travel refreshes and excites me. In the first sprint of my UI/UX design course at UCI Extension, our class was tasked to solve a problem encountered while traveling. 
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
          My initial research started off with posting a quick survey on a travel Facebook group to gather what applications travelers used on for their journey.  
          </p>  
          <p>
            Google Sheets / Docs - 177
            Google Maps - 78
            Notepad - 27
            MS Word / Excel - 15
            I don't planned - 15
            Apple Notes - 4
            TripIt - 3
            Wanderlog - 2
            Evernote - 1
          </p>       
          <p> 
            In addition, I interviewed two people who traveled to Asia in the previous months. These two interviews gave me insight into their personal motivations, what they would change next time, and how they traveled and planned for their trips. 
          </p>
        
          <blockquote>"I think the the most important aspect is the <strong>communication</strong> with people you’re traveling with. Especially if there is a clash in personality and interests. I've had arguments over little things."</blockquote>
          
                    
          <h2>Insights <span role="img" aria-label="insights">💡</span></h2>
          
          <p>
          Through my interviews, this led me to pinpoint a couple of pain points that occurred throughout the travel journey.
          <br/> <br/>

          <ul>
            <li>Users need multiple applications and different platforms for planning.</li>
            <li>There's too little time to visit many places on the schedule.</li>
            <li>Lack of dedicated travel collaboration options is frustrating.</li>
            <li>Users struggle to engage travel partners of choices in the planning process. </li>
            <li>Travel plans don't go as 100% as expected.</li>
          </ul>
          <p>
            At this stage, my initial thoughts were to solve two problems -- designing a feature that allows flexibility within a schedule, and the feature for peace of the mind if the trip does not go as planned.
          </p>
          </p>

          <h2>Competitive Analysis</h2>
          <p>Lets take a look at how other applications travelers use to plan out their trips and see their flows as well.

            I looked into applications such as Trip Advisor, TripIt, and Google Docs.

            Pictures of the flows....


          </p>
         
          <h2>Opportunity <span role="img" aria-label="opportunity">🌟</span></h2>
         
          <blockquote>
          We have observed that Google Docs and Sheets were <strong>not adequately meeting</strong> travel itinerary functionality. We can improve this process to allow users to collaborate in real time to create an itinerary to create an enjoyable experience at <strong>each stage</strong> of the travel journey.
          </blockquote>
          

          <h2>Persona <span role="img" aria-label="persona">🙋‍♀️</span></h2>
         <p>After collaborating with my user interviews, I crafted a user persona -- Jennifer -- the ideal traveler using Wander.</p >
         <div className="col-12">
         <span className="image main"></span>
         <img src={wanderpersona} style={{display:"inlineblock", borderRadius: "8px", maxHeight: "100%", width: "100%"}} alt="" />
         </div>
         
          <h2>Wireframing</h2>
          <span className="image main">
          <p>In this initial sketch, the main screen displays an event with a timeline is shown. Features included a floating action button that allows the user to add into certain events throughout the application, as well as suggestions based on the travel destination. 
          </p>
          <img src={Wireframe} style={{borderRadius: "8px"}} alt="" />
          </span>
         

          <h2>Initial Testing <span role="img" aria-label="persona">🕹️</span></h2>
          <p>In the initial prototype, I asked users to complete a flow such as creating an itinerary, creating an event, and exploring a landmark nearby. I noted some down interesting user feedback points -- 1. users would prefer to plan a complex itinerary on desktop, and 2. adding an method to explore places could be source of inspiration for their plans. I incorporated this user feedback into my high fidelity designs. 
          </p>
          <blockquote>
            Users want that fine balance between <strong>flexibility</strong>, <strong>reassurance</strong>, and <strong>discovery</strong> in their travel itinerary.
          </blockquote>

          <h2>User Flow <span role="img" aria-label="persona">🌊</span></h2>
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
