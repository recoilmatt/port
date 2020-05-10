import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Tabs from '../components/Tabs'

import pic11 from '../assets/images/pic11.jpg'
import Trips from '../assets/images/Trips.png'
import Detail from '../assets/images/Detail.png'
import Wireframe from '../assets/images/Wireframe.jpeg'

const Generic = props => (
  <Layout>
    <Helmet>
      <title>Applied Medical</title>
      <meta name="description" content="Generic Page" />
    </Helmet>

    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Wander [Travel Design Project]</h1>
          </header>
          <span className="image main">
            <img src={pic11} alt="" />
          </span>
          My design process: Research: Problem Statement/Goals,
          Constraints/Assumptions
          <br />
          Understanding Users: User Interviews, Competitive Review
          <br />
          Setting the Stage: Requirements, User Flow, User Journey
          <br />
          Design: Wireframing, Branding
          <br />
          Final Thoughts: Improvements
          <br />
          <h2>Design Prompt</h2>
          <hr />
          <p style={{textAlign: "center"}}>How can we improve the travel experience through an digital product?</p>
          <hr />
          <h2>Introduction</h2>
          <p>
            In the first sprint of my design course at UCI Extension, our cohort
            was tasked to solve a problem for users encountered while traveling.
            I had recently come back from my travels from Asia and I could
            contribute using my personal experience. The main challenge was
            thinking of a problem that could be solved using a mobile
            application, then create a minimum viable product, and finalize a
            presentation pitch for the class. In order to find out what users
            wanted, we gathered in small groups and listed current application
            solutions, features, users problems, activities people do, etc.
            during a quick brainstorming session.
            <span className="image main">
            <img src={pic11} alt="" />
          </span>
          
          </p>
          <h2>Surveys + Interviews</h2>
          <p>
            Using Google Forms, I created a survey to collect traveling habits
            and pain points throughout my design cohort. In addition, I
            interviewed two users: Kathleen and Patrick, in which they had just
            traveled abroad to Asia in the previous few months. These two
            interviews gave further insight into their personal motivations,
            what they would change next time, and how they traveled and planned
            for their trips.
          </p>
          <hr/>
          "I think the the most important aspect is the communication with people you’re traveling with. Especially if there is a clash in personality and interests. I've had arguments over little things."
          <hr/>
          "I'd like a better detail for lodging options and planning ahead on who’d I'd like to collaborate and visit during my stay abroad."
          <hr/>
          <h2>Pain Points</h2>
          <p>
          A few pain points that I was able to consider after interviewing and survey results...
          <br/> <br/>

          <ul>
            <li>Multiple applications needed for planning</li>
            <li>Lack of collaboration options is frustrating</li>
            <li>Friends/family conflicts with plans</li>
          </ul>
   

          </p>
         
          <h2>Problem Statement</h2>
          <hr />
          We have observed that Google Docs and TripAdvisor were not meeting these travel itinerary goals. We can improve this process to allow users to collaborate in real time to create an enjoyable, yet flexible itinerary at each stage of the travel journey.
          <hr />

          <h2>Persona</h2>
         <p>Personas and Empathy mapping allows the designers to consider how other people are thinking
          and feeling, as well as have a reference that the needs are aligned to the user. I created a map for an ideal user Jessica on what she
          would say, do, think and feel. Through multiple interviews, I was able to
          create a persona of a user of the Wander application. 
          </p>

          <h2>User Journey</h2>
          <p>The benefit of this exercise allows the designer
          to understand the users’ routine in situation or average day and how
          technology can be applied in certain situations in order to solve the
          problem at hand. In this storyboard, Jennifer uses application to plan
          out her trip to Hong Kong. We have the situation before, during, and
          after in which she uses the application to assist her along her
          journey. 
          </p>
          <h2>User Flow</h2>
          <p>[user flow image]
          <br/>
          My focus is to allow the user to plan out their
          trips in a presentable format, but also for allows sharing and
          collaboration, and suggesting inputs and working together on an
          itinerary.
          </p>

          <h2>Competitive Analysis</h2>
          [Competitive Analysis]
          
          <h2>Wireframing</h2>
          <span className="image main">
          <img src={Wireframe} style={{borderRadius: "8px"}} alt="" />
          </span>
          <p>In this initial wireframe sketch, I was considering a mobile first approach that allowed the user to switch between travel events. 
            Features in this sketch included a floating action button that allowed the user to add into certain events throughout the application.
            In addition, the user would be able to create a detailed event through mobile as well. 
          </p>
         
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
