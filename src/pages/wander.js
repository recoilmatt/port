import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Tabs from '../components/Tabs'

import wanderpersona from '../assets/images/wander/wanderpersona.jpg'
import travelbrainstorm from '../assets/images/wander/travelbrainstorm.jpeg'
import travel from '../assets/images/wander/travel.jpg'
import WanderFlow from '../assets/images/wander/WanderFlow.png'
import Detail from '../assets/images/wander/Detail.png'
import Wireframe from '../assets/images/wander/Wireframe.jpeg'
import Explore from '../assets/images/wander/Explore.png'
import Home from '../assets/images/wander/Home.png'
import NearMe from '../assets/images/wander/NearMe.png'
import Wander from '../assets/images/wander/wander.png'
import Info from '../assets/images/wander/Info.png'

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
            <img src={Wander} style={{ objectFit: 'cover' }} alt="" />
          </span>

          <h2>
            Introduction
            <span role="img" aria-label="intro">
              🛫
            </span>
          </h2>
          <p>
            New perspectives, different cultures, delicious food, and memorable
            experiences. The feeling of wandering in an unfamiliar place,
            getting (somewhat) lost, and finally finding where you've been
            wanting to see for the longest time. These are thoughts that run
            past a traveler's mind each time they explore a new place. In my
            first sprint of my design course at UC Irvine Extension, our cohort
            was tasked to solve a problem encountered while traveling.
          </p>

          <p>
            In order to explore human centered design, we investigated what
            users wanted -- our class had all experienced the ups and downs of
            the travel process. We gathered in groups and listed what were the
            current solutions, features, user problems, activities during
            travel, during a brainstorming session. My design goal was to solve
            a problem with a a digital product that is simple to use, flexible,
            and beautiful.
          </p>

          <span className="image main">
            <img
              src={travelbrainstorm}
              style={{ height: '350px', objectFit: 'cover' }}
              alt=""
            />
          </span>

          <h2>Design Prompt</h2>
          <blockquote>
            How can we improve the travel experience through a digital product?
          </blockquote>

          <span className="image main">
            <img
              src={travel}
              style={{ height: '150px', objectFit: 'cover' }}
              alt=""
            />
          </span>

          <h2>
            Discovery + Research
            <span role="img" aria-label="survey">
              📝
            </span>
          </h2>
          <p>
            I started my initial research by surveying on a popular travel group
            to gather what apps travelers have been currently using for their
            journey.
          </p>
          <p>
            Google Sheets / Docs - 177 <br />
            Google Maps - 78 <br />
            Notepad - 27 <br />
            MS Word / Excel - 15 <br />
            I don't plan - 15 <br />
            Apple Notes - 4 <br />
            TripIt - 3 <br />
            Wanderlog - 2 <br />
            Evernote - 1<br />
          </p>
          <p>
            In addition, I conducted four user interviews who had traveled
            within the previous months. These interviews gave me insight into
            how they booked their accommodations, their personal motivations,
            what they would change next time, pain points, and how they traveled
            and planned for their trips.
          </p>

          <blockquote>
            "I think the the most important aspect is the
            <strong> communication</strong> with people you’re traveling with.
            Especially if there is a clash in personality and interests. I've
            had arguments over little things." - Kathleen
          </blockquote>

          <h2>
            Insights
            <span role="img" aria-label="insights">
              💡
            </span>
          </h2>

          <p>
            Through my interviews, I encountered two types of personalities --
            users who are quite detailed oriented to the time and place, and
            travelers who prefer to go with the flow. These discussions led me
            to narrow down a few pain points that occurred commonly throughout
            the travel journey.
          </p>

          <ul>
            <li>
              Users need multiple applications and different platforms for
              planning (4/4)
            </li>
            <li>
              There's too little time to visit many places on the schedule.
              (3/4)
            </li>
            <li>
              Lack of dedicated travel collaboration options is frustrating.
              (2/4)
            </li>
            <li>
              Users struggle to engage travel partners of choices in the
              planning process. (1/4)
            </li>
            <li>Travel plans don't go as 100% as expected. (4/4)</li>
          </ul>

          <p>
            At this stage, my initial thoughts were to solve the problems for
            two sets of users -- I had to narrow down on features that allow
            flexibility within a schedule, but also assists in peace of the mind
            if the trip does not go as planned.
          </p>

          <h2>
            Competitive Audit
            <span role="img" aria-label="insights">
              📈
            </span>
          </h2>
          <p>
            I conducted a competitive audit between applications that users had
            suggested.
            <p>
              <ul>
                <br />
                <li>
                  <strong>Google Docs/Sheets</strong>
                  <br />
                  The core strength lies in manual data entry, real time
                  collaboration, and the ability to share documents. While it is
                  free and general purpose, we have to mention that it is not
                  customized to travel, with no suggestions, and you need to
                  create your own templates.
                </li>
                <br />
                <li>
                  <strong>Google Trips</strong>
                  <br />
                  Integration with your booking information from emails, nearby
                  things to do, reservations, offline mode. However, weaknesses
                  with limited personalization, no events finding.
                </li>
                <br />
                <li>
                  <strong>TripAdvisor</strong>
                  <br />
                  Allows users to find accomodations, food, and sights based on
                  location. Definitely for those travelers who live off reviews
                  because its the one of the popular travel websites out there.
                </li>
                <br />
                <li>
                  <strong>TripIt</strong>
                  <br />
                  The interface was a bit dated and the user experience could be
                  improved in finding what you wanted. It does contain
                  everything if you are willing to place into every text field,
                  but the integration and automation could put off users who do
                  want to skip those steps.
                </li>
                <br />
                <li>
                  <strong>WanderLog</strong>
                  <br />
                  Main strength is within its collaboration with other users,
                  guide and planning modes, sharing features, map features, auto
                  import. However, it is not designed for travelers who like
                  pre-made itineraries.
                </li>
              </ul>
            </p>
          </p>

          <h2>
            Opportunity &nbsp;
            <span role="img" aria-label="opportunity">
              🌟
            </span>
          </h2>
          <p>
            Analyzing my research results, I was able to focus on a specific
            problem within travel journey...
          </p>
          <blockquote>
            We have observed that Google Docs and Sheets were
            <strong> not adequately meeting the travel itinerary </strong>
            functionality. We can improve this process by allowing users to
            collaborate in real time to create an itinerary to create an
            experience at <strong>every stage</strong> of the travel journey.
          </blockquote>

          <h2>
            Persona &nbsp;
            <span role="img" aria-label="persona">
              🙋‍♀️
            </span>
          </h2>
          <p>
            After collaborating with my user interviews, I crafted a user
            persona -- Jennifer -- the ideal Wanderer.
            <div className="col-12">
              <span className="image main"></span>
              <img
                src={wanderpersona}
                style={{
                  display: 'block',
                  borderRadius: '8px',
                  maxHeight: '100%',
                  width: '100%',
                }}
                alt=""
              />
            </div>
          </p>

          <h2>
            Wireframing &nbsp;
            <span role="img" aria-label="wireframing">
              ✏️
            </span>
          </h2>

          <p>
            In this initial sketch, I had a task flow to feature the timeline to
            organize and create events through a card structure. A floating
            action button was added to access many different features such as
            adding a new day, a suggestion, or new food spot.
            <span className="image main">
              <img src={Wireframe} style={{ borderRadius: '8px' }} alt="" />
            </span>
          </p>

          <h2>
            Initial Testing &nbsp;
            <span role="img" aria-label="persona">
              🕹️
            </span>
          </h2>
          <p>
            In the initial prototype, I asked users to complete a flow such as
            creating an itinerary, creating an event, and exploring a landmark
            nearby. I noted some down interesting user feedback points...
            <ul style={{ paddingTop: '16px' }}>
              <li>
                Users would much rather plan a complex itinerary on desktop, and
                view quick information on mobile.
              </li>
              <li>
                A feature to chat/text/voice with travelmates while planning.
                Phase II?
              </li>
              <li>
                Rework the flow to Explore as the opening to discover places as
                source of inspiration for their plans.
              </li>
              <li>
                Flight tracking and accommodation tracking needed to be
                addressed in the travel process (preplanning). Phase II?
              </li>
            </ul>
          </p>
          <blockquote>
            Users want that balance between <strong>flexibility</strong>,
            <strong> reassurance</strong>, and <strong>discovery</strong> in
            their travel itinerary.
          </blockquote>

          <h2>
            Task Flow
            <span role="img" aria-label="persona">
              🌊
            </span>
          </h2>
          <div className="col-12">
            <span className="image main"></span>
            <img
              src={WanderFlow}
              style={{
                display: 'inlineblock',
                margin: 'auto',
                borderRadius: '8px',
                maxHeight: '100%',
                width: '100%',
              }}
              alt=""
            />
          </div>

          <p>
            After usability testing, I refined the product requirements to
            include the three principles of traveling that users needed:
            <strong> flexibility, reassurance, and discovery</strong>.
            <ul style={{ paddingTop: '10px' }}>
              <li>
                Users would now begin the journey with an Explore screen to
                gather and share information.
              </li>
              <li>
                The itinerary planning stage allows users to share ideas with
                the group.
              </li>
              <li>
                The group can add/edit their ideas with the flexibility to move
                plans as the group
              </li>
              <li>Travelers can search for attractions. </li>
              <li>
                They can share and collaborate the final itinerary with other
                travelers throughout the world.
              </li>
            </ul>
          </p>

          <h2>
            Hi-Fi Mocks
            <span role="img" aria-label="persona">
              🎨
            </span>
          </h2>

          {/*Explore*/}

          <div className="grid-wrapper">
            <div
              className="col-6"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <div>
                <h3>Explore</h3>
                <p>
                  We are presented with an exploration screen with stories,
                  blogs, and resources to begin the journey. This is the
                  discovery phase of the travel process.
                </p>
              </div>
            </div>
            <div className="col-6">
              <img src={Explore} style={{ maxWidth: '100%' }} alt="" />
            </div>
          </div>

          {/*Trips*/}

          <div className="grid-wrapper">
            <div className="col-6">
              <img src={Home} style={{ maxWidth: '100%' }} alt="" />
            </div>
            <div
              className="col-6"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <div>
                <h3>Trips</h3>
                <p>
                  After creating a trip, the traveler begins to add travelmates
                  and events to the itinerary. The ability for multiple people
                  to interact at the same time allows collaboration when during
                  the planning process. The mobile interface allows wanderers to
                  keep this itinerary on the go.
                </p>
              </div>
            </div>
          </div>

          <div className="grid-wrapper">
            <div
              className="col-4"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <div>
                <h3>Near Me</h3>
                <p>
                  Near Me allows the peace of mind for the travelers to find
                  locations of interest when they are wandering a new location
                  -- new restaurants, sights, and explorations within a certain
                  area.
                </p>
              </div>
            </div>

            <div className="col-8">
              <img src={NearMe} style={{ maxWidth: '100%' }} alt="" />
            </div>
          </div>

          {/*Info*/}

          <div className="grid-wrapper">
            <div className="col-6">
              <img src={Info} style={{ maxWidth: '100%' }} alt="" />
            </div>
            <div
              className="col-6"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <div>
                <h3>Info</h3>
                <p>
                  Searching a destination displays the information and helpful
                  tips and reviews from other wanderers.
                </p>
              </div>
            </div>
          </div>

          <span className="image main">
            <img
              style={{
                maxWidth: '100%',
                borderRadius: '8px',
                boxShadow:
                  '0 5px 10px rgba(154,160,185,.25), 0 15px 40px rgba(166,173,201,.2)',
              }}
              src={Detail}
              alt=""
            />
          </span>
          <h2>
            Validation
            <span role="img" aria-label="check">
              ✅
            </span>
          </h2>
          <div>
            <p>
              Using a clickable Figma prototype, I was able to validate my
              designs with the interview group. 3/4 users expressed satisfaction
              when presented with the feature set. The users enjoyed the concept
              of a social media aspect of various travelers to share their
              itineraries in the application to provide inspiration for others.
            </p>
          </div>

          <br />
          <h2>
            Final Thoughts
            <span role="img" aria-label="persona">
              💭
            </span>
          </h2>
          <p>
            In this first project, I was presented with a two week design
            sprint. I was able to explore the design process and how to apply it
            when creating a digital project. Because of the time constraints of
            the bootcamp, I only had time to perform a glimpse of the ux
            research and validation. I took time after my course to improve my
            technical skills with prototyping and visual design. In the future,
            I would like to develop more my analytical ux skills, and visual
            design skills.
          </p>
        </div>
      </section>
    </div>
    <Tabs />
  </Layout>
)

export default Generic
