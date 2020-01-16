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
                    WANDER [Travel Design Project]

My design process is listed below:

    Research: Problem Statement/Goals, Constraints/Assumptions

    Understanding Users: User Interviews, Competitive Review

    Setting the Stage: Requirements, User Flow, User Journey

    Design: Wireframes, Interactions, Feedback Iterations, Mockups

    Final Thoughts: Future Iterations, Improvements

ROLE

Research, competitive analysis, sketching, prototyping, user testing

TOOLS

Adobe XD, Photoshop, Invision

Design Question

How can we improve the travel experience through an digital product?
Introduction

In the first sprint of my design course at UCI Extension, I was tasked to solve a problem for users encounter while traveling. Fortunately, I had recently come back from my travels from Asia and I could contribute using my personal experience. The main challenge was thinking of a problem that could be solved using a mobile application, then create a minimum viable product, and finalize a presentation pitch for the class. Here is a slide deck for presentation. In order to find out what users wanted, we gathered in small groups and listed current application solutions, features, users problems, activities people do, etc. during a quick brainstorming session. 
Design has taught me a new found appreciation for post-it notes.

Design has taught me a new found appreciation for post-it notes.
Research

Interviews and Surveys
Bad UX Survey.png

To get a better understanding of the problem and travel experience, I created a survey using Google Forms and posted it on my Facebook and cohort group. I managed to gather responses on habits while traveling and questions such as what they enjoyed about current applications and what they disliked about them as well. In addition, I interviewed two people who would help me answer more specific questions after bribing them with some that sweet, sweet 7Leaves Thai tea (just an small appreciation for their time I promise!). I would probably sit around at a boba shop and interview people for better spread of data, but this will have to do suffice for this exercise.

What I learned from this research was that a common pain point encountered was the aspect of collaboration with others and pre-planning hindered the excitement of the travel experience. I focused my design solution towards remedying that problem. The two people I interviewed were chosen because they had previously traveled this past year. I thanked them for their times and they thanked me for the boba tea and I went along typing these notes into a case study. 

Problem Statement: Coordinating travel plans with conflicting personalities can be troublesome and plans can be more flexible with a clean interface and local suggestions. We have observed that Google Docs and TripAdvisor were not meeting these travel itinerary goals. How might we improve on this is to create a process that allows users to collaborate in real time with visual suggestions to create an enjoyable, yet flexible itinerary.

Insight: The people that I interviewed said if they could travel alone, they would. Why? I thought it was because others were holding them back on their own goals and what they actually wanted to do.

Concept: Focus on the collaboration process and compromise with others.

Execution: There are three solutions suggested to solve these user problems.

    A draggable mood board so that individuals or the users can be flexible with their ideas. 

    A plan B option that can be added onto the schedule if the first plan did not work out while they are traveling. 

    Included would be time suggestions for landmarks and destinations to visit to build a flexible schedule. 

Message: “Organize all your travel destinations on this platform.”

Objective: I wish to accomplish a design that focuses on the planning itinerary aspect that allows an individual to collaborate with others while traveling and quick alternatives nearby the user while they are traveling.

Empathy Mapping / Persona

Empathy Mapping helps designers consider how other people are thinking and feeling. I created a map for an ideal user Jennifer on what she would say, do, think and feel in order to align ourselves with the product users. Through multiple nterviews and revisions, I was able to create a persona of a typical user of the Wander application.
Empathy Map – 1.png
Revised.png
User Journey

The next section was to develop a journey for Jennifer. The benefit of this exercise allows the designer to understand the users’ routine in situation or average day and how technology can be applied in certain situations in order to solve the problem at hand. In this storyboard, Jennifer uses application to plan out her trip to Hong Kong. We have the situation before, during, and after in which she uses the application to assist her along her journey.
Chung Ha ~ Rollercoaster

Chung Ha ~ Rollercoaster
User Flow

In this exercise, I created a minimum viable product to present how to solve the problem at hand.
Flow.png

I learned that creating a user flow is the most simple point A to point B in task completion. My focus is to allow the user to plan out their trips in a presentable format, but also for allows sharing and collaboration, and suggesting inputs and working together on an itinerary. In future iterations, options such as group chat or a comment system could be implemented to the flow.
lo-fi design

I was able to sketch out what UI design of the application would look like. I drew inspiration from Google’s Material Design and Docs applications. Some other inspirations were Hopper, a ticket price tracker application that I came across.
1_0i6m_LvRsTB_f2BSimLtMQ.jpeg1_daS4gTvrlC84s1bDkOxguA.jpeg1_lhx9drYdhvnEPoc4mlD5Hg.jpeg1_V0ZSwjYwkwyR65Y4jeoWKQ.jpeg
Wireframing

The prototypes down below reflect the design goals and focus on the reasoning, app flow, components, and features. 
Itiniterary.png

Trip Selection

The menu selection has three pages: trips / explore / and notifications.

A menu navigation allows three simple functions of Wander and to navigate throughout each different page.

The floating action button allows the user to select from a variety of different options to add to their intinerary.
Add Day.png

Itinerary Planning

After the user adds an event, it appears on this main screen here. In my mind, I was planning something you could drag around blocks that flex around the time schedule. The blocks would be added by the floating action button on the bottom right hand corner.
Add New Event.png

Add an event

A simple screen to add images and event names and notes of the user event entry. Notes could be added for the user to remind them of places to stop by or events that they want to do.
High Fidelity Iterations
Final Presentation@3x.png
Final Thoughts

I would like to spend more time on researching features and allowing user testing on the iterations on the prototype. This would allow me to develop different scenarios in which a user would use Wander in their travel process.

In future iterations, I would like to practice my interaction UI design skills using Adobe After Effects.
                    

                      </div>

                
                
                
            </section>
        </div>

    </Layout>
)

export default Generic