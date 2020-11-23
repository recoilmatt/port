import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Tabs from '../components/Tabs'
import gvomockup from '../assets/images/gvomockup.jpg'
import golden from '../assets/images/golden.jpg'

const Generic = props => (
  <Layout>
    <Helmet>
      <title>Golden Vision Optometry</title>
      <meta name="description" content="Generic Page" />
    </Helmet>
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major" style={{ textAlign: 'center' }}>
            <h1>Golden Vision Optometry</h1>
          </header>

          <span className="image main">
            <img
              src={golden}
              style={{ height: '200px', objectFit: 'cover' }}
              alt=""
            />
          </span>

          <h2>Introduction</h2>
          <p>
            As a optician, I worked directly with the doctors and sales in order
            to create marketing materials, flyers, e-mail blasts, and
            advertising campaigns in order to promote designer brands such as IC
            Berlin, Rayban, and Tiffany & Co.
          </p>
          <h2>Role</h2>

          <p>Web Design / Digital Marketing Associate / Graphic Designer</p>
          <h2>Challenge</h2>

          <blockquote>
            While working at an optometric small business, the website needed
            content updates and a visual overhaul. I wanted to improve user
            experience, improve digital marketing, and attract potential new
            patients.
          </blockquote>
          <h2>Research</h2>

          <p>
            I asked patients about their eye appointment, and what could be done
            to create a better patient experience. The discussions that I had
            suggested that patients would like to be more connected digitally to
            schedule and remind them of their annual eye appointments for an
            overall smoother process. I was able to develop user personas for
            the ideal individual who would be using the Golden Vision Optometry
            website.
          </p>
          <p>
            The user needs that I’ve gathered are listed below:{' '}
            <ul>
              <li>
                Text/e-mail reminders for annual recall and upcoming
                appointments
              </li>
              <li>Online booking appointments</li>
              <li>Easier navigation to access information on website</li>
            </ul>
          </p>
          <h2>Site Audit</h2>
          <p>
            <ul>
              <li>
                The main user flows (online appointment scheduling + contacts
                reordering) were hard to navigate and not intuitive.
              </li>

              <li>
                Information architecture can be improved and navigation items
                can be put in collapsible menus and subcategories.
              </li>

              <li>
                Medical informational content with doctors and staff profiles
                needed to be updated.
              </li>

              <li>
                The website visually needed to be brought up to trends and
                standards.
              </li>

              <li>
                The business website was not SEO optimized with metatags and
                descriptions.
              </li>

              <li>
                Mobile viewing and responsive page viewing was non-existent.
              </li>
            </ul>
          </p>
          <h2>Goals</h2>
          <blockquote>
            + Improve Usability - a website for mobile and desktop will allow
            users to find office and medical information more efficiently.
            <br />
            + Increase click through rates on call to actions for booking
            appointments.
            <br />+ Update clean and modern visuals branding to attract a
            diverse patient base and make the website more appealing.
          </blockquote>

          <h2>Process</h2>
          <div style={{ textAlign: 'center' }}>
            <img
              src={gvomockup}
              style={{
                borderRadius: '8px',
                width: '100%',
              }}
              alt=""
            />
          </div>
          <div>
            <p>
              <br />
              In my first iteration, my design thinking was to create strong
              visual call to actions with the six block display, allowing the
              patient to reach necessary information about the practice as they
              scroll down the page. Each section banner of the front page and
              individual page uses parallax display in order to emulate a one
              page flow while scrolling through the page, thus bringing
              attention to important items and easier readability.
            </p>
            <p>
              I was able to subscribe to a third party software -- Demandforce
              -- in order to implement an online scheduling and appointment
              reminders that integrated with the OfficeMate EMR. This marketing
              decision was approved and allowed business growth.
            </p>
            <p>
              I applied heatmapping concepts using Hotjar to find the placement
              of the main CTA (request an appointment). Through my observations,
              I found out that many users preferred the left and center of the
              screen while scanning the screen as opposed to the right side of
              the screen.
            </p>
            <p>
              Some difficulties that I encountered during this project was media
              queries. I had to make the text and images responsive across
              different screen sizes and mediums, but this was later solved
              after users informed me.
            </p>
            <p>
              The blog carousel at the bottom the page had strong activity, and
              allows the patients to read fun information about the practice, as
              well as increase SEO visibility by creating new and informative
              content.
            </p>
          </div>
          <h2>Analysis + Thoughts</h2>
          <p>
            This project was the first opportunity for me to demonstrate my
            design, digital marketing, and branding skills for a small business
            as I was starting my transition to ux/ui design. Working directly
            with patients and doctors, I was able to gather research, create
            marketing materials, and solve problems by design. I created a
            website with a proper information architecture, allowing patients to
            increase readability and finding important medical information and
            increase the accessibility to schedule appointments online. In
            future redesigns, I would improve on my front end development skills
            and design different types of layouts for B2C.
          </p>
          <h2> Results </h2>

          <ul>
            <li>
              Developed a <strong>social media content plan</strong> for
              optometry blogs and eye care health information.
            </li>
            <li>
              SEO on Google is ranked consistently on the{' '}
              <strong>front page</strong> results with an avg. position 20.91.
            </li>
            <li>
              Instagram / Facebook <strong>media growth</strong> in followers
              and social media events.
            </li>
            <li>
              Google Analytics reported growth in almost <strong>29%</strong>{' '}
              activity in the past month.
            </li>
            <li>
              Online appointment system scheduling implemented improved check in{' '}
              <strong>efficiency</strong> and increased bookings.
            </li>
            <li>
              Impression rate of{' '}
              <strong>
                ~3,400 with over 500 unique visitors and a click rate of 2.09%
              </strong>{' '}
              in the month of Sept.
            </li>
          </ul>

          <Tabs />
        </div>
      </section>
    </div>
  </Layout>
)

export default Generic
